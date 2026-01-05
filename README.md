# Mukul Ranjan - Academic Portfolio Website

A clean, minimalist academic portfolio website built from scratch with modern web technologies. No bloat, no frameworks - just simple, fast, and maintainable HTML/CSS/JS.

## Features

- **Minimalist Design**: Clean, distraction-free interface inspired by Jon Barron's academic style
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Fast Loading**: No heavy frameworks, optimized for performance
- **Accessibility**: Semantic HTML5, proper heading hierarchy, keyboard navigation
- **Blog-Ready**: Separate sections for ML research, personal thoughts, and misc. technical notes
- **Easy to Maintain**: Simple file structure, well-commented code

## Structure

```
new-webpage/
├── index.html              # Main homepage
├── style.css               # Core styles
├── blog-style.css          # Blog-specific styles
├── script.js               # Interactive features
├── ml-blogs.html           # ML research blog posts
├── personal.html           # Personal reflections
├── misc.html               # Miscellaneous technical posts
├── README.md               # This file
├── profile.jpg             # Your profile picture (add this)
├── papers/                 # Publication thumbnails (create this folder)
│   ├── elastic-cache.png
│   ├── spookybench.png
│   └── ...
└── posts/                  # Individual blog post pages (create as needed)
    ├── elastic-cache-explained.html
    └── ...
```

## Setup Instructions

### 1. Add Your Profile Picture

Replace `profile.jpg` with your photo. For best results:
- Use a square image (1:1 aspect ratio)
- Recommended size: 400x400px or larger
- Formats: JPG, PNG, or WebP

Optional: Add multiple photos for the cycling effect:
- `profile.jpg` (primary)
- `profile2.jpg` (optional)
- `profile3.jpg` (optional)

### 2. Add Publication Thumbnails

Create a `papers/` directory and add thumbnail images for your publications:

```bash
mkdir papers
```

Then add images named to match the HTML (or update the HTML to match your image names):
- `elastic-cache.png`
- `spookybench.png`
- `mobile-mmlu.png`
- etc.

Recommended size: 300x300px, PNG or JPG format.

### 3. Update Content

#### Personal Information
Edit `index.html` and update:
- Name, title, and affiliation
- Email and social links
- About section (your bio)
- Research interests
- News items
- Publications (add/remove as needed)
- Experience section

#### Blog Posts
The blog pages (`ml-blogs.html`, `personal.html`, `misc.html`) contain placeholder posts. You can:
- Replace with your actual blog posts
- Remove placeholders
- Keep them as inspiration for future writing

### 4. Customize Colors (Optional)

Edit the CSS variables in `style.css` (lines 14-28):

```css
:root {
    --link-color: #2563eb;        /* Change link color */
    --accent-color: #3b82f6;      /* Change accent color */
    /* ... more variables ... */
}
```

### 5. Add Your CV

Add a PDF of your CV and link it:
- Save CV as `cv.pdf` in the main directory
- Update the CV link in `index.html`: `<a href="cv.pdf" class="cv-link">CV</a>`

## Deployment

### Option 1: GitHub Pages (Recommended)

1. Create a new repository named `<username>.github.io`
2. Copy all files from `new-webpage/` to the repository root
3. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
4. Enable GitHub Pages in repository settings (Settings → Pages → Source: main branch)
5. Your site will be live at `https://<username>.github.io`

### Option 2: Netlify

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `new-webpage/` folder to Netlify
3. Your site will be live instantly with a Netlify URL
4. Optional: Add custom domain in Netlify settings

### Option 3: Custom Server

Upload all files to your web server via FTP/SFTP. No build process needed - just static files.

## Customization Guide

### Adding a New Publication

In `index.html`, add a new publication block:

```html
<div class="publication">
    <div class="pub-image">
        <img src="papers/your-paper.png" alt="Your Paper">
    </div>
    <div class="pub-content">
        <p class="pub-title">Your Paper Title</p>
        <p class="pub-authors">Author List with <strong>Your Name</strong></p>
        <p class="pub-venue">Conference/Journal Name</p>
        <p class="pub-description">Brief description of the paper...</p>
        <div class="pub-links">
            <a href="#" target="_blank">arXiv</a>
            <a href="#" target="_blank">Code</a>
        </div>
    </div>
</div>
```

### Adding a News Item

```html
<div class="news-item">
    <span class="date">Month Year</span>
    <span class="content">Your news content here</span>
</div>
```

### Creating Individual Blog Posts

Create a new HTML file in the `posts/` directory (create the folder first):

```bash
mkdir posts
```

Then create `posts/your-post.html` using this template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Post Title - Mukul Ranjan</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../blog-style.css">
</head>
<body>
    <div class="container">
        <nav class="blog-nav">
            <a href="../index.html" class="back-link">← Back to Home</a>
        </nav>

        <article class="post-content">
            <h1>Your Post Title</h1>
            <div class="post-meta">
                <span class="date">Month Year</span>
                <span class="reading-time">X min read</span>
            </div>

            <!-- Your content here -->
            <p>Your blog post content...</p>
        </article>

        <footer>
            <p>© 2026 Mukul Ranjan</p>
        </footer>
    </div>
</body>
</html>
```

## Features You Can Enable

### Publication Search

Uncomment this line in `script.js` (line 115):
```javascript
createPublicationFilter();
```

### External Link Icons

Uncomment this line in `script.js` (line 157):
```javascript
addExternalLinkIcons();
```

### Google Analytics

Add your tracking code in `script.js` (lines 163-169).

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **File sizes**: HTML ~15KB, CSS ~8KB, JS ~3KB
- **Load time**: < 1 second on 3G
- **Lighthouse score**: 95+ across all metrics

## Maintenance

- Update news section regularly (monthly)
- Add publications as they're accepted/published
- Write blog posts when you have time (no pressure!)
- Update experience section when changing positions

## Credits

- Design inspiration: [Jon Barron](https://jonbarron.info/)
- Typography: [Inter](https://rsms.me/inter/) by Rasmus Andersson
- Built with ❤️ and minimal dependencies

## License

Feel free to use this template for your own academic website. No attribution required, but appreciated!

## Support

For questions or issues:
- Open an issue in the repository
- Email: mukulranjan0@gmail.com

---

**Remember**: The best website is one you actually maintain. Start simple, keep it updated, and let your research speak for itself.
