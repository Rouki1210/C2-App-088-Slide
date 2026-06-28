/**
 * C2-App-088 Presentation Script
 * Handles manual slide navigation via Keyboard (Arrows/Space) and UI Buttons.
 */

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const fsBtn = document.getElementById('fullscreen-btn');
    let currentSlide = 0;

    // Show slide by index
    const showSlide = (index) => {
        // Wrap around logic (Optional, currently clamped)
        if (index < 0) index = 0;
        if (index >= slides.length) index = slides.length - 1;

        // Remove active class from all
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Add active to current
        slides[index].classList.add('active');
        currentSlide = index;

        // Update Button States
        if (prevBtn) prevBtn.style.opacity = currentSlide === 0 ? '0.3' : '1';
        if (nextBtn) nextBtn.style.opacity = currentSlide === slides.length - 1 ? '0.3' : '1';
    };

    // Go to next slide
    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        }
    };

    // Go to prev slide
    const prevSlide = () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    };

    // Fullscreen Toggle
    const toggleFullscreen = () => {
        const doc = window.document;
        const docEl = doc.documentElement;

        const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        const fullscreenElement = doc.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement;

        if (!fullscreenElement) {
            if (requestFullScreen) {
                requestFullScreen.call(docEl).catch(err => {
                    console.log(`Error attempting to enable full-screen mode: ${err.message}`);
                });
            }
        } else if (fullscreenElement === docEl) {
            if (cancelFullScreen) {
                cancelFullScreen.call(doc);
            }
        }
    };

    // Listen to button clicks
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (fsBtn) fsBtn.addEventListener('click', toggleFullscreen);

    // Listen to keyboard events (Arrow Keys, Spacebar, F key)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        } else if (e.key.toLowerCase() === 'f') {
            e.preventDefault();
            toggleFullscreen();
        }
    });

    // Initialize first slide
    showSlide(0);
});
