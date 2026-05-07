// 1. Preloader (သေချာပေါက် ပျောက်သွားစေရန် DOMContentLoaded ကိုပါ အသုံးပြုထားသည်)
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        if(preloader) {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
        }
    }, 1500); // 1.5 စက္ကန့်အကြာ
});

// 2. Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    // ပင်မ Cursor အစက်လေး
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // နောက်ကလိုက်မည့် အဝိုင်းလေး (အနည်းငယ် နောက်ကျပြီး လိုက်မည်)
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 50);
});

// Button နှင့် Portfolio များပေါ် ရောက်လျှင် Cursor ပုံစံပြောင်းရန်
const hoverTargets = document.querySelectorAll('.hover-target, a');

hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0)'; // အလယ်အစက်ကို ဖျောက်မည်
        follower.style.width = '60px'; // အဝိုင်းကို ကြီးစေမည်
        follower.style.height = '60px';
        follower.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        follower.style.border = '1px solid rgba(255, 255, 255, 0.8)';
    });
    
    target.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)'; // အလယ်အစက် ပြန်ပေါ်မည်
        follower.style.width = '40px'; // အဝိုင်း မူလအရွယ် ပြန်ဖြစ်မည်
        follower.style.height = '40px';
        follower.style.backgroundColor = 'transparent';
        follower.style.border = '1px solid rgba(255, 255, 255, 0.4)';
    });
});

// 3. Typing Animation
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
    setTimeout(type, 1800);
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
