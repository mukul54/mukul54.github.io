// ===========================
// Profile Image Cycling
// ===========================

const profileImages = [
    'profile.jpg',
    'profile2.jpg',
    'profile3.jpg'
];

let currentImageIndex = 0;
const profileImg = document.getElementById('profile-img');

// Cycle through images every 3 seconds
if (profileImg && profileImages.length > 1) {
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % profileImages.length;
        profileImg.src = profileImages[currentImageIndex];
    }, 3000);
}

// ===========================
// Smooth Scrolling for Anchors
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===========================
// News Section - Show/Hide More
// ===========================

const newsContainer = document.querySelector('.news-container');
if (newsContainer) {
    const newsItems = newsContainer.querySelectorAll('.news-item');
    const maxVisible = 5;

    if (newsItems.length > maxVisible) {
        // Hide items beyond max
        newsItems.forEach((item, index) => {
            if (index >= maxVisible) {
                item.style.display = 'none';
            }
        });

        // Create show more button
        const showMoreBtn = document.createElement('button');
        showMoreBtn.textContent = 'Show More';
        showMoreBtn.className = 'show-more-btn';
        showMoreBtn.style.cssText = `
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background-color: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 4px;
            cursor: pointer;
            font-family: inherit;
            font-size: 0.9375rem;
            color: var(--text-primary);
            transition: all 0.2s ease;
        `;

        let expanded = false;

        showMoreBtn.addEventListener('click', () => {
            expanded = !expanded;
            newsItems.forEach((item, index) => {
                if (index >= maxVisible) {
                    item.style.display = expanded ? 'flex' : 'none';
                }
            });
            showMoreBtn.textContent = expanded ? 'Show Less' : 'Show More';
        });

        showMoreBtn.addEventListener('mouseenter', () => {
            showMoreBtn.style.backgroundColor = 'var(--accent-color)';
            showMoreBtn.style.color = 'white';
            showMoreBtn.style.borderColor = 'var(--accent-color)';
        });

        showMoreBtn.addEventListener('mouseleave', () => {
            showMoreBtn.style.backgroundColor = 'var(--bg-secondary)';
            showMoreBtn.style.color = 'var(--text-primary)';
            showMoreBtn.style.borderColor = 'var(--border-color)';
        });

        newsContainer.parentElement.appendChild(showMoreBtn);
    }
}

// ===========================
// Publication Search/Filter (Optional)
// ===========================

function createPublicationFilter() {
    const pubSection = document.getElementById('publications');
    if (!pubSection) return;

    const searchContainer = document.createElement('div');
    searchContainer.style.cssText = 'margin-bottom: 1.5rem;';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search publications...';
    searchInput.style.cssText = `
        width: 100%;
        padding: 0.75rem;
        font-family: inherit;
        font-size: 1rem;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        background-color: var(--bg-primary);
        color: var(--text-primary);
    `;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const publications = pubSection.querySelectorAll('.publication');

        publications.forEach(pub => {
            const text = pub.textContent.toLowerCase();
            pub.style.display = text.includes(query) ? 'flex' : 'none';
        });
    });

    searchContainer.appendChild(searchInput);

    // Insert after h2
    const h2 = pubSection.querySelector('h2');
    if (h2 && h2.nextSibling) {
        pubSection.insertBefore(searchContainer, h2.nextSibling);
    }
}

// Uncomment to enable publication search
// createPublicationFilter();

// ===========================
// Lazy Loading Images
// ===========================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// External Link Icon (Optional)
// ===========================

function addExternalLinkIcons() {
    const links = document.querySelectorAll('a[target="_blank"]');
    links.forEach(link => {
        if (!link.querySelector('.external-icon')) {
            const icon = document.createElement('span');
            icon.className = 'external-icon';
            icon.innerHTML = ' ↗';
            icon.style.fontSize = '0.8em';
            link.appendChild(icon);
        }
    });
}

// Uncomment to enable external link icons
// addExternalLinkIcons();

// ===========================
// Analytics (Placeholder)
// ===========================

// Add your analytics code here (Google Analytics, Plausible, etc.)
// Example for Google Analytics:
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
*/

// ===========================
// Console Easter Egg
// ===========================

console.log('%cHello! 👋', 'font-size: 20px; font-weight: bold;');
console.log('%cInterested in my work? Feel free to reach out!', 'font-size: 14px;');
console.log('%cEmail: mukulranjan0@gmail.com', 'font-size: 12px; color: #2563eb;');
