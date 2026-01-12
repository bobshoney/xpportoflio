# Bob Moure - Windows XP Time Capsule Portfolio

A fully interactive Windows XP themed portfolio website showcasing Bob Moure's 10-year IT career.

## 🎯 Features

### Core XP UI Components
- ✅ Boot Screen with animated loading
- ✅ Desktop with XP-style icons
- ✅ Draggable, minimizable, maximizable windows
- ✅ Taskbar with Start button and system tray
- ✅ Start Menu with pinned programs
- ✅ Window management with z-index
- ✅ XP Luna theme styling

### Portfolio Windows
- ✅ My Computer - System Information
- ✅ Resume - Notepad-styled resume
- ✅ Skills - Add/Remove Programs style
- ✅ Projects - Windows Explorer folder view
- ✅ Experience - My Network Places
- ✅ Contact - Outlook Express form
- ✅ Web Portfolio - Internet Explorer iframe
- ✅ Notepad - Tech humor collection
- ✅ Recycle Bin - Deleted projects
- ✅ Command Prompt - Interactive CLI

### Easter Eggs
- ✅ Blue Screen of Death (BSOD)
- ✅ Clippy (random appearances)
- ✅ Task Manager (Ctrl+Alt+Delete)
- ✅ Windows Update dialog
- ✅ Run Dialog (Ctrl+R)
- ✅ Command Prompt commands (bob, skills, resume, etc.)
- ✅ System Tray notifications
- ✅ Desktop context menu with "I'm Feeling Lucky"

### Bob's Personalized Content
- ✅ 10-year IT career history
- ✅ Apple Inc - Genius (Technical Repair Specialist)
- ✅ Corp A, B, C - IT Support/Admin/Infrastructure
- ✅ 12 IT-specific skills
- ✅ 5 certifications
- ✅ 6 projects (with placeholders)
- ✅ Contact: bobshoney@protonmail.com
- ✅ GitHub: github.com/bobshoney (icon only)
- ✅ Website: citadelsystems.github.io (icon only)
- ✅ Tech humor jokes

## 📁 Project Structure

```
xp-portfolio-bob/
├── index.html                    # Main HTML file
├── styles/                      # CSS files
│   ├── global.css              # Global styles and boot screen
│   ├── desktop.css             # Desktop icons styling
│   ├── taskbar.css             # Taskbar styling
│   ├── startmenu.css           # Start menu styling
│   ├── windows.css             # Window component styling
│   └── eastereggs.css         # Easter eggs styling
├── scripts/                    # JavaScript files
│   ├── bobData.js             # Bob's profile data
│   ├── windowManager.js        # Window management system
│   ├── soundManager.js        # Sound effects
│   ├── eastereggs.js          # Easter eggs (BSOD, Clippy, etc.)
│   ├── bootScreen.js          # Boot animation
│   ├── desktop.js             # Desktop icons and context menu
│   ├── taskbar.js             # Taskbar functionality
│   ├── startmenu.js           # Start menu actions
│   ├── clippy.js              # Clippy appearances
│   └── app.js                # Main app initialization
├── assets/
│   ├── icons/                 # Icon files (SVG/PNG)
│   │   ├── my-computer.svg
│   │   ├── my-documents.svg
│   │   ├── recycle-bin.svg
│   │   ├── ie.png
│   │   ├── my-pictures.svg
│   │   ├── notepad.svg
│   │   ├── outlook.svg
│   │   ├── my-network.svg
│   │   ├── control-panel.svg
│   │   ├── cmd.svg
│   │   ├── folder.svg
│   │   ├── windows-xp.svg
│   │   ├── building.svg
│   │   ├── hard-drive.svg
│   │   ├── user.svg
│   │   ├── volume.svg
│   │   ├── network.svg
│   │   └── world.svg
│   ├── images/                # Images
│   │   └── bliss.jpg         # XP wallpaper
│   └── sounds/               # XP sound effects
│       ├── startup.wav
│       ├── click.wav
│       ├── error.wav
│       ├── notify.wav
│       ├── minimize.wav
│       └── maximize.wav
└── README.md                  # This file
```

## 🚀 Getting Started

### 1. Setup Assets (Required)

Since authentic Windows XP assets are copyrighted, you'll need to add your own:

#### Icons (48x48px recommended)
- Download Windows XP icons from a reputable source or create your own
- Convert to SVG or PNG format
- Place in `assets/icons/`

**Required icons:**
- `my-computer.svg/png`
- `my-documents.svg/png`
- `recycle-bin.svg/png`
- `ie.png` (Internet Explorer)
- `my-pictures.svg/png`
- `notepad.svg/png`
- `outlook.svg/png`
- `my-network.svg/png`
- `control-panel.svg/png`
- `cmd.svg/png`
- `folder.svg/png`
- `windows-xp.svg/png` (Start button)
- `building.svg/png`
- `hard-drive.svg/png`
- `user.svg/png`
- `volume.svg/png`
- `network.svg/png`
- `world.svg/png`

#### Sounds (WAV format)
Download authentic XP sounds:
- `startup.wav` - XP boot chime
- `click.wav` - Menu click
- `error.wav` - Error sound
- `notify.wav` - Notification
- `minimize.wav` - Window minimize
- `maximize.wav` - Window maximize

**Source:** Windows XP Sound Effects Archive or SoundFX Center

Place in `assets/sounds/`

#### Wallpaper
Add `bliss.jpg` to `assets/images/`
- Can use the classic XP "Bliss" wallpaper
- Or create a custom parody version

### 2. Run Locally

Since this is a vanilla HTML/CSS/JS project, no build process is needed:

```bash
cd xp-portfolio-bob

# Option 1: Python
python -m http.server 8000

# Option 2: Node.js (if you have http-server)
npx http-server

# Option 3: PHP
php -S localhost:8000
```

Then open http://localhost:8000 in your browser

### 3. Deploy

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages:**
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select main branch
4. Site will be available at `username.github.io/repo-name`

## 🎮 How to Use

### Desktop Icons
- Double-click any desktop icon to open its window
- Right-click for context menu with "I'm Feeling Lucky" option

### Windows
- Drag windows by title bar
- Minimize, maximize, close using window controls
- Click anywhere on window to bring to front

### Start Menu
- Click green "start" button to open
- Click menu items to open windows
- Click outside to close

### Taskbar
- Click window tabs to restore minimized windows
- System tray shows clock (XP release date), network, and volume
- Click system tray icons for notifications

### Command Prompt (Open via Start Menu or Run dialog)
Type commands:
- `bob` - Show Bob's information
- `skills` - List Bob's IT skills
- `resume` - Open resume
- `contact` - Open contact form
- `github` - Show GitHub link
- `website` - Show website link
- `coffee` - Request coffee refill
- `joke` - Tell a tech joke
- `bsod` - Trigger Blue Screen
- `help` - Show all commands

### Run Dialog
Press Ctrl+R or right-click desktop and select "Run"
Type commands: notepad, cmd, bob, bsod, etc.

### Keyboard Shortcuts
- **Ctrl+Alt+Delete** - Show Task Manager
- **Ctrl+R** - Open Run dialog
- **Escape** - Close dialogs

### Easter Eggs
1. **Blue Screen of Death** - Type "bsod" in Command Prompt or Run dialog
2. **Clippy** - Randomly appears (~10% chance per minute)
3. **Task Manager** - Press Ctrl+Alt+Delete
4. **Windows Update** - Click system tray notification
5. **Solitaire** - Hidden game (plays itself)
6. **Minesweeper** - Always loses on first click
7. **I'm Feeling Lucky** - Right-click desktop and select

## 📝 Customization

### Update Bob's Profile
Edit `scripts/bobData.js`:

```javascript
const bobProfile = {
    name: 'Bob Moure',
    title: 'Senior IT Professional',
    experienceYears: 10,
    email: 'bobshoney@protonmail.com',
    github: 'https://github.com/bobshoney',
    website: 'https://bobshoney.github.io/citadelsystems/',
    // ... update career, skills, projects, etc.
};
```

### Add Custom Windows
Edit `scripts/windowManager.js`:

1. Add to `windowTypes` object
2. Create content method in `createWindowContent()`
3. Add to desktop icons in `scripts/desktop.js`

### Modify Theme Colors
Edit `styles/global.css`:

```css
:root {
    --xp-blue: #245EDC;
    --xp-blue-light: #6B9FE4;
    --xp-blue-dark: #0A246A;
    --xp-green: #3C8E28;
    --xp-window-bg: #ECE9D8;
    // ... more variables
}
```

## 🎨 Tech Stack

- **HTML5** - Structure
- **CSS3** - Styling (no frameworks, pure CSS)
- **Vanilla JavaScript** - No frameworks, just pure JS
- **SVG Icons** - Scalable vector graphics
- **No build tools required** - Simple HTML/CSS/JS

## ✅ What's Implemented

- [x] Boot screen with animation
- [x] Desktop with XP icons
- [x] Taskbar with Start button
- [x] Start menu with programs
- [x] Draggable windows
- [x] Window controls (min/max/close)
- [x] Window z-index management
- [x] 11 themed windows
- [x] Bob's complete portfolio content
- [x] Interactive Command Prompt
- [x] 10+ Easter eggs
- [x] Sound effects system
- [x] System tray notifications
- [x] Desktop context menu
- [x] Keyboard shortcuts
- [x] XP Luna theme styling

## 🔧 Known Issues

1. **Icons** - Currently using placeholders, need authentic XP icons
2. **Sounds** - Placeholder files, need actual WAV files
3. **Wallpaper** - Placeholder, needs actual bliss.jpg
4. **Mobile responsiveness** - Basic support, needs more polish
5. **Browser audio policy** - Sounds require user interaction first

## 📄 License

This project is a portfolio/educational project. Windows XP UI is copyrighted by Microsoft. Use for personal/portfolio purposes only.

## 🙏 Acknowledgments

- Windows XP UI - Microsoft Corporation
- Luna Theme - Microsoft Corporation
- XP Sounds - Microsoft Corporation

## 👤 Contact

**Bob Moure** - Senior IT Professional
- Email: bobshoney@protonmail.com
- GitHub: github.com/bobshoney
- Website: citadelsystems.github.io

---

**Built with ❤️ for Bob's Windows XP Time Capsule Portfolio**
*August 24, 2001 - Windows XP Release Day*