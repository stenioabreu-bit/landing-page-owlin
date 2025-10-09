/**
 * OWLIN Carousel System
 * Advanced carousel with autoplay, parallax, and touch support
 */

class OwlinCarousel {
    constructor(element, options = {}) {
        this.carousel = element;
        this.slides = element.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.isAnimating = false;
        this.autoplayInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;

        // Options
        this.options = {
            autoplay: options.autoplay !== false,
            autoplayDelay: options.autoplayDelay || 6000,
            pauseOnHover: options.pauseOnHover !== false,
            enableParallax: options.enableParallax !== false,
            enableTouch: options.enableTouch !== false,
            animationDuration: options.animationDuration || 1200
        };

        this.init();
    }

    init() {
        this.setupControls();
        this.setupDots();
        this.setupProgressBar();

        if (this.options.enableTouch) {
            this.setupTouchEvents();
        }

        if (this.options.pauseOnHover) {
            this.setupHoverEvents();
        }

        if (this.options.enableParallax) {
            this.setupParallax();
        }

        if (this.options.autoplay) {
            this.startAutoplay();
        }

        // Animate first slide content
        this.animateSlideContent(0);
    }

    setupControls() {
        const prevBtn = this.carousel.querySelector('.carousel-btn.prev');
        const nextBtn = this.carousel.querySelector('.carousel-btn.next');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevSlide());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }
    }

    setupDots() {
        const dots = this.carousel.querySelectorAll('.carousel-dot');

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
    }

    setupProgressBar() {
        this.progressBar = this.carousel.querySelector('.carousel-progress-bar');
    }

    setupTouchEvents() {
        this.carousel.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.carousel.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });
    }

    setupHoverEvents() {
        this.carousel.addEventListener('mouseenter', () => {
            this.pauseAutoplay();
        });

        this.carousel.addEventListener('mouseleave', () => {
            if (this.options.autoplay) {
                this.startAutoplay();
            }
        });
    }

    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroHeight = this.carousel.offsetHeight;

            if (scrolled < heroHeight) {
                const activeSlide = this.slides[this.currentSlide];
                const bg = activeSlide.querySelector('.slide-bg');

                if (bg) {
                    const parallaxSpeed = 0.5;
                    bg.style.transform = `scale(1.1) translateY(${scrolled * parallaxSpeed}px)`;
                }
            }
        }, { passive: true });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }

    nextSlide() {
        if (this.isAnimating) return;

        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        if (this.isAnimating) return;

        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }

    goToSlide(index) {
        if (this.isAnimating || index === this.currentSlide) return;

        this.isAnimating = true;

        // Remove active class from current slide
        this.slides[this.currentSlide].classList.remove('active');

        // Add active class to new slide
        this.slides[index].classList.add('active');

        // Update dots
        this.updateDots(index);

        // Animate content
        this.animateSlideContent(index);

        // Update current slide
        this.currentSlide = index;

        // Reset animation lock
        setTimeout(() => {
            this.isAnimating = false;
        }, this.options.animationDuration);

        // Restart autoplay
        if (this.options.autoplay) {
            this.restartAutoplay();
        }
    }

    updateDots(index) {
        const dots = this.carousel.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    animateSlideContent(index) {
        const slide = this.slides[index];
        const content = slide.querySelector('.hero-text');

        if (!content) return;

        // Reset animations
        const animatedElements = content.querySelectorAll('[class*="animate-"]');
        animatedElements.forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; // Trigger reflow
            el.style.animation = null;
        });
    }

    startAutoplay() {
        this.pauseAutoplay(); // Clear any existing interval

        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, this.options.autoplayDelay);

        // Start progress bar animation
        if (this.progressBar) {
            this.progressBar.style.transition = 'none';
            this.progressBar.style.width = '0%';

            setTimeout(() => {
                this.progressBar.style.transition = `width ${this.options.autoplayDelay}ms linear`;
                this.progressBar.style.width = '100%';
            }, 50);
        }
    }

    pauseAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }

        if (this.progressBar) {
            this.progressBar.style.transition = 'none';
            this.progressBar.style.width = '0%';
        }
    }

    restartAutoplay() {
        this.pauseAutoplay();
        this.startAutoplay();
    }

    destroy() {
        this.pauseAutoplay();
        // Remove event listeners if needed
    }
}

// Initialize hero carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const heroCarousel = document.querySelector('.hero');

    if (heroCarousel) {
        new OwlinCarousel(heroCarousel, {
            autoplay: true,
            autoplayDelay: 10000,
            pauseOnHover: true,
            enableParallax: true,
            enableTouch: true
        });
    }
});
