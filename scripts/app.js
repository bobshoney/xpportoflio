class App {
    constructor() {
        this.init();
    }

    init() {
        bootScreen.start();

        setTimeout(() => {
            desktop.init();
            taskbar.init();
            startMenu.init();
            clippy.init();
            easterEggs.startRandomClippy();
            this.setupKeyboardShortcuts();
            this.setupWindowClickTracking();

            setTimeout(() => {
                windowManager.createWindow('my-computer');
            }, 500);
        }, 100);
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.altKey && e.key === 'Delete') {
                e.preventDefault();
                easterEggs.showTaskManager();
                soundManager.play('notify');
            }

            if (e.ctrlKey && e.key === 'r' && e.key === 'R') {
                e.preventDefault();
                easterEggs.showRunDialog();
            }

            if (e.key === 'Escape') {
                document.querySelectorAll('.task-manager, .windows-update, .run-dialog').forEach(el => {
                    if (el.parentNode) el.remove();
                });
            }
        });
    }

    setupWindowClickTracking() {
        document.addEventListener('mousedown', (e) => {
            const windowEl = e.target.closest('.window');
            if (windowEl) {
                const windowId = windowEl.id;
                windowManager.bringToFront(windowId);
            }
        });
    }
}

window.addEventListener('load', () => {
    new App();
});