class EasterEggs {
    constructor() {
        this.bsodVisible = false;
        this.clippyVisible = false;
        this.bsodElement = null;
        this.clippyElement = null;
        this.clippyTimeout = null;
    }

    showBSOD() {
        if (this.bsodVisible) return;
        this.bsodVisible = true;

        const bsod = document.createElement('div');
        bsod.className = 'bsod';
        bsod.innerHTML = `
            <h1>A problem has been detected and Windows has been shut down</h1>
            <div class="bsod-content">
                <p>A problem has been detected and Windows has been shut down to prevent damage to Bob's reputation.</p>
                <p>TECHNICAL_INFORMATION:</p>
                <pre>*** STOP: 0x0000BOB (BOB_IS_TOO_AWESOME, 0x00000001, 0x02)

Beginning dump of Bob's skills...

100% complete

Bob Moure has crashed the hiring process with excellence.
Please restart your brain and review the resume again.

Technical information:
*** BOB: Bob_Moure_Exception
*** Apple_Genius_Exception
*** Corporate_IT_Exception</pre>
                <p>Press any key to continue (or click to dismiss)</p>
            </div>
        `;

        bsod.addEventListener('click', () => this.hideBSOD());
        document.addEventListener('keydown', () => this.hideBSOD(), { once: true });

        document.body.appendChild(bsod);
        soundManager.play('error');

        setTimeout(() => {
            bsod.style.display = 'none';
            this.bsodVisible = false;
        }, 5000);
    }

    hideBSOD() {
        if (this.bsodElement) {
            this.bsodElement.remove();
            this.bsodVisible = false;
        }
    }

    showClippy() {
        if (this.clippyVisible) return;

        const message = bobProfile.clippyMessages[Math.floor(Math.random() * bobProfile.clippyMessages.length)];

        const clippy = document.createElement('div');
        clippy.className = 'clippy';
        clippy.innerHTML = `
            <div class="clippy-icon" title="Click to dismiss">📎</div>
            <div class="clippy-content">${message}</div>
            <div class="clippy-buttons">
                <button class="clippy-button">Yes</button>
                <button class="clippy-button" onclick="this.closest('.clippy').remove(); easterEggs.clippyVisible = false;">No</button>
            </div>
        `;

        clippy.querySelector('.clippy-button').addEventListener('click', () => {
            clippy.remove();
            this.clippyVisible = false;
        });

        clippy.querySelector('.clippy-icon').addEventListener('click', () => {
            clippy.remove();
            this.clippyVisible = false;
        });

        document.body.appendChild(clippy);
        this.clippyVisible = true;
        soundManager.play('notify');

        setTimeout(() => {
            if (this.clippyVisible && clippy.parentNode) {
                clippy.remove();
                this.clippyVisible = false;
            }
        }, 10000);
    }

    showTaskManager() {
        const taskManager = document.createElement('div');
        taskManager.className = 'task-manager';
        taskManager.innerHTML = `
            <div class="task-manager-header">
                Windows Task Manager
            </div>
            <div class="task-manager-tabs">
                <div class="task-manager-tab active">Applications</div>
                <div class="task-manager-tab">Processes</div>
                <div class="task-manager-tab">Performance</div>
                <div class="task-manager-tab">Networking</div>
            </div>
            <div class="task-manager-content">
                <table class="task-manager-table">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${windowManager.windows.map(w => `
                            <tr>
                                <td>${w.element.querySelector('.window-title').textContent}</td>
                                <td>${w.minimized ? 'Not Responding' : 'Running'}</td>
                            </tr>
                        `).join('')}
                        <tr>
                            <td>Coffee.exe</td>
                            <td style="color: red;">Not Responding</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="task-manager-stats">
                <span>CPU Usage: 78%</span>
                <span>Processes: 34</span>
                <span>Commit Charge: 2024M / 4096M</span>
            </div>
            <div class="task-manager-buttons">
                <button class="clippy-button">End Task</button>
                <button class="clippy-button" onclick="this.closest('.task-manager').remove();">Switch To</button>
                <button class="clippy-button" onclick="this.closest('.task-manager').remove();">New Task...</button>
            </div>
        `;

        document.body.appendChild(taskManager);
    }

    showCommandPrompt() {
        windowManager.createWindow('cmd');
    }

    showWindowsUpdate() {
        const windowsUpdate = document.createElement('div');
        windowsUpdate.className = 'windows-update';
        windowsUpdate.innerHTML = `
            <div class="windows-update-header">
                <div class="windows-update-icon">🔄</div>
                Automatic Updates
            </div>
            <div class="windows-update-content">
                <p>Windows XP Professional is ready to install updates for Bob.</p>
                <p>Updates to download: 1</p>
                <p><strong>• New Skills Bundle v2024.1</strong><br>
                Size: 10 MB (of knowledge)<br>
                Type: Important<br>
                Description: Updates to Bob's IT knowledge base including AWS, Azure, and latest security practices.</p>
                <div class="windows-update-progress">
                    <div class="windows-update-bar">
                        <div class="windows-update-progress-bar"></div>
                    </div>
                    <p style="margin-top: 5px; text-align: center;">Downloading updates... 80%</p>
                </div>
            </div>
            <div class="windows-update-buttons">
                <button class="clippy-button">Remind me later</button>
                <button class="clippy-button" onclick="this.closest('.windows-update').remove();">Install Updates</button>
            </div>
        `;

        document.body.appendChild(windowsUpdate);
    }

    showRunDialog() {
        const runDialog = document.createElement('div');
        runDialog.className = 'run-dialog';
        runDialog.innerHTML = `
            <div class="run-dialog-header">Run</div>
            <div class="run-dialog-content">
                <label>Type the name of a program, folder, document, or Internet resource, and Windows will open it for you.</label>
                <label>Open:</label>
                <input type="text" id="run-input" placeholder="notepad, cmd, bob, bsod...">
            </div>
            <div class="run-dialog-buttons">
                <button class="clippy-button" onclick="this.closest('.run-dialog').remove();">Cancel</button>
                <button class="clippy-button" id="run-ok">OK</button>
            </div>
        `;

        runDialog.querySelector('#run-ok').addEventListener('click', () => {
            const input = runDialog.querySelector('#run-input').value.trim().toLowerCase();
            this.processRunCommand(input);
            runDialog.remove();
        });

        runDialog.querySelector('#run-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const input = e.target.value.trim().toLowerCase();
                this.processRunCommand(input);
                runDialog.remove();
            }
        });

        document.body.appendChild(runDialog);
        runDialog.querySelector('#run-input').focus();
    }

    processRunCommand(command) {
        const commands = {
            'notepad': () => windowManager.createWindow('notepad'),
            'cmd': () => windowManager.createWindow('cmd'),
            'bob': () => windowManager.createWindow('my-computer'),
            'msconfig': () => windowManager.createWindow('my-computer'),
            'explorer': () => windowManager.createWindow('my-computer'),
            'bsod': () => this.showBSOD(),
            'resume': () => windowManager.createWindow('resume'),
            'skills': () => windowManager.createWindow('skills'),
            'projects': () => windowManager.createWindow('projects'),
            'contact': () => windowManager.createWindow('contact'),
            'ie': () => windowManager.createWindow('web-portfolio'),
            'iexplore': () => windowManager.createWindow('web-portfolio'),
            'taskmgr': () => this.showTaskManager(),
            'notepad': () => windowManager.createWindow('notepad')
        };

        if (commands[command]) {
            commands[command]();
            soundManager.play('click');
        } else {
            alert('Windows cannot find \'' + command + '\'. Make sure you typed the name correctly, and then try again.');
            soundManager.play('error');
        }
    }

    showSolitaire() {
        const solitaire = document.createElement('div');
        solitaire.className = 'solitaire-game';
        solitaire.innerHTML = `
            <h2>♠️ Solitaire</h2>
            <p>Bob is too busy to play Solitaire.</p>
            <p>Let me win for you...</p>
            <p>🏆 Bob wins! (Automatic mode)</p>
            <button class="clippy-button" onclick="this.closest('.solitaire-game').remove();">Close</button>
        `;

        document.body.appendChild(solitaire);
    }

    showMinesweeper() {
        const minesweeper = document.createElement('div');
        minesweeper.className = 'minesweeper-game';
        minesweeper.innerHTML = `
            <h2>💣 Minesweeper</h2>
            <p>💥 BOOM!</p>
            <p>Bob doesn't play Minesweeper.</p>
            <p>Bob builds real systems.</p>
            <button class="clippy-button" onclick="this.closest('.minesweeper-game').remove();">Close</button>
        `;

        document.body.appendChild(minesweeper);
        soundManager.play('error');
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    startRandomClippy() {
        setInterval(() => {
            if (Math.random() < 0.1) {
                this.showClippy();
            }
        }, 60000);
    }
}

const easterEggs = new EasterEggs();