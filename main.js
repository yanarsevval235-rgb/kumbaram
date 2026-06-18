window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const card = document.querySelector('.credit-card');
const container = document.querySelector('.hero-visual');

// Fare hareketine göre kartı eğme
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Kartın merkezine göre açıyı ayarlar
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
    // Parlama efektini farenin konumuna göre kaydır
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
});

// Fare çekildiğinde kartı eski haline getirme
container.addEventListener('mouseleave', () => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// Fare girdiğinde geçişi hızlandırma
container.addEventListener('mouseenter', () => {
    card.style.transition = "none";
});

// Scroll Efekti (Önceki yazdığımız)
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// Bakiye sayacı animasyonu
function animateBalance() {
    const balanceText = document.getElementById('balanceText');
    if (!balanceText) return;
    
    const target = 12450;
    let current = 0;
    const duration = 2500;
    const step = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        balanceText.textContent = '₺' + Math.floor(current).toLocaleString('tr-TR') + ',00';
    }, 16);
}

// Sayfa yüklendiğinde başlat
window.addEventListener('load', () => {
    setTimeout(animateBalance, 500);
});


// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

// Otomatik geçiş
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}, 5000);

// Dot tıklama
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
});

// Orbit animasyonunu başlat
document.addEventListener('DOMContentLoaded', () => {
    const ring = document.getElementById('orbitRing');
    const items = document.querySelectorAll('.orbit-item');
    
    // Tüm item'lar belirene kadar ring durur
    const totalDelay = 3.0 + 0.8; // son item delay + fade süresi
    
    // Başlangıçta ring durur
    ring.style.animationPlayState = 'paused';
    
    // Tüm item'lar belirdikten sonra dönmeye başlar
    setTimeout(() => {
        ring.style.animationPlayState = 'running';
    }, totalDelay * 1000);
});