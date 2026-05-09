// 1. Preloader
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    
    setTimeout(() => {
        if(preloader) {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
        }
    }, 1800); 

    // 2. Text Animations (Title Swap & Falling Text)
    const titleElement = document.getElementById("swap-title");
    const titles = ["Naing Lin Htun", "Symbol"];
    let titleIndex = 0;

    const fallingTextElement = document.getElementById("falling-text");
    const fallingTexts = ["I AM A GRAPHIC DESIGNER", "I AM A VIDEO EDITOR"];
    let fallingIndex = 0;

    // Preloader ပျောက်ပြီးမှ Animation စတင်ရန် (2 စက္ကန့် စောင့်မည်)
    setTimeout(() => {
        // ပထမဆုံး စာသားများကို ဖော်ပြမည်
        titleElement.classList.add("title-fade-in");
        fallingTextElement.classList.add("text-drop-in");

        // ၃ စက္ကန့်တစ်ခါ ပြောင်းလဲမည့် Loop
        setInterval(() => {
            // Out Animations အရင်လုပ်မည်
            titleElement.classList.remove("title-fade-in");
            titleElement.classList.add("title-fade-out");

            fallingTextElement.classList.remove("text-drop-in");
            fallingTextElement.classList.add("text-drop-out");

            // Out Animation ပြီးဆုံးရန် (၀.၆ စက္ကန့်) စောင့်ပြီးမှ စာသားပြောင်းမည်
            setTimeout(() => {
                // Title ပြောင်းမည်
                titleIndex = (titleIndex + 1) % titles.length;
                titleElement.textContent = titles[titleIndex];

                // Subtitle (Falling text) ပြောင်းမည်
                fallingIndex = (fallingIndex + 1) % fallingTexts.length;
                fallingTextElement.textContent = fallingTexts[fallingIndex];

                // In Animations ပြန်ထည့်မည်
                titleElement.classList.remove("title-fade-out");
                titleElement.classList.add("title-fade-in");

                fallingTextElement.classList.remove("text-drop-out");
                fallingTextElement.classList.add("text-drop-in");
            }, 600); 

        }, 3000); // ၃ စက္ကန့် (3000ms)
    }, 2000); 
});

// 3. Custom Cursor Logic
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
