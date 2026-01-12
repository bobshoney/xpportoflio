class Clippy {
    constructor() {
        this.showInterval = null;
        this.enabled = true;
        this.lastAppearance = 0;
        this.minInterval = 30000;
        this.maxInterval = 90000;
    }

    init() {
        this.startRandomAppearances();
    }

    startRandomAppearances() {
        this.showInterval = setInterval(() => {
            if (this.enabled && Math.random() < 0.3) {
                this.show();
            }
        }, 60000);
    }

    show() {
        const now = Date.now();
        if (now - this.lastAppearance < this.minInterval) return;

        this.lastAppearance = now;
        easterEggs.showClippy();
    }

    stop() {
        if (this.showInterval) {
            clearInterval(this.showInterval);
        }
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}

const clippy = new Clippy();