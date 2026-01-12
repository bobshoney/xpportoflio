class SoundManager {
    constructor() {
        this.sounds = {
            startup: document.getElementById('startup-sound'),
            click: document.getElementById('click-sound'),
            error: document.getElementById('error-sound'),
            notify: document.getElementById('notify-sound'),
            minimize: document.getElementById('minimize-sound'),
            maximize: document.getElementById('maximize-sound')
        };
        this.enabled = true;
        this.initialized = false;
    }

    play(soundName) {
        if (!this.enabled || !this.sounds[soundName]) return;

        const sound = this.sounds[soundName];
        sound.currentTime = 0;
        sound.play().catch(() => {
            console.log('Audio play failed - user interaction required first');
        });
    }

    init() {
        if (this.initialized) return;

        document.addEventListener('click', () => {
            this.initialized = true;
            this.play('startup');
        }, { once: true });
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}

const soundManager = new SoundManager();