class BootScreen {
    constructor() {
        this.bootScreen = document.getElementById('boot-screen');
        this.progressBar = document.getElementById('boot-progress');
        this.loadingText = document.getElementById('boot-text');
        this.messages = bobProfile.bootMessages;
        this.currentMessageIndex = 0;
    }

    start() {
        let progress = 0;

        const interval = setInterval(() => {
            progress += Math.random() * 5;
            if (progress > 100) progress = 100;

            this.progressBar.style.width = `${progress}%`;

            if (progress % 10 < 5) {
                this.updateLoadingText();
            }

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => this.finish(), 1000);
            }
        }, 200);
    }

    updateLoadingText() {
        if (this.currentMessageIndex < this.messages.length) {
            this.loadingText.textContent = this.messages[this.currentMessageIndex];
            this.currentMessageIndex++;
        }
    }

    finish() {
        this.bootScreen.style.display = 'none';
        document.getElementById('desktop').classList.remove('hidden');
        document.getElementById('taskbar').classList.remove('hidden');
        soundManager.init();
    }
}

const bootScreen = new BootScreen();