document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header & Color Change ---
    const header = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.boxShadow = 'none';
        }
    });

    // --- Mobile Menu Toggle (Simplified) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--bg-color)';
        navLinks.style.padding = '2rem';
    });

    // --- Reveal Animation on Scroll ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Carousel Logic ---
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    let scrollAmount = 0;
    const step = 382; // item width + gap

    nextBtn.addEventListener('click', () => {
        const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
        if (scrollAmount < maxScroll) {
            scrollAmount += step;
            track.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (scrollAmount > 0) {
            scrollAmount -= step;
            track.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    // --- Form Submission Logic ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Input validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            showStatus('Por favor, rellena todos los campos.', 'error');
            return;
        }

        // Simulating API call
        formStatus.textContent = 'Enviando...';
        formStatus.style.color = 'var(--accent-color)';

        setTimeout(() => {
            showStatus('¡Mensaje enviado con éxito! Nos contactaremos pronto.', 'success');
            contactForm.reset();
        }, 1500);
    });

    function showStatus(text, type) {
        formStatus.textContent = text;
        formStatus.style.color = type === 'success' ? '#10b981' : '#ef4444';
        
        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);
    }

    // --- Smooth Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
