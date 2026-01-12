class Taskbar {
    constructor() {
        this.startButton = document.getElementById('start-button');
        this.startMenu = document.getElementById('start-menu');
        this.isStartMenuOpen = false;
        this.clock = document.getElementById('clock');
    }

    init() {
        this.setupStartButton();
        this.setupClock();
        this.setupQuickLaunch();
        this.setupSystemTray();
    }

    setupStartButton() {
        this.startButton.addEventListener('click', () => {
            this.toggleStartMenu();
            soundManager.play('click');
        });

        document.addEventListener('click', (e) => {
            if (!this.startMenu.contains(e.target) && !this.startButton.contains(e.target)) {
                if (this.isStartMenuOpen) {
                    this.closeStartMenu();
                }
            }
        });
    }

    toggleStartMenu() {
        if (this.isStartMenuOpen) {
            this.closeStartMenu();
        } else {
            this.openStartMenu();
        }
    }

    openStartMenu() {
        this.startMenu.classList.remove('hidden');
        this.isStartMenuOpen = true;
    }

    closeStartMenu() {
        this.startMenu.classList.add('hidden');
        this.isStartMenuOpen = false;
    }

    setupClock() {
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
    }

    updateClock() {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        this.clock.textContent = time;
        this.clock.title = 'Thursday, August 24, 2001';
    }

    setupQuickLaunch() {
        const quickLaunchIcons = document.querySelectorAll('.quick-launch-icon');
        quickLaunchIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                const windowType = icon.dataset.window;
                if (windowType) {
                    windowManager.createWindow(windowType);
                    soundManager.play('click');
                }
                this.closeStartMenu();
            });
        });
    }

    setupSystemTray() {
        const networkIcon = document.getElementById('network-icon');
        const volumeIcon = document.getElementById('volume-icon');

        networkIcon.addEventListener('click', () => {
            easterEggs.showNotification('🔒 Connected to Bob\'s Professional Network\nLatency: 0ms\nBandwidth: 10 Gbps');
        });

        volumeIcon.addEventListener('click', () => {
            const enabled = soundManager.toggle();
            const status = enabled ? '100%' : '0%';
            easterEggs.showNotification(`🔊 Volume: ${status}`);
        });

        this.clock.addEventListener('click', () => {
            easterEggs.showNotification('📅 Thursday, August 24, 2001\nWindows XP Release Date!');
        });
    }
}

const taskbar = new Taskbar();