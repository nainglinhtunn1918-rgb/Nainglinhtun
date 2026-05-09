// 1. Preloader (Loading ပြီးဆုံးရန် စောင့်ဆိုင်းခြင်း)
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    
    // Animation progress ပြီးဆုံးရန် 1.8 စက္ကန့် စောင့်မည်
    setTimeout(() => {
        if(preloader) {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
        }
    }, 1800); 
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

const hoverTargets = document.querySelectorAll('.hover-target, a');
hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0)';
        follower.style.width = '60px'; 
        follower.style.height = '60px';
        follower.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        follower.style.border = '1px solid rgba(255, 255, 255, 0.8)';
    });
    
    target.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.width = '40px'; 
        follower.style.height = '40px';
        follower.style.backgroundColor = 'transparent';
        follower.style.border = '1px solid rgba(255, 255, 255, 0.4)';
    });
});

// 3. Typing Animation (Preloader ပိတ်သွားမှ စတင်ရန် အချိန်ညှိထားသည်)
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
    setTimeout(type, 2000); // Preloader ပျောက်ပြီးမှ စာစရိုက်ရန် စက္ကန့်ညှိထားသည်
});

// 4. Scroll Fade-in Animation
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
