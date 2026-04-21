// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('preloader-hidden');
    }, 1500); // 1.5 စက္ကန့်ကြာရင် ပျောက်သွားမယ်
});

// Typing Animation Logic
const typingText = document.getElementById('typing-text');
const words = ["Visual Identities", "Digital Art", "Brand Experiences", "Cinematic Motion"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // စာသားအပြည့်ဖြစ်ရင် ၂ စက္ကန့် ခဏရပ်မယ်
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Start the typing animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 2000); // Preloader ပြီးမှ စတင်မယ်
});
