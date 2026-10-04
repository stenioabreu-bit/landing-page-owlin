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

        // Motivos de pausa: o autoplay só roda quando nenhum deles está ativo
        this.userPaused = false;
        this.hoverPaused = false;
        this.focusPaused = false;

        // Options
        this.options = {
            autoplay: options.autoplay !== false,
            autoplayDelay: options.autoplayDelay || 6000,
            pauseOnHover: options.pauseOnHover !== false,
            enableParallax: options.enableParallax !== false,
            enableTouch: options.enableTouch !== false,
            animationDuration: options.animationDuration || 1200,
            dotSelector: options.dotSelector || '.carousel-dot'
        };

        this.init();
    }

    init() {
        this.carousel.style.setProperty('--autoplay-delay', `${this.options.autoplayDelay}ms`);

        // Quem prefere menos movimento começa com a troca automática desligada
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.userPaused = true;
        }

        this.setupControls();
        this.setupDots();
        this.setupProgressBar();
        this.setupKeyboard();
        this.setupFocusPause();
        this.setupLazyBackgrounds();
        this.setupAutoHeight();

        if (this.options.enableTouch) {
            this.setupTouchEvents();
        }

        if (this.options.pauseOnHover) {
            this.setupHoverEvents();
        }

        if (this.options.enableParallax) {
            this.setupParallax();
        }

        document.addEventListener('visibilitychange', () => this.updateAutoplay());
        this.updateAutoplay();

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
        this.dots = this.carousel.querySelectorAll(this.options.dotSelector);

        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
    }

    setupProgressBar() {
        this.progressBar = this.carousel.querySelector('.carousel-progress-bar');
    }

    setupKeyboard() {
        this.carousel.addEventListener('keydown', (e) => {
            if (!e.target.closest(this.options.dotSelector)) return;
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const step = e.key === 'ArrowRight' ? 1 : -1;
                const index = (this.currentSlide + step + this.slides.length) % this.slides.length;
                this.goToSlide(index, true);
                if (this.dots[index]) this.dots[index].focus();
            }
        });
    }

    setupFocusPause() {
        // Pausa enquanto o foco do teclado estiver dentro do carrossel (clique de mouse não conta)
        const isKeyboardFocus = (el) => {
            try { return el.matches(':focus-visible'); } catch (_) { return true; }
        };
        this.carousel.addEventListener('focusin', (e) => {
            if (!isKeyboardFocus(e.target)) return;
            this.focusPaused = true;
            this.updateAutoplay();
        });
        this.carousel.addEventListener('focusout', (e) => {
            if (this.carousel.contains(e.relatedTarget)) return;
            this.focusPaused = false;
            this.updateAutoplay();
        });
    }

    setupLazyBackgrounds() {
        // Só o primeiro slide vem com imagem no HTML; o próximo é carregado depois do load da página
        const preloadNext = () => this.loadSlideBackground((this.currentSlide + 1) % this.slides.length);
        if (document.readyState === 'complete') {
            preloadNext();
        } else {
            window.addEventListener('load', preloadNext, { once: true });
        }
    }

    loadSlideBackground(index) {
        const slide = this.slides[index];
        const bg = slide && slide.querySelector('.slide-bg[data-bg]');
        if (!bg) return;
        bg.style.backgroundImage = `url('${bg.dataset.bg}')`;
        bg.removeAttribute('data-bg');
    }

    setupAutoHeight() {
        this.contentBoxes = [...this.slides]
            .map(slide => slide.querySelector('.slide-content > .container'))
            .filter(Boolean);
        if (!this.contentBoxes.length) return;

        // Recalcula quando o texto muda de tamanho (fonte carregada, idioma, palavra rotativa) ou a tela muda
        if ('ResizeObserver' in window) {
            const observer = new ResizeObserver(() => this.fitHeight());
            this.contentBoxes.forEach(box => observer.observe(box));
        }
        window.addEventListener('resize', () => this.fitHeight(), { passive: true });
        this.fitHeight();
    }

    // Se o texto de algum slide não couber entre o header e o seletor de destaques,
    // o hero cresce em vez de deixar o texto passar por baixo deles
    fitHeight() {
        const content = this.slides[0] && this.slides[0].querySelector('.slide-content');
        if (!content) return;

        this.carousel.style.minHeight = '';
        const styles = getComputedStyle(content);
        const padding = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
        const tallest = Math.max(...this.contentBoxes.map(box => box.offsetHeight));
        const needed = Math.ceil(tallest + padding);

        if (needed > this.carousel.offsetHeight) {
            this.carousel.style.minHeight = `${needed}px`;
        }
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
            this.hoverPaused = true;
            this.updateAutoplay();
        });

        this.carousel.addEventListener('mouseleave', () => {
            this.hoverPaused = false;
            this.updateAutoplay();
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

    goToSlide(index, force = false) {
        if (index === this.currentSlide || (this.isAnimating && !force)) return;

        this.isAnimating = true;
        this.loadSlideBackground(index);

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

        // Já deixa a imagem do próximo slide a caminho
        this.loadSlideBackground((index + 1) % this.slides.length);

        // Reset animation lock
        clearTimeout(this.animationLock);
        this.animationLock = setTimeout(() => {
            this.isAnimating = false;
        }, this.options.animationDuration);

        // Restart autoplay
        if (this.autoplayInterval) {
            this.restartAutoplay();
        }
    }

    updateDots(index) {
        this.dots.forEach((dot, i) => {
            const isActive = i === index;
            dot.classList.toggle('active', isActive);
            dot.setAttribute('aria-current', isActive ? 'true' : 'false');
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

    // Liga ou desliga o autoplay conforme os motivos de pausa
    updateAutoplay() {
        const shouldRun = this.options.autoplay && !this.userPaused && !this.hoverPaused
            && !this.focusPaused && !document.hidden;

        if (shouldRun && !this.autoplayInterval) {
            this.startAutoplay();
        } else if (!shouldRun && this.autoplayInterval) {
            this.pauseAutoplay();
        }

        this.carousel.classList.toggle('is-paused', !shouldRun);
    }

    startAutoplay() {
        this.pauseAutoplay(); // Clear any existing interval

        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, this.options.autoplayDelay);

        this.restartDotProgress();

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

    // Reinicia a barrinha de progresso do item ativo do seletor (animação em CSS)
    restartDotProgress() {
        const bar = this.carousel.querySelector(`${this.options.dotSelector}.active .hero-tab-progress`);
        if (!bar) return;
        bar.style.animation = 'none';
        bar.offsetHeight; // Trigger reflow
        bar.style.animation = '';
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
            enableTouch: true,
            dotSelector: '.hero-tab'
        });
    }
});
