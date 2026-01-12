# Quick Start Guide - Bob's Windows XP Portfolio

## 🚀 To Run the Project

### Option 1: Python (Recommended)
```bash
cd xp-portfolio-bob
python3 -m http.server 8000
```
Then open: http://localhost:8000

### Option 2: Node.js
```bash
cd xp-portfolio-bob
npx http-server -p 8000
```
Then open: http://localhost:8000

### Option 3: PHP
```bash
cd xp-portfolio-bob
php -S localhost:8000
```
Then open: http://localhost:8000

### Option 4: Direct File Open
Simply open `index.html` directly in your browser

---

## ⚠️ Important Notes

### Missing Assets (Will Need to Add)

**Icons:**
Currently using placeholder SVG icons. For authentic XP experience, you should:
1. Download Windows XP icons from a reputable source
2. Convert to SVG or PNG format (48x48px recommended)
3. Replace files in `assets/icons/`

**Sounds:**
Currently using placeholder text files. For authentic XP sounds:
1. Download Windows XP sound effects (WAV format):
   - startup.wav
   - click.wav
   - error.wav
   - notify.wav
   - minimize.wav
   - maximize.wav

2. Place in `assets/sounds/`

**Sources:**
- SoundFX Center: https://soundfxcenter.com/
- Windows XP Sound Effects Archive
- 101Soundboards: Windows XP sounds

**Wallpaper:**
Add `bliss.jpg` to `assets/images/` for the classic XP wallpaper.

---

## 🎮 What's Working

✅ **Fully Functional:**
- Boot screen with animation
- Desktop with XP-style icons
- Draggable windows
- Window controls (minimize, maximize, close)
- Taskbar with Start button
- Start menu with programs
- 11 themed portfolio windows
- Bob's complete resume (10-year IT career)
- Interactive Command Prompt
- 10+ Easter eggs
- Keyboard shortcuts
- System tray with clock
- Desktop context menu

✅ **Bob's Portfolio Content:**
- Resume with 10-year career history
- Apple Inc - Genius role
- Corp A, B, C career path
- 12 IT skills in Add/Remove Programs style
- 5 certifications
- 6 project folders
- Contact form with bobshoney@protonmail.com
- GitHub icon (links to github.com/bobshoney)
- Website icon (links to citadelsystems.github.io)
- Tech humor collection in Notepad
- Interactive CLI with commands (bob, skills, resume, etc.)

✅ **Easter Eggs:**
- Blue Screen of Death (type "bsod" in Command Prompt)
- Clippy (random appearances)
- Task Manager (Ctrl+Alt+Delete)
- Run Dialog (Ctrl+R)
- Windows Update notification
- Command Prompt with fun commands
- System Tray notifications
- "I'm Feeling Lucky" (right-click desktop)
- Solitaire (auto-plays)
- Minesweeper (always loses)

---

## 🎯 How to Use

### Opening Windows
- Double-click desktop icons
- Click Start menu items
- Use Command Prompt commands

### Window Controls
- Drag by title bar
- Minimize (bottom left of window)
- Maximize (center button)
- Close (X button)

### Keyboard Shortcuts
- `Ctrl+Alt+Delete` - Show Task Manager
- `Ctrl+R` - Open Run dialog
- `Escape` - Close dialogs

### Command Prompt Commands
- `bob` - Show Bob's info
- `skills` - List skills
- `resume` - Open resume
- `contact` - Open contact form
- `github` - Show GitHub link
- `website` - Show website link
- `coffee` - Request coffee refill
- `joke` - Tell a tech joke
- `bsod` - Trigger Blue Screen
- `help` - Show all commands

### System Tray
- Click clock - Shows XP release date
- Click network - Shows network status
- Click volume - Toggles sound

---

## 📝 Customizing Bob's Profile

Edit `scripts/bobData.js`:

```javascript
const bobProfile = {
    name: 'Bob Moure',
    title: 'Senior IT Professional',
    experienceYears: 10,
    email: 'bobshoney@protonmail.com',
    github: 'https://github.com/bobshoney',
    website: 'https://bobshoney.github.io/citadelsystems/',

    career: [ /* Update career history */ ],
    skills: [ /* Update skills list */ ],
    certifications: [ /* Update certifications */ ],
    projects: [ /* Update projects */ ],
    // ...
};
```

---

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
1. Push repository to GitHub
2. Go to Settings > Pages
3. Select main branch
4. Site: `username.github.io/repo-name`

---

## 🔧 Troubleshooting

**Icons not showing:**
- Check SVG files exist in `assets/icons/`
- Verify file paths in HTML and JS files

**Sounds not playing:**
- Browser requires user interaction first
- Click anywhere on page to initialize audio
- Check sound files are actual WAV files (not text)

**Windows not draggable:**
- Click and hold on window title bar (blue area at top)
- Drag while holding mouse button

**Boot screen not disappearing:**
- Wait for progress bar to complete
- Check browser console for JavaScript errors

---

## 📊 Project Stats

- **36 total files** (HTML, CSS, JS, SVG)
- **11 themed windows**
- **10+ Easter eggs**
- **12 IT skills** displayed
- **4 companies** in career history
- **5 certifications** listed
- **6 project folders** (with placeholders)
- **100% vanilla JS** (no frameworks)
- **0 build tools** required

---

## 💡 Pro Tips

1. **For Authentic XP Experience:**
   - Download real XP icons and sounds
   - Use classic XP wallpaper
   - Enable sound for full immersion

2. **For Interviews:**
   - Pre-open "My Computer" window (shows system info)
   - Have Command Prompt ready (shows interactive skills)
   - Click "I'm Feeling Lucky" to show random window
   - Type "bsod" for a memorable moment

3. **For Deployment:**
   - Test all features locally first
   - Check all icon and sound paths
   - Verify external links (GitHub, website)
   - Test on mobile (basic support)

---

**Built with ❤️ for Bob Moure's Windows XP Time Capsule Portfolio**

*August 24, 2001 - Windows XP Release Day*