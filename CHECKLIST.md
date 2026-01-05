# Website Launch Checklist

## Before Launch

### Content Updates
- [ ] Add your profile picture (`profile.jpg`)
- [ ] Update name, title, and affiliation in `index.html`
- [ ] Update email address and social links
- [ ] Review and update the About section
- [ ] Verify all publication details are correct
- [ ] Update the News section with recent items
- [ ] Review Experience section for accuracy
- [ ] Add or remove publications as needed

### Assets
- [ ] Create `papers/` directory
- [ ] Add publication thumbnail images
- [ ] Optimize images (recommended: use TinyPNG or similar)
- [ ] Add your CV PDF (optional)
- [ ] Test all images load correctly

### Customization (Optional)
- [ ] Customize color scheme in `style.css`
- [ ] Adjust font sizes if needed
- [ ] Review dark mode colors
- [ ] Update footer text

### Testing
- [ ] Test on desktop browser
- [ ] Test on mobile device
- [ ] Test all internal links
- [ ] Test all external links
- [ ] Verify dark mode works
- [ ] Check responsive layout at different screen sizes
- [ ] Proofread all text content

## Deployment

### GitHub Pages
- [ ] Create GitHub repository `<username>.github.io`
- [ ] Copy all files to repository
- [ ] Push to GitHub
- [ ] Enable GitHub Pages in settings
- [ ] Verify site is live
- [ ] Test deployed version

### Alternative Hosting
- [ ] Choose hosting provider (Netlify, Vercel, etc.)
- [ ] Deploy files
- [ ] Configure custom domain (if applicable)
- [ ] Test deployed version

## After Launch

### SEO & Analytics
- [ ] Submit to Google Search Console
- [ ] Add Google Analytics (optional, in `script.js`)
- [ ] Create `robots.txt` if needed
- [ ] Add `sitemap.xml` if needed

### Sharing
- [ ] Update LinkedIn profile with website link
- [ ] Update Twitter/X bio with website link
- [ ] Add to email signature
- [ ] Share on academic profiles (ResearchGate, etc.)

### Maintenance Schedule
- [ ] Update news section monthly
- [ ] Add new publications when accepted
- [ ] Write blog posts when inspired (no pressure!)
- [ ] Update experience section when changing positions
- [ ] Review and update content quarterly

## Optional Enhancements

### Features to Add Later
- [ ] Enable publication search (uncomment in `script.js`)
- [ ] Add external link icons (uncomment in `script.js`)
- [ ] Create individual blog post pages
- [ ] Add RSS feed for blog
- [ ] Add social sharing buttons
- [ ] Implement commenting system (Disqus, utterances, etc.)
- [ ] Add MathJax for equations (if needed)
- [ ] Create a projects/code section

### Content Ideas
- [ ] Write about your research journey
- [ ] Explain your papers in simple terms
- [ ] Share coding tutorials
- [ ] Document tools and workflows
- [ ] Reflect on conferences attended
- [ ] Share reading lists or paper recommendations

## Quick Reference

### File Sizes to Aim For
- Images: < 200 KB each
- Profile photo: < 100 KB
- Total page size: < 500 KB

### Common Updates

**Add a publication:**
Edit `index.html`, find the publications section, copy an existing publication block, and update the details.

**Add a news item:**
Edit `index.html`, find the news section, add a new `.news-item` div.

**Update bio:**
Edit `index.html`, find the `#about` section, update the paragraphs.

**Change colors:**
Edit `style.css`, modify the CSS variables under `:root`.

**Write a blog post:**
Copy `posts/template.html`, rename it, and fill in your content.

## Support

Need help?
- Check the [README.md](README.md) for detailed instructions
- Review existing HTML/CSS for examples
- Email: mukulranjan0@gmail.com

## Notes

- Keep it simple - don't over-engineer
- Update regularly - even small changes keep it fresh
- Let your research shine - the site is just a frame
- Perfect is the enemy of good - launch and iterate

---

**Ready to launch?** Once you've checked the essentials above, deploy and share with the world!
