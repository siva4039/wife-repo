# Do You Love Me? 💕

A fun, interactive love question app that won't let your special someone say no!

## Features
- Beautiful gradient design
- Interactive "No" button that moves away when you try to click it
- Floating hearts animation when clicking "Yes"
- Fully responsive design
- Works on mobile and desktop

## Run Locally

### Option 1: Simple HTTP Server (Python)
```bash
cd love-app
python -m http.server 8000
```
Then open http://localhost:8000

### Option 2: Node.js HTTP Server
```bash
npx http-server
```

### Option 3: Just open the file
Simply double-click `index.html` to open in your browser!

## Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push this code:
```bash
git init
git add .
git commit -m "Initial commit: Love app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages
   - Select "main" branch as source
   - Click Save

Your app will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## Customize
- Edit the question in `index.html`
- Change colors in `style.css`
- Modify button behavior in `script.js`

Enjoy! 💖
