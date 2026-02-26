// ─── THEME ───
const html = document.documentElement;
const toggle = document.getElementById('themeToggle');
const thumb = document.getElementById('toggleThumb');
const saved = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', saved);
toggle.checked = saved === 'dark';
thumb.textContent = saved === 'dark' ? '🌙' : '☀️';

toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    thumb.textContent = theme === 'dark' ? '🌙' : '☀️';
});

// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// ─── HAMBURGER ───
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => mob.classList.toggle('active'));
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('active')));

// ─── SCROLL REVEAL ───
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
}, { threshold: 0.12 });
reveals.forEach(el => revealObs.observe(el));

// ─── SKILL BARS ───
const skillBars = document.querySelectorAll('.skill-bar');
const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const w = e.target.getAttribute('data-width');
            e.target.style.width = w + '%';
            skillObs.unobserve(e.target);
        }
    });
}, { threshold: 0.4 });
skillBars.forEach(bar => skillObs.observe(bar));

// ─── CONTACT FORM ───
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    this.querySelectorAll('input,textarea').forEach(el => el.value = '');
    document.getElementById('formSuccess').style.display = 'block';
    setTimeout(() => document.getElementById('formSuccess').style.display = 'none', 4000);
});

// ─── PROJECT CARD fix (overlay needs parent) ───
document.querySelectorAll('.project-card').forEach(card => {
    const thumb = card.querySelector('.project-thumb');
    const overlay = card.querySelector('.project-thumb-overlay');
    if (overlay && thumb) thumb.appendChild(overlay);
});