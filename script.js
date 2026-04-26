// 1. Preloader (ဖယ်ရှားခြင်း)
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
    }, 1500); // 1.5 စက္ကန့်အကြာ
});

// 2. Typing Animation
const typedTextSpan = document.getElementById("typing-text");
const textArray = ["I AM A GRAPHIC DESIGNER", "I AM A VIDEO EDITOR"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1800); // Preloader ပြီးမှ စာစရိုက်ရန်
});

// 3. Scroll Fade-in Animation (Scroll ဆွဲချတိုင်း အပိုင်းတွေ လှလှပပ ပေါ်လာစေရန်)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-scroll').forEach((element) => {
    observer.observe(element);
});
