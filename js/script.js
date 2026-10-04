document.addEventListener('DOMContentLoaded', function () {

    // ===== MOBILE MENU TOGGLE =====
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', navMenu.classList.contains('active') ? 'true' : 'false');
        });

        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ===== SUBMENU DO PORTFÓLIO =====
    // No desktop abre com o mouse; a setinha abre e fecha pelo clique ou teclado (Esc fecha)
    document.querySelectorAll('.has-submenu').forEach(item => {
        const toggle = item.querySelector('.submenu-toggle');
        if (!toggle) return;
        const setOpen = open => {
            item.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        };
        toggle.addEventListener('click', e => {
            e.stopPropagation();
            setOpen(!item.classList.contains('open'));
        });
        item.addEventListener('keydown', e => {
            if (e.key === 'Escape' && item.classList.contains('open')) {
                setOpen(false);
                toggle.focus();
            }
        });
        item.addEventListener('focusout', e => {
            if (!item.contains(e.relatedTarget)) setOpen(false);
        });
        item.addEventListener('mouseleave', () => setOpen(false));
        document.addEventListener('click', e => {
            if (!item.contains(e.target)) setOpen(false);
        });
    });

    // ===== VÍDEOS DO YOUTUBE =====
    // A página mostra só a miniatura; o player (e os cookies do YouTube) só carrega no clique
    document.querySelectorAll('.yt-lite').forEach(btn => {
        btn.addEventListener('click', () => {
            const frame = document.createElement('iframe');
            frame.className = 'yt-frame';
            frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(btn.dataset.yt) + '?autoplay=1&rel=0&playsinline=1';
            frame.title = btn.dataset.title || 'Vídeo do YouTube';
            frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            frame.referrerPolicy = 'strict-origin-when-cross-origin';
            frame.allowFullscreen = true;
            btn.replaceWith(frame);
            frame.focus();
        });
    });

    // ===== SMOOTH SCROLLING =====
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href === '#' || href === '') return;

            e.preventDefault();
            const targetId = href;
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== HEADER SCROLL EFFECT =====
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Esconder header ao rolar para baixo, mostrar ao rolar para cima
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        // Adicionar sombra ao header quando rolar
        if (scrollTop > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        }

        lastScrollTop = scrollTop;
    });

    // ===== HERO: PALAVRA ROTATIVA NO TÍTULO =====
    // (os slides do hero são controlados pelo OwlinCarousel, em carousel.js)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('[data-rotate]').forEach(rotator => {
        let wordIndex = 0;
        const words = () => (typeof i18nText === 'function' ? i18nText(rotator.dataset.rotate) : '')
            .split('|').map(word => word.trim()).filter(Boolean);
        const showWord = (index) => {
            const list = words();
            if (!list.length) return;
            wordIndex = index % list.length;
            rotator.textContent = list[wordIndex];
        };

        // Reserva a largura da palavra mais longa (em em, acompanha o tamanho da fonte),
        // assim a quebra de linha do título é a mesma para todas as palavras
        const reserveWidth = () => {
            const probe = rotator.cloneNode();
            probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;min-width:0';
            rotator.parentNode.appendChild(probe);
            const fontSize = parseFloat(getComputedStyle(rotator).fontSize);
            let widest = 0;
            words().forEach(word => {
                probe.textContent = word;
                widest = Math.max(widest, probe.getBoundingClientRect().width);
            });
            probe.remove();
            if (widest && fontSize) rotator.style.minWidth = `${widest / fontSize}em`;
        };

        showWord(0);
        reserveWidth();
        if (document.fonts) document.fonts.ready.then(reserveWidth);
        document.addEventListener('owlin:langchange', () => {
            showWord(0);
            reserveWidth();
        });
        if (prefersReducedMotion) return;

        setInterval(() => {
            if (document.hidden) return;
            rotator.classList.add('is-leaving');
            setTimeout(() => {
                showWord(wordIndex + 1);
                rotator.classList.remove('is-leaving');
                rotator.classList.add('is-entering');
                rotator.offsetWidth; // Trigger reflow
                rotator.classList.remove('is-entering');
            }, 350);
        }, 2800);
    });

    // ===== FAQ: UMA RESPOSTA ABERTA POR VEZ =====
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('toggle', () => {
            if (!item.open) return;
            faqItems.forEach(other => {
                if (other !== item) other.open = false;
            });
        });
    });

    // ===== ANIMAÇÃO AO ROLAR =====
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.animate-up');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Verificar elementos visíveis na carga inicial

    // ===== MENU ATIVO =====
    // Cada página marca o próprio item no HTML (class="active" + aria-current="page")

    // ===== PRÉVIAS AO VIVO (IFRAMES) =====
    // Os sites dos clientes são pesados: só começam a carregar depois da página pronta
    // e quando chegam perto da tela, para não atrasar o conteúdo da própria página
    const liveFrames = document.querySelectorAll('iframe[data-src]');
    if (liveFrames.length) {
        const loadFrame = (frame) => {
            frame.src = frame.dataset.src;
            frame.removeAttribute('data-src');
        };
        const watchFrames = () => {
            if (!('IntersectionObserver' in window)) {
                liveFrames.forEach(loadFrame);
                return;
            }
            const frameObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    loadFrame(entry.target);
                    observer.unobserve(entry.target);
                });
            }, { rootMargin: '400px 0px' });
            liveFrames.forEach(frame => frameObserver.observe(frame));
        };
        if (document.readyState === 'complete') {
            watchFrames();
        } else {
            window.addEventListener('load', watchFrames, { once: true });
        }
    }

    // ===== LAZY LOADING DE IMAGENS =====
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ===== CONTADOR DE ESTATÍSTICAS =====
    const stats = document.querySelectorAll('.stat-item h3');
    let hasAnimated = false;

    function animateStats() {
        if (hasAnimated) return;

        const statsSection = document.querySelector('.sobre-stats');
        if (!statsSection) return;

        const statsSectionPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (statsSectionPosition < screenPosition) {
            hasAnimated = true;

            stats.forEach(stat => {
                const text = stat.textContent;
                const hasPlus = text.includes('+');
                const number = parseInt(text.replace(/\D/g, ''));

                if (!isNaN(number)) {
                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            stat.textContent = number + (hasPlus ? '+' : '');
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + (hasPlus ? '+' : '');
                        }
                    }, 30);
                }
            });
        }
    }

    window.addEventListener('scroll', animateStats);
    animateStats();

    // ===== PREVENÇÃO DE SCROLL HORIZONTAL =====
    document.body.style.overflowX = 'hidden';

    // ===== LOADING ANIMATION =====
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });

    // ===== CONSOLE MESSAGE =====
    console.log('%c🦉 OWLIN - Agência de marketing digital', 'color: #2E7D32; font-size: 20px; font-weight: bold;');
    console.log('%cExcelência e calmaria em cada projeto', 'color: #FFC107; font-size: 14px;');
    console.log('%cVisite: https://owlin.com.br', 'color: #666; font-size: 12px;');
});

// ===== SCROLL REVEAL ANIMATION =====
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.scroll-reveal');

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', scrollReveal);
scrollReveal(); // Initial check

// ===== CASES FILTER =====
const filterButtons = document.querySelectorAll('.filter-btn');
const caseCards = document.querySelectorAll('.case-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        caseCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===== CONTADOR DE ESTATÍSTICAS MELHORADO =====
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (!stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    animateCounter(stat);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.sobre-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===== CARROSSEL DE IMAGENS DA SEÇÃO SOBRE =====
const initImageCarousel = (carouselElement) => {
    const items = carouselElement.querySelectorAll('.carousel-item');
    const prevBtn = carouselElement.querySelector('.carousel-btn.prev');
    const nextBtn = carouselElement.querySelector('.carousel-btn.next');
    const dots = carouselElement.querySelectorAll('.carousel-dot');
    let currentIndex = 0;

    const showItem = (index) => {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentIndex = index;
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const newIndex = (currentIndex - 1 + items.length) % items.length;
            showItem(newIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const newIndex = (currentIndex + 1) % items.length;
            showItem(newIndex);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showItem(index));
    });

    // Autoplay
    setInterval(() => {
        const newIndex = (currentIndex + 1) % items.length;
        showItem(newIndex);
    }, 5000);
};

const imageCarousels = document.querySelectorAll('.image-carousel');
imageCarousels.forEach(carousel => initImageCarousel(carousel));

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax') || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== SMOOTH SCROLL PARA BOTÕES =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// Tornar cards de serviços clicáveis por inteiro
document.addEventListener('DOMContentLoaded', function () {
    const servicoCards = document.querySelectorAll('.servico-card');

    servicoCards.forEach(card => {
        const link = card.querySelector('.btn-details');
        if (link) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function (e) {
                // Não redirecionar se clicar diretamente no link
                if (e.target.closest('.btn-details')) {
                    return;
                }
                window.location.href = link.href;
            });
        }
    });
});


// Texto traduzido com reserva em português (i18n.js pode não estar na página)
function textoTraduzido(key, fallback) {
    return (typeof i18nText === 'function' && i18nText(key)) || fallback;
}

// Form submission with custom thank you popup
document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('.contact-form-simple');

    forms.forEach(form => {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const formData = new FormData(form);
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;

            // Disable button and show loading
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + textoTraduzido('form.sending', 'Enviando...');

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Show success popup
                    showThankYouPopup();
                    // Avisa o tracking.js (evento generate_lead) só quando o envio deu certo
                    form.dataset.trackSent = '1';
                    document.dispatchEvent(new CustomEvent('owlin:lead', {
                        detail: { form_location: location.pathname, service: formData.get('service') || '' }
                    }));
                    // Reset form
                    form.reset();
                } else {
                    throw new Error('Erro ao enviar formulário');
                }
            } catch (error) {
                alert(textoTraduzido('form.error', 'Não foi possível enviar sua mensagem. Tente de novo ou fale com a gente pelo WhatsApp.'));
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }
        });
    });
});

function showThankYouPopup() {
    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'thank-you-popup';
    popup.innerHTML = `
        <div class="thank-you-content">
            <div class="thank-you-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3></h3>
            <p></p>
        </div>
    `;
    popup.querySelector('h3').textContent = textoTraduzido('form.sent.title', 'Mensagem enviada!');
    popup.querySelector('p').textContent = textoTraduzido('form.sent.text', 'Obrigado pelo contato! Responderemos em breve.');

    document.body.appendChild(popup);

    // Trigger animation
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);

    // Remove after 6 seconds
    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.remove();
        }, 300);
    }, 6000);
}
