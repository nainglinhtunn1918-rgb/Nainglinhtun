// 1. Preloader
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => preloader.style.visibility = "hidden", 800);
    }, 1600);
});

// 2. Custom Cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 50);
});

// 3. Hero Text Switching Logic
const titleEl = document.getElementById("swap-title");
const fallingEl = document.getElementById("falling-text");

const titles = ["Naing Lin Htun", "Symbol"];
const subTexts = ["I AM A GRAPHIC DESIGNER", "I AM A VIDEO EDITOR"];
let currentIndex = 0;

function updateHeroText() {
    titleEl.classList.add("fade-out");
    fallingEl.classList.add("drop-out");

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % titles.length;
        titleEl.textContent = titles[currentIndex];
        fallingEl.textContent = subTexts[currentIndex];

        titleEl.classList.remove("fade-out");
        titleEl.classList.add("fade-in");
        fallingEl.classList.remove("drop-out");
        fallingEl.classList.add("drop-in");
    }, 600);
}
setInterval(updateHeroText, 3000);

// 4. Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-scroll').forEach((el) => observer.observe(el));

// 5. Cursor Hover Scale
document.querySelectorAll('a, button, .hover-target, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => {
        follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        follower.style.background = 'rgba(255,255,255,0.1)';
    });
    el.addEventListener('mouseleave', () => {
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.background = 'transparent';
    });
});
