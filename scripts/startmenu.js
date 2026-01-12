class StartMenu {
    constructor() {
        this.menuItems = document.querySelectorAll('.menu-item');
        this.logoffButton = document.querySelector('.logoff');
        this.shutdownButton = document.querySelector('.shutdown');
    }

    init() {
        this.setupMenuItems();
        this.setupLogoffButton();
        this.setupShutdownButton();
    }

    setupMenuItems() {
        this.menuItems.forEach(item => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;
                this.handleAction(action);
                taskbar.closeStartMenu();
                soundManager.play('click');
            });
        });
    }

    handleAction(action) {
        const actions = {
            'ie': () => windowManager.createWindow('web-portfolio'),
            'notepad': () => windowManager.createWindow('notepad'),
            'cmd': () => windowManager.createWindow('cmd'),
            'contact': () => windowManager.createWindow('contact'),
            'my-computer': () => windowManager.createWindow('my-computer'),
            'resume': () => windowManager.createWindow('resume'),
            'skills': () => windowManager.createWindow('skills'),
            'projects': () => windowManager.createWindow('projects'),
            'experience': () => windowManager.createWindow('experience')
        };

        if (actions[action]) {
            actions[action]();
        }
    }

    setupLogoffButton() {
        this.logoffButton.addEventListener('click', () => {
            easterEggs.showNotification('👋 Log Off: Bob Moure\nSee you next time!');
            setTimeout(() => {
                alert('Goodbye, Bob! See you next time!');
                taskbar.closeStartMenu();
            }, 1000);
        });
    }

    setupShutdownButton() {
        this.shutdownButton.addEventListener('click', () => {
            this.showShutdownDialog();
        });
    }

    showShutdownDialog() {
        const shutdownDialog = document.createElement('div');
        shutdownDialog.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            background: white;
            border: 1px solid #999;
            box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
            z-index: 99998;
            font-size: 11px;
            font-family: 'Tahoma', sans-serif;
        `;

        shutdownDialog.innerHTML = `
            <div style="background: linear-gradient(to bottom, #3b82f6, #1e40af); color: white; padding: 8px; font-weight: bold;">
                Shut Down Windows
            </div>
            <div style="padding: 20px; text-align: center;">
                <p style="margin-bottom: 15px;">What do you want the computer to do?</p>
                <select id="shutdown-action" style="width: 100%; padding: 5px; border: 1px solid #999; margin-bottom: 15px; font-size: 11px;">
                    <option value="shutdown">Shut down</option>
                    <option value="restart">Restart</option>
                    <option value="standby">Stand by</option>
                    <option value="hibernate">Hibernate</option>
                </select>
            </div>
            <div style="display: flex; gap: 10px; justify-content: flex-end; padding: 10px 15px; background: #f0f0f0; border-top: 1px solid #999;">
                <button id="shutdown-cancel" style="padding: 5px 15px; background: linear-gradient(to bottom, #ffffff, #e5e5e5); border: 1px solid #999; border-radius: 3px; cursor: pointer; font-size: 11px;">Cancel</button>
                <button id="shutdown-ok" style="padding: 5px 15px; background: linear-gradient(to bottom, #22c55e, #16a34a); border: 1px solid #999; border-radius: 3px; cursor: pointer; font-size: 11px; color: white;">OK</button>
            </div>
        `;

        shutdownDialog.querySelector('#shutdown-cancel').addEventListener('click', () => {
            shutdownDialog.remove();
        });

        shutdownDialog.querySelector('#shutdown-ok').addEventListener('click', () => {
            const action = shutdownDialog.querySelector('#shutdown-action').value;
            shutdownDialog.remove();
            this.performShutdown(action);
        });

        document.body.appendChild(shutdownDialog);
    }

    performShutdown(action) {
        const messages = {
            shutdown: 'Shutting down...',
            restart: 'Restarting...',
            standby: 'Entering standby mode...',
            hibernate: 'Hibernating...'
        };

        easterEggs.showNotification(`⚡ ${messages[action]}`);

        if (action === 'shutdown') {
            setTimeout(() => {
                alert('👋 Goodbye!\n\n(Refresh the page to restart Bob\'s XP Portfolio)');
            }, 1000);
        } else {
            setTimeout(() => {
                alert(`🔄 ${messages[action]}\n\n(Just kidding, Bob is always available!)`);
            }, 1000);
        }

        taskbar.closeStartMenu();
    }
}

const startMenu = new StartMenu();