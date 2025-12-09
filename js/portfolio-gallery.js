document.addEventListener('DOMContentLoaded', function() {
    const galleries = document.querySelectorAll('.portfolio-gallery__container');
    
    galleries.forEach(container => {
        const slides = container.querySelectorAll('.portfolio-gallery__slide');
        const dotsContainer = container.querySelector('.portfolio-gallery__dots');
        const prevBtn = container.querySelector('.portfolio-gallery__nav--prev');
        const nextBtn = container.querySelector('.portfolio-gallery__nav--next');
        
        // Если только одно изображение, скрываем навигацию
        if (slides.length <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            if (dotsContainer) dotsContainer.style.display = 'none';
            return;
        }
        
        let currentSlide = 0;
        
        // Создаем точки-индикаторы
        slides.forEach((slide, index) => {
            const dot = document.createElement('button');
            dot.classList.add('portfolio-gallery__dot');
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        const dots = dotsContainer.querySelectorAll('.portfolio-gallery__dot');
        
        function updateSlides() {
            slides.forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
            
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        function goToSlide(index) {
            currentSlide = index;
            updateSlides();
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlides();
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlides();
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        // Поддержка клавиатуры
        container.setAttribute('tabindex', '0');
        container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });
        
        // Поддержка свайпов на мобильных устройствах
        let touchStartX = 0;
        let touchEndX = 0;
        
        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }
        
        // Автопрокрутка (опционально, можно отключить)
        // let autoPlayInterval = setInterval(nextSlide, 5000);
        // container.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        // container.addEventListener('mouseleave', () => {
        //     autoPlayInterval = setInterval(nextSlide, 5000);
        // });
    });
});
