document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Glitch effect on hover
    const glitchText = document.querySelector('.glitch-text');
    if (glitchText) {
        glitchText.addEventListener('mouseover', () => {
            glitchText.classList.add('active-glitch');
            setTimeout(() => {
                glitchText.classList.remove('active-glitch');
            }, 1000);
        });
    }

    // 3. Simple intersection observer for reveal animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card-content, .card-illustration, .lab-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Update observer results
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.card-content.revealed, .card-illustration.revealed, .lab-item.revealed').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    });

    console.log('Tanbor Fudgely Co | Intelligent Agent Systems | Boot Sequence Complete');
});
