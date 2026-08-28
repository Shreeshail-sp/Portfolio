/* ==========================================================================
   SHREESHAIL S P — DATA ENGINEER PORTFOLIO
   Main JavaScript
   ========================================================================== */

(function () {
    'use strict';

    /* ---------- DOM Ready ---------- */
    document.addEventListener('DOMContentLoaded', function () {
        initYear();
        initThemeToggle();
        initNavbar();
        initMobileMenu();
        initSmoothScroll();
        initScrollProgress();
        initActiveNavLink();
        initBackToTop();
        initTypingEffect();
        initScrollReveal();
        initStatCounters();
    });

    /* ---------- Footer Year ---------- */
    function initYear() {
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    }

    /* ---------- Theme Toggle ---------- */
    function initThemeToggle() {
        const toggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        const icon = toggle.querySelector('i');

        // Load saved theme or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);

        toggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateIcon(next);
        });

        function updateIcon(theme) {
            icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    /* ---------- Navbar Scroll Effect ---------- */
    function initNavbar() {
        const navbar = document.getElementById('navbar');
        const handler = () => {
            if (window.scrollY > 30) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        };
        handler();
        window.addEventListener('scroll', handler, { passive: true });
    }

    /* ---------- Mobile Menu ---------- */
    function initMobileMenu() {
        const toggle = document.getElementById('navToggle');
        const menu = document.getElementById('navMenu');
        const links = menu.querySelectorAll('.nav-link');

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
        });

        // Close menu on link click (mobile)
        links.forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }

    /* ---------- Smooth Scroll ---------- */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (targetId === '#' || targetId.length < 2) return;

                const target = document.querySelector(targetId);
                if (!target) return;

                e.preventDefault();
                const offsetTop = target.getBoundingClientRect().top + window.scrollY - 70;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            });
        });
    }

    /* ---------- Scroll Progress Bar ---------- */
    function initScrollProgress() {
        const bar = document.getElementById('scrollProgress');
        const handler = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            bar.style.width = `${progress}%`;
        };
        window.addEventListener('scroll', handler, { passive: true });
    }

    /* ---------- Active Nav Link Based on Scroll ---------- */
    function initActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const links = document.querySelectorAll('.nav-link');

        const handler = () => {
            const scrollPos = window.scrollY + 120;
            let currentId = '';

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    currentId = section.getAttribute('id');
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handler, { passive: true });
        handler();
    }

    /* ---------- Back to Top Button ---------- */
    function initBackToTop() {
        const btn = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) btn.classList.add('visible');
            else btn.classList.remove('visible');
        }, { passive: true });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------- Typing Effect ---------- */
    function initTypingEffect() {
        const target = document.getElementById('typedText');
        if (!target) return;

        const phrases = [
            'Data Engineer Intern @ NeoStats',
            'ETL & Data Pipeline Builder',
            'Azure & Microsoft Fabric',
            'Python · SQL · Power BI',
            'Computer Science Engineer'
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const TYPE_SPEED = 80;
        const ERASE_SPEED = 40;
        const HOLD_TIME = 1500;

        function tick() {
            const current = phrases[phraseIndex];

            if (!isDeleting) {
                target.textContent = current.slice(0, charIndex + 1);
                charIndex++;
                if (charIndex === current.length) {
                    isDeleting = true;
                    setTimeout(tick, HOLD_TIME);
                    return;
                }
                setTimeout(tick, TYPE_SPEED);
            } else {
                target.textContent = current.slice(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                }
                setTimeout(tick, ERASE_SPEED);
            }
        }

        tick();
    }

    /* ---------- Scroll Reveal Animation ---------- */
    function initScrollReveal() {
        const targets = document.querySelectorAll(
            '.section-header, .about-text, .stat-card, .skill-category, .timeline-item, .project-card, .achievement-card, .contact-card, .contact-cta'
        );

        targets.forEach(el => el.classList.add('reveal'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    // Stagger reveal slightly for grouped items
                    const delay = (entry.target.dataset.delay || idx * 60) % 400;
                    setTimeout(() => entry.target.classList.add('visible'), delay);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        targets.forEach(el => observer.observe(el));
    }

    /* ---------- Animated Stat Counters ---------- */
    function initStatCounters() {
        const counters = document.querySelectorAll('.stat-number');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;

        const duration = 1400;
        const start = performance.now();

        function step(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target) + (target > 1 ? '+' : '');
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target + '+';
        }

        requestAnimationFrame(step);
    }
})();
