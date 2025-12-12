/* ==================== SMOOTH SCROLL FOR NAVIGATION ==================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* ==================== PAGE ANIMATIONS ==================== */

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .project-card, .pookie-card, .skill-card, .timeline-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

/* ==================== ACTIVE NAVIGATION LINK ==================== */

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

/* ==================== SMOOTH PAGE TRANSITIONS ==================== */

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

/* ==================== INTERACTIVE ELEMENTS ==================== */

// Add hover effects to images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ffb6d9" width="400" height="300"/%3E%3Ctext x="50%%" y="50%%" font-size="24" fill="%23666" text-anchor="middle" dominant-baseline="middle"%3EImage Placeholder%3C/text%3E%3C/svg%3E';
        });
    });
});

/* ==================== UTILITY FUNCTIONS ==================== */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Add responsive behavior here if needed
}, 250));

/* ==================== CONSOLE MESSAGE ==================== */

console.log('%c✨ Welcome to My Personal Website! ✨', 'color: #ff69b4; font-size: 20px; font-weight: bold;');
console.log('%cMade with love and lots of pookies! 🐾', 'color: #ff1493; font-size: 14px;');
