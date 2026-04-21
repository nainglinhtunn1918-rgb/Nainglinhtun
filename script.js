// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('preloader-hidden');
    }, 1500); 
});

// Typing Animation Logic
const typingText = document.getElementById('typing-text');
// သင်တောင်းဆိုထားသော စာသားများ
const words = ["'I AM A GRAPHIC DESIGNER'", "'I AM A VIDEO EDITOR'"];
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
        typeSpeed = 100; // စာရိုက်တဲ့အမြန်နှုန်း
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // စာသားအပြည့်ပေါ်ပြီး ၂ စက္ကန့် ရပ်မယ်
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // နောက်တစ်ကြောင်းမစခင် ခဏရပ်မယ်
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 2000); 
});
