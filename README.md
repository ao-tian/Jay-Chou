# 🎵 Jay Chou Fan Website (2000–2022)

![Website Demo](work_demo.png)

This is a modern, interactive tribute site dedicated to the legendary Taiwanese singer-songwriter **Jay Chou**. The website showcases his complete discography, career highlights, and provides an immersive fan experience with dynamic content rendering and modern UI design.

---

## 🌟 Features

### Modern UI/UX
- **Cinematic Hero Section** with particle effects and animated statistics
- **Interactive 3D Album Cards** with flip animations on hover
- **Glassmorphism Design** with backdrop blur effects
- **Responsive Layout** that works on all devices
- **Smooth Animations** and transitions throughout

### Content & Functionality
- **Complete Discography** - All 15 albums from 2000 to 2022
- **Dynamic Album Pages** - Single template page (`album.html`) that dynamically renders content based on URL parameters
- **Track Listings** - Full track lists with both Chinese and English names for each album
- **Lyrics Modal** - View song lyrics in both Chinese and English (where available)
- **Career Highlights Section** - Vertical list showcasing major achievements and milestones
- **Interactive Timeline** - Visual timeline of Jay Chou's career from 1997-2022
- **Buy/Stream Options** - Links to major music platforms (Apple Music, Spotify, Amazon Music, YouTube Music, NetEase Music, KKBOX) with official brand logos

### Technical Implementation
- **Modular Architecture** - Reusable components via `components.js`
- **Centralized Data** - Album data stored in `albums-data.js` for easy maintenance
- **Semantic HTML5** - Proper use of semantic tags for accessibility
- **CSS Design System** - Variables, consistent spacing, and unified styling
- **No Dependencies** - Pure HTML, CSS, and vanilla JavaScript

---

## 🚀 How to Run Locally

1. **Clone the repository**:

```bash
git clone https://github.com/TA-SWJD/Jay-Chou.git
cd Jay-Chou
```

2. **Open the main page**:

Simply open `JAYCHOUweb.html` in your web browser. All pages are self-contained and work without a local server.

Alternatively, use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000/JAYCHOUweb.html`
---

## 🚫 Disclaimer

This project was created for **educational and fan purposes only**. It is not affiliated with, endorsed by, or authorized by Jay Chou or JVR Music.  
All album images, lyrics, and references are used under fair use for non-commercial purposes.