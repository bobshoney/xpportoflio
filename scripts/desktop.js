class Desktop {
    constructor() {
        this.container = document.getElementById('desktop-icons');
        this.icons = [
            { name: 'My Computer', type: 'my-computer', icon: 'my-computer.svg' },
            { name: 'My Documents', type: 'resume', icon: 'my-documents.svg' },
            { name: 'Recycle Bin', type: 'recycle-bin', icon: 'recycle-bin.svg' },
            { name: 'Internet Explorer', type: 'web-portfolio', icon: 'ie.svg' },
            { name: 'My Pictures', type: 'projects', icon: 'my-pictures.svg' },
            { name: 'Notepad', type: 'notepad', icon: 'notepad.svg' },
            { name: 'Outlook Express', type: 'contact', icon: 'outlook.svg' },
            { name: 'My Network Places', type: 'experience', icon: 'my-network.svg' },
            { name: 'Control Panel', type: 'skills', icon: 'control-panel.svg' }
        ];
        this.contextMenu = null;
    }

    init() {
        this.render();
        this.setupContextMenu();
        this.setupDoubleClickListener();
    }

    render() {
        this.container.innerHTML = this.icons.map(icon => `
            <div class="desktop-icon" data-type="${icon.type}" title="${icon.name}">
                <img src="assets/icons/${icon.icon}" alt="${icon.name}">
                <span>${icon.name}</span>
            </div>
        `).join('');

        this.icons.forEach(icon => {
            const iconElement = this.container.querySelector(`[data-type="${icon.type}"]`);
            iconElement.addEventListener('dblclick', () => {
                windowManager.createWindow(icon.type);
                soundManager.play('click');
            });

            iconElement.addEventListener('click', (e) => {
                this.container.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
                iconElement.classList.add('selected');
            });
        });
    }

    setupContextMenu() {
        document.getElementById('desktop').addEventListener('contextmenu', (e) => {
            e.preventDefault();

            if (this.contextMenu) {
                this.contextMenu.remove();
            }

            this.contextMenu = document.createElement('div');
            this.contextMenu.style.cssText = `
                position: fixed;
                top: ${e.clientY}px;
                left: ${e.clientX}px;
                background: white;
                border: 1px solid #999;
                box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
                z-index: 100000;
                min-width: 200px;
                font-size: 11px;
                font-family: 'Tahoma', sans-serif;
            `;

            this.contextMenu.innerHTML = `
                <div style="padding: 5px 10px; cursor: pointer;" class="context-menu-item">View</div>
                <div style="padding: 5px 10px; cursor: pointer;" class="context-menu-item">Arrange Icons By</div>
                <div style="padding: 5px 10px; cursor: pointer;" class="context-menu-item">Refresh</div>
                <div style="border-top: 1px solid #999; margin: 3px 0;"></div>
                <div style="padding: 5px 10px; cursor: pointer;" class="context-menu-item">New</div>
                <div style="border-top: 1px solid #999; margin: 3px 0;"></div>
                <div style="padding: 5px 10px; cursor: pointer; color: #3b82f6;" class="context-menu-item" data-action="properties">Properties</div>
                <div style="border-top: 1px solid #999; margin: 3px 0;"></div>
                <div style="padding: 5px 10px; cursor: pointer; color: #3b82f6;" class="context-menu-item" data-action="feeling-lucky">I'm Feeling Lucky</div>
            `;

            this.contextMenu.querySelectorAll('.context-menu-item').forEach(item => {
                item.addEventListener('click', () => {
                    const action = item.dataset.action;
                    if (action === 'properties') {
                        windowManager.createWindow('my-computer');
                    } else if (action === 'feeling-lucky') {
                        this.feelingLucky();
                    }
                    this.contextMenu.remove();
                });
                item.addEventListener('mouseover', () => {
                    item.style.background = '#3b82f6';
                    item.style.color = 'white';
                });
                item.addEventListener('mouseout', () => {
                    item.style.background = '';
                    item.style.color = '';
                });
            });

            document.body.appendChild(this.contextMenu);

            document.addEventListener('click', () => {
                if (this.contextMenu) {
                    this.contextMenu.remove();
                    this.contextMenu = null;
                }
            }, { once: true });
        });
    }

    setupDoubleClickListener() {
        document.getElementById('desktop').addEventListener('dblclick', (e) => {
            if (e.target.id === 'desktop' || e.target.classList.contains('desktop') || e.target.closest('#desktop-icons') === null) {
                soundManager.play('click');
            }
        });
    }

    feelingLucky() {
        const windows = ['resume', 'skills', 'projects', 'experience', 'contact', 'notepad'];
        const randomWindow = windows[Math.floor(Math.random() * windows.length)];
        windowManager.createWindow(randomWindow);
        easterEggs.showNotification("🎉 Feeling lucky! Here's a random window!");
    }
}

const desktop = new Desktop();