// 1. Preloader Logic
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.visibility = "hidden";
        }, 800);
    }, 1600);
});

// 2. Custom Cursor Logic
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

// Cursor Hover Effects for all links and buttons
document.querySelectorAll('a, button, .hover-target, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => {
        follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        follower.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.backgroundColor = 'transparent';
    });
});

// 3 & 4. Title Swap and Falling Text Logic
const titleEl = document.getElementById("swap-title");
const fallingEl = document.getElementById("falling-text");

const titles = ["Naing Lin Htun", "Symbol"];
const subTexts = ["I AM A GRAPHIC DESIGNER", "I AM A VIDEO EDITOR"];
let currentIndex = 0;

function updateHeroText() {
    // Stage 1: Animation Out
    titleEl.classList.add("fade-out");
    fallingEl.classList.add("drop-out");

    setTimeout(() => {
        // Change Index
        currentIndex = (currentIndex + 1) % titles.length;

        // Change Content
        titleEl.textContent = titles[currentIndex];
        fallingEl.textContent = subTexts[currentIndex];

        // Stage 2: Animation In
        titleEl.classList.remove("fade-out");
        titleEl.classList.add("fade-in");
        
        fallingEl.classList.remove("drop-out");
        fallingEl.classList.add("drop-in");
    }, 600); // 0.6s is sync with CSS transition
}

// Start the loop every 3 seconds
setInterval(updateHeroText, 3000);

// 5. Scroll Fade-in Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-scroll').forEach((el) => observer.observe(el));
