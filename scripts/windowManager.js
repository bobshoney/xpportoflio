class WindowManager {
    constructor() {
        this.windows = [];
        this.activeWindowId = null;
        this.highestZIndex = 100;
        this.container = document.getElementById('windows-container');
    }

    createWindow(type) {
        const windowConfig = windowTypes[type];
        if (!windowConfig) return null;

        const id = `window-${Date.now()}`;
        const windowEl = this.createWindowElement(id, windowConfig, type);

        this.container.appendChild(windowEl);
        this.windows.push({
            id,
            type,
            element: windowEl,
            minimized: false,
            maximized: false,
            zIndex: this.highestZIndex++
        });

        this.makeDraggable(windowEl);
        this.setupWindowEvents(windowEl, id);
        this.bringToFront(id);
        this.addToTaskbar(id, windowConfig);

        return id;
    }

    createWindowElement(id, config, type) {
        const windowEl = document.createElement('div');
        windowEl.className = 'window';
        windowEl.id = id;
        windowEl.style.width = `${config.width}px`;
        windowEl.style.height = `${config.height}px`;
        windowEl.style.left = `${100 + (this.windows.length * 20)}px`;
        windowEl.style.top = `${100 + (this.windows.length * 20)}px`;
        windowEl.style.zIndex = this.highestZIndex;

        windowEl.innerHTML = `
            <div class="window-titlebar">
                <img src="${config.icon}" class="window-icon" alt="Icon">
                <span class="window-title">${config.title}</span>
                <div class="window-controls">
                    <button class="window-control minimize" data-action="minimize">_</button>
                    <button class="window-control maximize" data-action="maximize">□</button>
                    <button class="window-control close" data-action="close">×</button>
                </div>
            </div>
            ${this.createWindowContent(config.content)}
        `;

        return windowEl;
    }

    createWindowContent(contentType) {
        switch(contentType) {
            case 'resume':
                return this.createResumeContent();
            case 'skills':
                return this.createSkillsContent();
            case 'projects':
                return this.createProjectsContent();
            case 'experience':
                return this.createExperienceContent();
            case 'contact':
                return this.createContactContent();
            case 'web-portfolio':
                return this.createWebPortfolioContent();
            case 'notepad':
                return this.createNotepadContent();
            case 'recycle-bin':
                return this.createRecycleBinContent();
            case 'my-computer':
                return this.createMyComputerContent();
            case 'cmd':
                return this.createCmdContent();
            default:
                return `<div class="window-content"><p>Content not found</p></div>`;
        }
    }

    createResumeContent() {
        return `
            <div class="window-menu">
                <span class="window-menu-item">File</span>
                <span class="window-menu-item">Edit</span>
                <span class="window-menu-item">Format</span>
                <span class="window-menu-item">View</span>
                <span class="window-menu-item">Help</span>
            </div>
            <div class="window-content" style="font-family: 'Courier New', monospace; white-space: pre-wrap; line-height: 1.6;">
${this.getResumeText()}
            </div>
            <div class="window-statusbar">
                <span>Ln 127, Col 1</span>
            </div>
        `;
    }

    createSkillsContent() {
        return `
            <div class="window-content">
                <div style="margin-bottom: 15px;">
                    <label>☑ Show updates</label>
                    <label>Sort by:</label>
                    <select><option selected>Name</option></select>
                </div>
                <table style="width: 100%; border-collapse: collapse; font-size: 11px;">
                    <thead>
                        <tr style="background: #f0f0f0; border-bottom: 2px solid #999;">
                            <th style="text-align: left; padding: 8px;">Skill Name</th>
                            <th style="text-align: left; padding: 8px;">Version</th>
                            <th style="text-align: left; padding: 8px;">Size</th>
                            <th style="text-align: left; padding: 8px;">Frequency</th>
                            <th style="text-align: left; padding: 8px;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${bobProfile.skills.map(skill => `
                            <tr style="border-bottom: 1px solid #ddd;">
                                <td style="padding: 8px;">${skill.name}</td>
                                <td style="padding: 8px;">${skill.version}</td>
                                <td style="padding: 8px;">${skill.size}</td>
                                <td style="padding: 8px;">${skill.frequency}</td>
                                <td style="padding: 8px;">
                                    <button style="padding: 2px 8px; font-size: 10px;">Change/Remove</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    createProjectsContent() {
        return `
            <div class="window-toolbar">
                <button class="toolbar-button">Back</button>
                <button class="toolbar-button">Forward</button>
                <button class="toolbar-button">Up</button>
                <button class="toolbar-button">Search</button>
                <button class="toolbar-button">Folders</button>
                <button class="toolbar-button">Views</button>
            </div>
            <div class="window-address-bar">
                <img src="assets/icons/folder.png" class="address-icon" alt="Folder">
                <input type="text" class="address-input" value="C:\\Bob\\Projects\\placeholder_projects\\" readonly>
            </div>
            <div class="window-content">
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 15px; padding: 20px;">
                    ${bobProfile.projects.map(project => `
                        <div style="text-align: center; cursor: pointer; padding: 10px;" class="project-folder">
                            <img src="assets/icons/folder.png" style="width: 64px; height: 64px; margin-bottom: 5px;">
                            <div style="font-size: 10px; word-break: break-all;">${project.name}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    createExperienceContent() {
        return `
            <div class="window-content">
                <div style="margin-bottom: 20px;">
                    <strong>Network Tasks</strong><br>
                    ☐ Add a network place<br>
                    ☐ Show icons for networked UPnP devices
                </div>
                <div style="margin-bottom: 20px;">
                    <strong>Other Places</strong><br>
                    ☑ My Documents<br>
                    ☑ My Computer<br>
                    ☑ Control Panel
                </div>
                <div>
                    <strong>Corporate Network</strong><br><br>
                    ${bobProfile.career.map(job => `
                        <div style="margin-bottom: 15px; padding: 10px; background: #f9f9f9; border: 1px solid #ddd;">
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <img src="assets/icons/building.png" style="width: 24px; height: 24px;">
                                <div>
                                    <strong>${job.company} (${job.role})</strong><br>
                                    <small>${job.years}</small>
                                </div>
                            </div>
                            <div style="margin-top: 8px; padding-left: 34px; font-size: 10px; color: #666;">
                                ${job.description}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    createContactContent() {
        return `
            <div class="window-menu">
                <span class="window-menu-item">File</span>
                <span class="window-menu-item">Edit</span>
                <span class="window-menu-item">View</span>
                <span class="window-menu-item">Tools</span>
                <span class="window-menu-item">Message</span>
                <span class="window-menu-item">Help</span>
            </div>
            <div class="window-content">
                <div style="margin-bottom: 10px;">
                    <label>From:</label>
                    <input type="text" value="bobshoney@protonmail.com" readonly style="width: 100%; padding: 5px; border: 1px solid #999; margin-top: 5px;">
                </div>
                <div style="margin-bottom: 10px;">
                    <label>To:</label>
                    <input type="text" placeholder="recruiter@company.com" style="width: 100%; padding: 5px; border: 1px solid #999; margin-top: 5px;">
                </div>
                <div style="margin-bottom: 10px;">
                    <label>Subject:</label>
                    <input type="text" placeholder="[Inquiry about Senior IT Position - Bob Moure]" style="width: 100%; padding: 5px; border: 1px solid #999; margin-top: 5px;">
                </div>
                <textarea style="width: 100%; height: 200px; padding: 10px; border: 1px solid #999; font-family: 'Tahoma', sans-serif; font-size: 11px;" placeholder="Dear Hiring Manager,

I am writing to express my interest in the Senior IT position at [Company Name].

With 10+ years of corporate IT experience, including roles at Apple Inc and multiple Fortune 500 companies, I bring a comprehensive skillset in enterprise IT infrastructure, system administration, and technical support.

I have attached my resume for your review. I am available for an interview at your earliest convenience.

Best regards,
Bob Moure
Email: bobshoney@protonmail.com
GitHub: [GitHub Icon] | Website: [Web Icon]"></textarea>
            </div>
            <div class="window-statusbar">
                <span>Attachments: [📎 bob_resume.pdf] 127 KB</span>
            </div>
        `;
    }

    createWebPortfolioContent() {
        return `
            <div class="window-menu">
                <span class="window-menu-item">File</span>
                <span class="window-menu-item">Edit</span>
                <span class="window-menu-item">View</span>
                <span class="window-menu-item">Favorites</span>
                <span class="window-menu-item">Tools</span>
                <span class="window-menu-item">Help</span>
            </div>
            <div class="window-toolbar">
                <button class="toolbar-button">Back</button>
                <button class="toolbar-button">Forward</button>
                <button class="toolbar-button">Stop</button>
                <button class="toolbar-button">Refresh</button>
                <button class="toolbar-button">Home</button>
            </div>
            <div class="window-address-bar">
                <img src="assets/icons/world.png" class="address-icon" alt="World">
                <input type="text" class="address-input" value="${bobProfile.website}" readonly>
                <button class="address-button">Go</button>
            </div>
            <div class="window-content" style="padding: 0;">
                <iframe src="${bobProfile.website}" style="width: 100%; height: 100%; border: none;"></iframe>
            </div>
            <div class="window-statusbar">
                <span>✓ Done | 0 Errors (奇迹!) | 127 items loaded</span>
            </div>
        `;
    }

    createNotepadContent() {
        return `
            <div class="window-menu">
                <span class="window-menu-item">File</span>
                <span class="window-menu-item">Edit</span>
                <span class="window-menu-item">Format</span>
                <span class="window-menu-item">View</span>
                <span class="window-menu-item">Help</span>
            </div>
            <div class="window-content" style="font-family: 'Courier New', monospace; white-space: pre-wrap; line-height: 1.6;">
${bobProfile.techJokes.join('\n\n')}
            </div>
            <div class="window-statusbar">
                <span>Ln 1, Col 1</span>
            </div>
        `;
    }

    createRecycleBinContent() {
        return `
            <div class="window-content">
                <table style="width: 100%; border-collapse: collapse; font-size: 11px;">
                    <thead>
                        <tr style="background: #f0f0f0; border-bottom: 2px solid #999;">
                            <th style="text-align: left; padding: 8px;">File</th>
                            <th style="text-align: left; padding: 8px;">Type</th>
                            <th style="text-align: left; padding: 8px;">Date Deleted</th>
                            <th style="text-align: left; padding: 8px;">Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #ddd;">
                            <td style="padding: 8px;">📄 old_code.js</td>
                            <td style="padding: 8px;">JavaScript</td>
                            <td style="padding: 8px;">2019</td>
                            <td style="padding: 8px;">5 KB</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #ddd;">
                            <td style="padding: 8px;">📄 failed_api.py</td>
                            <td style="padding: 8px;">Python</td>
                            <td style="padding: 8px;">2020</td>
                            <td style="padding: 8px;">12 KB</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #ddd;">
                            <td style="padding: 8px;">📄 broken_ui.html</td>
                            <td style="padding: 8px;">HTML</td>
                            <td style="padding: 8px;">2021</td>
                            <td style="padding: 8px;">8 KB</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="window-statusbar">
                <span>6 objects | Bob's mistakes (we all have them)</span>
            </div>
        `;
    }

    createMyComputerContent() {
        return `
            <div class="window-content">
                <div style="margin-bottom: 20px;">
                    <strong>System Tasks</strong><br>
                    ☑ View system information<br>
                    ☑ Add or remove programs<br>
                    ☑ Change a setting
                </div>
                <div style="margin-bottom: 20px;">
                    <strong>Other Places</strong><br>
                    ☑ My Documents<br>
                    ☑ Control Panel<br>
                    ☑ My Network Places
                </div>
                <div style="margin-bottom: 20px;">
                    <strong>Details This Folder</strong><br>
                    Bob Moure's IT Career<br>
                    10 Years Experience<br>
                    4 Companies Served<br>
                    1000+ Happy Users
                </div>
                <div>
                    <strong>Drives and Storage</strong><br><br>
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; padding: 10px; background: #f9f9f9; border: 1px solid #ddd;">
                        <img src="assets/icons/hard-drive.png" style="width: 32px; height: 32px;">
                        <div>
                            <strong>Local Disk (C:)</strong> Experience<br>
                            <small>10 GB total, 5 GB free space</small>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; padding: 10px; background: #f9f9f9; border: 1px solid #ddd;">
                        <img src="assets/icons/hard-drive.png" style="width: 32px; height: 32px;">
                        <div>
                            <strong>Local Disk (D:)</strong> Projects<br>
                            <small>100 GB total, 95 GB free space</small>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #f9f9f9; border: 1px solid #ddd;">
                        <img src="assets/icons/hard-drive.png" style="width: 32px; height: 32px;">
                        <div>
                            <strong>Local Disk (E:)</strong> Knowledge<br>
                            <small>Unlimited</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    createCmdContent() {
        return `
            <div class="command-prompt-titlebar">
                <span>C:\\Windows\\System32\\cmd.exe</span>
                <button onclick="windowManager.closeWindow('${this.activeWindowId}')" style="background: #ccc; border: 1px solid #999; padding: 2px 8px;">×</button>
            </div>
            <div class="command-prompt-content" id="cmd-content">
                <div>Microsoft Windows XP [Version 5.1.2600]</div>
                <div>(C) Copyright 1985-2001 Microsoft Corp. (jk, it's Bob)</div>
                <br>
                <div>C:\\Bob&gt;</div>
            </div>
            <div class="command-prompt-input">
                <span>C:\\Bob&gt;</span>
                <input type="text" id="cmd-input" autofocus>
            </div>
        `;
    }

    getResumeText() {
        return `# BOB MOURE - SENIOR IT PROFESSIONAL
=====================================

## CONTACT INFORMATION
----------------------
Email: bobshoney@protonmail.com
GitHub: [GitHub Icon] - 10+ repositories
Website: [Web Icon] - citadelsystems.github.io

## PROFESSIONAL SUMMARY
----------------------
Experienced IT professional with 10+ years in corporate environments.
Specialized in Apple device repair, infrastructure support, and system
administration. Proven track record at Fortune 500 companies.

## WORK EXPERIENCE
------------------

${bobProfile.career.map(job => `
[${job.years}]  ${job.company} - ${job.role}
  ${job.description}
  ${job.achievements.map(a => `  • ${a}`).join('\n')}
`).join('\n')}

## TECHNICAL SKILLS
------------------
${bobProfile.skills.map(skill => `✓ ${skill.name}`).join('\n')}

## CERTIFICATIONS
-----------------
${bobProfile.certifications.map(cert => `- ${cert}`).join('\n')}

## EDUCATION
------------
[Year]  [University Name] - B.S. Information Technology
       Dean's List

## References available upon request.

[End of file - 127 lines]`;
    }

    makeDraggable(element) {
        const titlebar = element.querySelector('.window-titlebar');
        let isDragging = false;
        let startX, startY, initialX, initialY;

        titlebar.addEventListener('mousedown', (e) => {
            if (e.target.closest('.window-controls')) return;

            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            initialX = element.offsetLeft;
            initialY = element.offsetTop;
            this.bringToFront(element.id);
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            element.style.left = `${initialX + dx}px`;
            element.style.top = `${initialY + dy}px`;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }

    setupWindowEvents(element, id) {
        const buttons = element.querySelectorAll('.window-control');

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                if (action === 'close') {
                    this.closeWindow(id);
                } else if (action === 'minimize') {
                    this.minimizeWindow(id);
                } else if (action === 'maximize') {
                    this.maximizeWindow(id);
                }
            });
        });

        element.addEventListener('click', () => {
            this.bringToFront(id);
        });

        if (element.querySelector('#cmd-input')) {
            this.setupCmd(element.querySelector('#cmd-input'));
        }
    }

    setupCmd(input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const command = input.value.trim().toLowerCase();
                const output = this.processCmd(command);
                const content = document.getElementById('cmd-content');
                content.innerHTML += `<div>C:\\Bob&gt;${input.value}</div>`;
                content.innerHTML += `<div style="margin-bottom: 10px;">${output}</div>`;
                input.value = '';
                content.scrollTop = content.scrollHeight;
            }
        });
    }

    processCmd(command) {
        const commands = {
            'bob': `<strong>Bob Moure - Senior IT Professional</strong><br>Experience: 10 years in corporate IT<br>Companies: Apple Inc, Corp A, Corp B, Corp C<br>Email: bobshoney@protonmail.com<br>GitHub: [GitHub Icon] - 10+ repositories<br>Website: [Web Icon] - citadelsystems.github.io`,
            'skills': `<strong>Bob's Technical Skills:</strong><br>${bobProfile.skills.map(s => `✓ ${s.name}`).join('<br>')}`,
            'resume': `Opening Bob's resume...<br><em>(Resume window will appear)</em>`,
            'contact': `Opening contact form...<br><em>(Contact window will appear)</em>`,
            'github': `🔗 GitHub: <a href="${bobProfile.github}" target="_blank" style="color: white;">${bobProfile.githubDisplay}</a>`,
            'website': `🌐 Website: <a href="${bobProfile.website}" target="_blank" style="color: white;">${bobProfile.websiteDisplay}</a>`,
            'coffee': `☕ Coffee refill requested...<br>    Status: Bob's coffee mug is now full!<br>    Level: Maximum Caffeination Achieved<br>    Productivity: +500%`,
            'joke': bobProfile.techJokes[0].split('\n').join('<br>'),
            'bsod': `💾 Triggering Blue Screen of Death...<br>    (Window will appear in 3... 2... 1...)`,
            'help': `For more information on a specific command, type HELP command-name.<br><br>bob - Show Bob's information<br>skills - List Bob's IT skills<br>resume - Open Bob's resume<br>contact - Open contact form<br>github - Open Bob's GitHub<br>website - Open Bob's website<br>coffee - Request coffee refill<br>joke - Tell a tech joke<br>bsod - Trigger Blue Screen (for fun)<br>exit - Exit command prompt`,
            'exit': `Exiting command prompt...`,
            'cls': '',
            'clear': ''
        };

        if (command === 'bsod') {
            setTimeout(() => easterEggs.showBSOD(), 1000);
        }

        if (command === 'resume') {
            setTimeout(() => this.createWindow('resume'), 500);
        }

        if (command === 'contact') {
            setTimeout(() => this.createWindow('contact'), 500);
        }

        return commands[command] || `'${command}' is not recognized as an internal or external command.`;
    }

    bringToFront(id) {
        const window = this.windows.find(w => w.id === id);
        if (window) {
            window.element.style.zIndex = this.highestZIndex++;
            this.activeWindowId = id;

            document.querySelectorAll('.taskbar-program').forEach(tab => {
                tab.classList.remove('active');
            });
            const tab = document.querySelector(`[data-window-id="${id}"]`);
            if (tab) tab.classList.add('active');
        }
    }

    minimizeWindow(id) {
        const window = this.windows.find(w => w.id === id);
        if (window) {
            window.minimized = true;
            window.element.classList.add('minimized');
            soundManager.play('minimize');
        }
    }

    maximizeWindow(id) {
        const window = this.windows.find(w => w.id === id);
        if (window) {
            window.maximized = !window.maximized;
            window.element.classList.toggle('maximized');
            soundManager.play('maximize');
        }
    }

    closeWindow(id) {
        const windowIndex = this.windows.findIndex(w => w.id === id);
        if (windowIndex > -1) {
            const window = this.windows[windowIndex];
            window.element.remove();
            this.windows.splice(windowIndex, 1);

            const tab = document.querySelector(`[data-window-id="${id}"]`);
            if (tab) tab.remove();
        }
    }

    addToTaskbar(id, config) {
        const taskbarPrograms = document.getElementById('taskbar-programs');
        const tab = document.createElement('div');
        tab.className = 'taskbar-program active';
        tab.dataset.windowId = id;
        tab.innerHTML = `
            <img src="${config.icon}" alt="${config.title}">
            <span>${config.title.substring(0, 15)}...</span>
        `;
        tab.addEventListener('click', () => {
            const window = this.windows.find(w => w.id === id);
            if (window) {
                if (window.minimized) {
                    window.minimized = false;
                    window.element.classList.remove('minimized');
                }
                this.bringToFront(id);
            }
        });
        taskbarPrograms.appendChild(tab);
    }

    restoreWindow(id) {
        const window = this.windows.find(w => w.id === id);
        if (window && window.minimized) {
            window.minimized = false;
            window.element.classList.remove('minimized');
            this.bringToFront(id);
        }
    }
}

const windowManager = new WindowManager();