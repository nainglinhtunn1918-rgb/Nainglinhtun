/* --- Global Styles --- */
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
html { scroll-behavior: smooth; }
body { background-color: #050505; color: #fff; overflow-x: hidden; cursor: none; /* Custom cursor သုံးမည်ဖြစ်၍ မူလ cursor ကို ဖျောက်ထားသည် */ }
.container { width: 90%; max-width: 1200px; margin: 0 auto; }
.section-padding { padding: 100px 0; }
.highlight { color: #1e40af; } 
.section-title { font-size: 2.5rem; margin-bottom: 20px; font-weight: 700; }
.text-center { text-align: center; margin-bottom: 50px; }

/* --- Custom Cursor --- */
.cursor { width: 8px; height: 8px; background: #fff; border-radius: 50%; position: fixed; pointer-events: none; z-index: 10001; transform: translate(-50%, -50%); transition: width 0.2s, height 0.2s, background-color 0.2s; }
.cursor-follower { width: 40px; height: 40px; border: 1px solid rgba(255, 255, 255, 0.4); border-radius: 50%; position: fixed; pointer-events: none; z-index: 10000; transform: translate(-50%, -50%); transition: width 0.2s, height 0.2s, background-color 0.2s; }
/* Any interactive element fallback */
a, button, input, textarea { cursor: none; }

/* --- 1. Preloader --- */
#preloader { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: #020617; display: flex; justify-content: center; align-items: center; z-index: 10000; transition: opacity 0.8s ease, visibility 0.8s ease; }
.loader-logo { font-size: 2rem; letter-spacing: 10px; color: #fff; animation: pulse 1.5s infinite alternate; }
@keyframes pulse { from { opacity: 0.3; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }

/* --- Navigation --- */
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 20px 5%; position: fixed; width: 100%; top: 0; z-index: 999; background: rgba(5, 5, 5, 0.8); backdrop-filter: blur(10px); }
.logo { font-weight: 700; letter-spacing: 2px; }
.nav-links { list-style: none; display: flex; gap: 30px; }
.nav-links a { text-decoration: none; color: #aaa; font-size: 0.9rem; transition: 0.3s; }
.nav-links a:hover { color: #fff; }

/* --- 2. Hero Section --- */
.hero { height: 100vh; display: flex; justify-content: center; align-items: center; text-align: center; background: radial-gradient(circle at top, #111827 0%, #050505 60%); }
.main-title { font-size: clamp(3rem, 8vw, 5.5rem); font-weight: 700; margin-bottom: 15px; }
.typing-container { font-size: 1.2rem; color: #aaa; letter-spacing: 2px; margin-bottom: 40px; min-height: 30px; }
#typing-text { color: #fff; }
.cursor-blink { display: inline-block; width: 2px; background-color: #fff; animation: blink 0.7s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

.btn-primary { background: #fff; color: #000; padding: 12px 30px; text-decoration: none; border-radius: 30px; font-weight: 600; display: inline-block; border: none; transition: 0.3s; }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(255,255,255,0.15); }

/* --- 3. Marquee --- */
.marquee-wrapper { width: 100%; overflow: hidden; background: #111; padding: 15px 0; border-top: 1px solid #222; border-bottom: 1px solid #222; }
.marquee-content { display: flex; white-space: nowrap; animation: scrollMarquee 20s linear infinite; gap: 40px; font-size: 0.9rem; color: #888; letter-spacing: 2px; }
@keyframes scrollMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

/* --- 4. About Section --- */
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.about-text p { color: #aaa; line-height: 1.8; margin-bottom: 30px; font-size: 1.1rem; }
.skills { display: flex; flex-wrap: wrap; gap: 15px; }
.skill-tag { border: 1px solid #333; padding: 8px 20px; border-radius: 20px; font-size: 0.9rem; color: #ddd; }
.image-placeholder { width: 100%; height: 400px; background: #111; border-radius: 10px; display: flex; justify-content: center; align-items: center; color: #555; border: 1px dashed #333; }

/* --- 5. Portfolio Section (Hover Effect အသစ်) --- */
.portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.portfolio-card { position: relative; border-radius: 10px; overflow: hidden; aspect-ratio: 16 / 9; background: #111; }
.portfolio-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); display: block; }
/* Hover လုပ်လျှင် ပုံ Zoom ဝင်သွားမည် */
.portfolio-card:hover img { transform: scale(1.1); filter: brightness(0.6); }
.card-info { position: absolute; bottom: 0; left: 0; width: 100%; padding: 30px; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); transform: translateY(20px); opacity: 0; transition: 0.4s ease; color: #fff; }
/* Hover လုပ်လျှင် စာသားများ အပေါ်သို့ တက်လာမည် */
.portfolio-card:hover .card-info { transform: translateY(0); opacity: 1; }
.card-info h3 { font-size: 1.3rem; margin-bottom: 5px; font-weight: 600; }
.card-info p { color: #aaa; font-size: 0.9rem; }

/* --- 6. Contact Section --- */
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
.contact-info p { color: #aaa; margin-bottom: 30px; line-height: 1.6; }
.contact-details p { margin-bottom: 15px; color: #ddd; font-size: 1.1rem; }
.contact-form { display: flex; flex-direction: column; gap: 20px; }
.contact-form input, .contact-form textarea { width: 100%; padding: 15px; background: #111; border: 1px solid #333; border-radius: 5px; color: #fff; font-size: 1rem; outline: none; transition: 0.3s; }
.contact-form input:focus, .contact-form textarea:focus { border-color: #1e40af; }

/* --- Animations --- */
.fade-scroll { opacity: 0; transform: translateY(30px); transition: 0.8s ease-out; }
.fade-scroll.visible { opacity: 1; transform: translateY(0); }

/* Responsive */
@media (max-width: 768px) {
    .about-grid, .contact-grid { grid-template-columns: 1fr; }
    .nav-links { display: none; }
    /* Mobile တွင် Cursor ဖျောက်ထားရန် */
    .cursor, .cursor-follower { display: none; }
    body { cursor: auto; }
    a, button, input, textarea { cursor: auto; }
}
