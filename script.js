// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 }); // Increased threshold for full-height sections

sections.forEach(section => {
    observer.observe(section);
});

// Typing effect for the home section
const welcomeText = "Welcome to my portfolio! I'm Kavin Kumar, a passionate full-stack developer.";
let i = 0;
const speed = 50; // Typing speed in milliseconds

function typeWriter() {
    if (i < welcomeText.length) {
        document.querySelector('#home p').innerHTML += welcomeText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

// Dynamic year for footer
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Kavin Kumar. All rights reserved.`;

// Highlight active navigation item
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav ul li a').forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').slice(1) === current) {
            li.classList.add('active');
        }
    });
});