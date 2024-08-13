document.addEventListener('DOMContentLoaded', () => {
    const fadeIns = document.querySelectorAll('.fade-in');
    const zoomIns = document.querySelectorAll('.zoom-in');

    const options = {
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeIns.forEach(fadeIn => {
        fadeInObserver.observe(fadeIn);
    });

    zoomIns.forEach(zoomIn => {
        fadeInObserver.observe(zoomIn);
    });
});
