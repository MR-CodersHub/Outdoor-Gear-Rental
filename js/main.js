// main.js - Modern Tactical Redesign Logic

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLayout();
    initScrollEffect();
    initLucide();
});

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update all theme icons (always use sun)
    const icons = document.querySelectorAll('.theme-toggle i');
    icons.forEach(icon => {
        icon.setAttribute('data-lucide', 'sun');
    });
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function initLayout() {
    // Header Injection
    const header = document.createElement('header');
    header.className = 'main-header';
    const currentTheme = document.documentElement.getAttribute('data-theme');
    header.innerHTML = `
        <div class="container flex justify-between items-center">
            <a href="index.html" class="nav-logo">
                <img src="assets/logo.png" alt="TAIGA" style="height: 42px;">
            </a>
            <nav class="nav-links">
                <button class="theme-toggle mobile-only-toggle" onclick="toggleTheme()">
                    <i data-lucide="sun"></i>
                </button>
                <a href="index.html" data-index="01">Home 1</a>
                <a href="home2.html" data-index="02">Home 2</a>
                <a href="services.html" data-index="03">Services</a>
                <a href="products.html" data-index="04">Products</a>
                <a href="about.html" data-index="05">About</a>
                <a href="blog.html" data-index="06">Blog</a>
                <a href="contact.html" data-index="07">Contact</a>
                
                <div class="mobile-footer">
                    <div class="mobile-socials">
                        <a href="#"><i data-lucide="instagram"></i></a>
                        <a href="#"><i data-lucide="twitter"></i></a>
                        <a href="#"><i data-lucide="linkedin"></i></a>
                    </div>
                </div>
            </nav>
            <div class="mobile-menu-btn">
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
            </div>
        </div>
    `;
    
    // Highlight Active Link
    let currentPath = window.location.pathname.split('/').pop();
    if (!currentPath || currentPath === '') {
        currentPath = 'index.html';
    }
    
    header.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath ||
            (href === 'products.html' && (currentPath === 'product-details.html' || currentPath === 'adventure-packages.html')) ||
            (href === 'blog.html' && currentPath === 'blog-details.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Footer Injection
    const footer = document.createElement('footer');
    footer.style.background = 'var(--bg-secondary)';
    footer.style.padding = '80px 0 40px';
    footer.style.borderTop = '1px solid var(--border-color)';
    footer.innerHTML = `
        <div class="container grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 4rem;">
            <div>
                <img src="assets/logo.png" alt="TAIGA" style="height: 52px; margin-bottom: 2rem;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Professional grade equipment for demanding environments. Designed in the North, built for the world.</p>
            </div>
            <div>
                <h4 class="font-heading" style="font-size: 0.8rem; margin-bottom: 1.5rem; color: var(--text-muted);">Products</h4>
                <ul style="display: flex; flex-direction: column; gap: 1rem; font-size: 0.9rem;">
                    <li><a href="products.html">Backpacks</a></li>
                    <li><a href="products.html">Tents</a></li>
                    <li><a href="products.html">Sleep Systems</a></li>
                    <li><a href="adventure-packages.html">Bundles</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-heading" style="font-size: 0.8rem; margin-bottom: 1.5rem; color: var(--text-muted);">Company</h4>
                <ul style="display: flex; flex-direction: column; gap: 1rem; font-size: 0.9rem;">
                    <li><a href="about.html">Our Story</a></li>
                    <li><a href="services.html">Our Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="pricing.html">Sustainability</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-heading" style="font-size: 0.8rem; margin-bottom: 1.5rem; color: var(--text-muted);">Newsletter</h4>
                <div class="flex" style="margin-top: 1rem;">
                    <input type="email" placeholder="Email" style="background: var(--bg-tertiary); border: 1px solid var(--border-color); padding: 12px; color: var(--text-primary); width: 100%; border-radius: 4px 0 0 4px;">
                    <button class="btn btn-primary" style="padding: 12px 20px; border-radius: 0 4px 4px 0;">Join</button>
                </div>
            </div>
        </div>
        <div class="container" style="margin-top: 60px; padding-top: 30px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);">
            <span>&copy; 2026 TAIGA OUTDOOR GEAR</span>
            <div class="flex gap-2">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </div>
    `;
    
    document.body.prepend(header);
    document.body.appendChild(footer);

    // Mobile Menu Logic
    const menuBtn = header.querySelector('.mobile-menu-btn');
    const nav = header;
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            const isActive = nav.classList.contains('nav-active');
            
            // Prevent scrolling when menu is open
            document.body.style.overflow = isActive ? 'hidden' : 'auto';
        });

        // Close menu on link click
        header.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                document.body.style.overflow = 'auto';
            });
        });
    }
}

function initScrollEffect() {
    const header = document.querySelector('.main-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initLucide() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}
