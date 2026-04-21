// 1. Preloader Effect (Loading Screen ကို ဖျောက်ခြင်း)
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
    }, 2000); // ၂ စက္ကန့်အကြာမှာ ပျောက်သွားပါမယ်
});

// 2. Typing Animation Effect
const typedTextSpan = document.getElementById("typing-text");
const textArray = ["I AM A GRAPHIC DESIGNER", "I AM A VIDEO EDITOR"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // စာကြောင်းတစ်ကြောင်းပြီးရင် နားမယ့်အချိန်

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
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 2500); // Preloader ပြီးမှ စာစရိုက်အောင် စောင့်ခြင်း
});
