// Custom Cursor
const cursor = document.getElementById('cursor');
const cursorGlow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorGlow.style.left = (e.clientX - 100) + 'px';
    cursorGlow.style.top = (e.clientY - 100) + 'px';
});

// Generate Particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
}

// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Problem Section Counter Animation
const problemStat = document.querySelector('[data-stat]');
let hasAnimated = false;

const animateCounter = () => {
    if (hasAnimated) return;
    
    const elementTop = problemStat.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
        hasAnimated = true;
        problemStat.classList.add('visible');
    }
};

window.addEventListener('scroll', animateCounter);

// Step visibility on scroll
const steps = document.querySelectorAll('.step');

const revealSteps = () => {
    steps.forEach((step, index) => {
        const elementTop = step.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            setTimeout(() => {
                step.classList.add('visible');
            }, index * 200);
        }
    });
};

window.addEventListener('scroll', revealSteps);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Email Form Handler
const emailForm = document.querySelector('.email-form');
if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! We will contact you soon.');
    });
}
