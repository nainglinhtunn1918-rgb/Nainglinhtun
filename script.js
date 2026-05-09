// 1. Preloader
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => preloader.style.visibility = "hidden", 800);
    }, 1600);
});

// 2. Text Swap Logic (၃ နဲ့ ၄ ပေါင်းထားသည်)
const titleEl = document.getElementById("swap-title");
const subEl = document.getElementById("falling-text");

const titles = ["Naing Lin Htun", "Symbol"];
const subTexts = ["I AM A GRAPHIC DESIGNER", "I AM A VIDEO EDITOR"];

let currentIndex = 0;

function changeContent() {
    // အရင်စာသားတွေကို ဖျောက်မည်
    titleEl.classList.add("fade-out");
    subEl.classList.add("drop-out");

    setTimeout(() => {
        // Index ပြောင်းမည်
        currentIndex = (currentIndex + 1) % titles.length;

        // စာသားအသစ်ထည့်မည်
        titleEl.textContent = titles[currentIndex];
        subEl.textContent = subTexts[currentIndex];

        // အသစ်ပြန်ဖော်မည်
        titleEl.classList.remove("fade-out");
        titleEl.classList.add("fade-in");
        
        subEl.classList.remove("drop-out");
        subEl.classList.add("drop-in");
    }, 600); // Animation ကြာချိန်
}

// ၃ စက္ကန့်တစ်ခါ Loop ပတ်မည်
setInterval(changeContent, 3000);

// 3. Custom Cursor
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

// Cursor Hover effect
document.querySelectorAll('a, .hover-target').forEach(el => {
    el.addEventListener('mouseenter', () => follower.style.transform = "scale(1.5)");
    el.addEventListener('mouseleave', () => follower.style.transform = "scale(1)");
});
