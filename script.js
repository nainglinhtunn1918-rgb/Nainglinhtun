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

// 4. Modal (Popup) Logic အသစ်
const modal = document.getElementById("cv-modal");
const openModalBtn = document.getElementById("open-cv-modal");
const navCvBtn = document.getElementById("nav-cv-btn");
const closeBtn = document.querySelector(".close-btn");

// View CV ကိုနှိပ်လျှင် Popup ပေါ်ရန်
openModalBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

// Navbar မှ CV ကိုနှိပ်လျှင်လည်း Popup ပေါ်ရန်
navCvBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show");
});

// ကြက်ခြေခတ်ကိုနှိပ်လျှင် ပိတ်ရန်
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

// အပြင်ဘက်ကိုနှိပ်လျှင် ပိတ်ရန်
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

// 5. Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-scroll').forEach((el) => observer.observe(el));

// 6. Cursor Hover Scale (Dynamic Element များအတွက် သေချာချိတ်ဆက်ပေးထားသည်)
function attachCursorEvents() {
    document.querySelectorAll('a, button, .hover-target, input, textarea, .close-btn').forEach(el => {
        // Event နှစ်ခါမထပ်စေရန် အရင်ဖျက်သည်
        el.removeEventListener('mouseenter', scaleCursorUp);
        el.removeEventListener('mouseleave', scaleCursorDown);
        // ပြန်ထည့်သည်
        el.addEventListener('mouseenter', scaleCursorUp);
        el.addEventListener('mouseleave', scaleCursorDown);
    });
}

function scaleCursorUp() {
    follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
    follower.style.background = 'rgba(255,255,255,0.1)';
}

function scaleCursorDown() {
    follower.style.transform = 'translate(-50%, -50%) scale(1)';
    follower.style.background = 'transparent';
}

attachCursorEvents();
