/* Consentimento de cookies (LGPD) e eventos de medição para o Google Tag Manager.
 *
 * Enquanto GTM_ID estiver vazio, nada sai do site: os eventos ficam só no dataLayer.
 * Para ativar, coloque aqui o ID do contêiner (ex.: 'GTM-ABC1234'). Não cole o snippet
 * do GTM no HTML: ele precisa carregar depois do consentimento padrão definido abaixo.
 * Para ver os eventos no console, abra qualquer página com ?track_debug=1.
 */
(function () {
    'use strict';

    const GTM_ID = '';
    const CONSENT_KEY = 'owlin-consent';
    const CONSENT_MAX_AGE = 365 * 24 * 60 * 60 * 1000; // pergunta de novo depois de 12 meses

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }

    function readStorage(store, key) {
        try { return window[store].getItem(key); } catch (e) { return null; }
    }

    function writeStorage(store, key, value) {
        try { window[store].setItem(key, value); } catch (e) { /* navegação privada ou armazenamento bloqueado */ }
    }

    if (new URLSearchParams(location.search).get('track_debug') === '1') writeStorage('sessionStorage', 'owlin-track-debug', '1');
    const debug = readStorage('sessionStorage', 'owlin-track-debug') === '1';

    function track(event, params) {
        const payload = Object.assign({ event: event, page_path: location.pathname }, params || {});
        window.dataLayer.push(payload);
        if (debug) console.log('[owlin-track]', payload);
    }
    window.owlinTrack = track;

    // ===== Consent Mode v2: tudo que não é essencial começa negado =====
    gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        functionality_storage: 'granted',
        security_storage: 'granted',
        wait_for_update: 500
    });

    function savedChoice() {
        try {
            const saved = JSON.parse(readStorage('localStorage', CONSENT_KEY) || 'null');
            if (saved && (saved.choice === 'granted' || saved.choice === 'denied') && Date.now() - saved.ts < CONSENT_MAX_AGE) {
                return saved.choice;
            }
        } catch (e) { /* valor antigo ou corrompido: pergunta de novo */ }
        return null;
    }

    function applyConsent(choice) {
        const value = choice === 'granted' ? 'granted' : 'denied';
        gtag('consent', 'update', {
            ad_storage: value,
            ad_user_data: value,
            ad_personalization: value,
            analytics_storage: value
        });
    }

    const initialChoice = savedChoice();
    if (initialChoice) applyConsent(initialChoice);

    // ===== Google Tag Manager (só carrega quando houver ID) =====
    if (GTM_ID) {
        window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
        const gtm = document.createElement('script');
        gtm.async = true;
        gtm.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(GTM_ID);
        document.head.appendChild(gtm);
    }

    // ===== Aviso de cookies =====
    const banner = document.createElement('section');
    banner.className = 'cookie-banner';
    banner.setAttribute('aria-labelledby', 'cookie-title');
    banner.hidden = true;
    banner.innerHTML =
        '<h2 id="cookie-title"><i class="fas fa-cookie-bite" aria-hidden="true"></i> <span data-i18n="cookies.title">Sua privacidade</span></h2>' +
        '<p data-i18n="cookies.text">Usamos cookies essenciais para o site funcionar e, só com a sua permissão, cookies de ' +
        'medição e publicidade. Veja a <a href="/privacidade">política de privacidade</a>.</p>' +
        '<div class="cookie-actions">' +
        '<button type="button" class="cookie-reject" data-i18n="cookies.reject">Recusar</button>' +
        '<button type="button" class="cookie-accept" data-i18n="cookies.accept">Aceitar</button>' +
        '</div>';
    document.body.appendChild(banner);

    // Traduz o aviso se o idioma já tiver sido aplicado antes dele existir
    if (typeof i18nText === 'function') {
        banner.querySelectorAll('[data-i18n]').forEach(function (el) {
            const value = i18nText(el.getAttribute('data-i18n'));
            if (!value) return;
            if (value.indexOf('<') !== -1) el.innerHTML = value; else el.textContent = value;
        });
    }

    function syncBannerSpace() {
        const open = !banner.hidden;
        document.documentElement.classList.toggle('has-cookie-banner', open);
        document.documentElement.style.setProperty('--cookie-banner-h', open ? banner.offsetHeight + 'px' : '0px');
    }

    function showBanner(focus) {
        banner.hidden = false;
        syncBannerSpace();
        if (focus) banner.querySelector('.cookie-accept').focus();
    }

    function choose(choice) {
        writeStorage('localStorage', CONSENT_KEY, JSON.stringify({ choice: choice, ts: Date.now() }));
        applyConsent(choice);
        track('consent_update', { consent: choice });
        banner.hidden = true;
        syncBannerSpace();
    }

    banner.querySelector('.cookie-accept').addEventListener('click', function () { choose('granted'); });
    banner.querySelector('.cookie-reject').addEventListener('click', function () { choose('denied'); });
    // A altura do aviso muda quando a fonte termina de carregar ou o idioma troca
    if ('ResizeObserver' in window) new ResizeObserver(syncBannerSpace).observe(banner);
    window.addEventListener('resize', syncBannerSpace);
    document.addEventListener('owlin:langchange', syncBannerSpace);
    if (!initialChoice) showBanner(false);

    // ===== Eventos de clique =====
    function placeOf(el) {
        if (el.closest('.whatsapp-float')) return 'botao_flutuante';
        if (el.closest('.header')) return 'menu';
        if (el.closest('.hero, .page-hero, .service-hero')) return 'topo';
        if (el.closest('.footer')) return 'rodape';
        const section = el.closest('section');
        if (section) return section.id || section.className.split(' ')[0] || 'conteudo';
        return 'conteudo';
    }

    function textOf(el) {
        return (el.textContent || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 100);
    }

    document.addEventListener('click', function (e) {
        const el = e.target.closest('a, button');
        if (!el) return;
        if (el.matches('[data-cookie-settings]')) {
            e.preventDefault();
            showBanner(true);
            return;
        }
        if (el.matches('.lang-btn')) return track('lang_change', { language: el.getAttribute('data-lang') || '' });
        if (el.matches('.yt-lite')) return track('video_play', { video_id: el.getAttribute('data-yt'), video_title: el.getAttribute('data-title') || '' });
        if (el.tagName !== 'A') return;

        const href = el.getAttribute('href') || '';
        const url = el.href || '';
        const where = placeOf(el);
        if (/api\.whatsapp\.com|wa\.me\//.test(url)) return track('whatsapp_click', { link_location: where, link_text: textOf(el) });
        if (href.indexOf('mailto:') === 0) return track('email_click', { link_location: where });
        if (href.indexOf('tel:') === 0) return track('phone_click', { link_location: where });
        const social = /(instagram|tiktok|youtube|linkedin|facebook)\.com/.exec(url);
        if (social) return track('social_click', { network: social[1], link_location: where });
        if (el.closest('.nav-menu')) return track('menu_click', { link_text: textOf(el), link_url: href });
        if (el.matches('.service-mini-card, .btn-details')) return track('select_content', { content_type: 'servico', item_id: href });
        if (el.closest('.blog-card')) return track('select_content', { content_type: 'guia', item_id: href });
        if (el.closest('.portfolio-card, .model-showcase')) return track('select_content', { content_type: 'portfolio', item_id: url });
        if (el.matches('.btn, .btn-cta-white, .btn-cta-outline, .btn-outline, .btn-whatsapp')) {
            return track('cta_click', { link_text: textOf(el), link_url: href, link_location: where });
        }
        if (el.host && el.host !== location.host) return track('outbound_click', { link_url: url, link_text: textOf(el) });
    });

    // ===== Formulários =====
    document.addEventListener('focusin', function (e) {
        const form = e.target.closest && e.target.closest('form');
        if (!form || form.dataset.trackStarted) return;
        form.dataset.trackStarted = '1';
        track('form_start', { form_location: placeOf(form) });
    });

    // Disparado pelo script.js quando o envio dá certo
    document.addEventListener('owlin:lead', function (e) {
        track('generate_lead', Object.assign({ form_location: location.pathname }, e.detail || {}));
    });

    window.addEventListener('pagehide', function () {
        document.querySelectorAll('form[data-track-started]:not([data-track-sent])').forEach(function (form) {
            track('form_abandon', { form_location: placeOf(form) });
            form.dataset.trackSent = 'abandono';
        });
    });

    // ===== Profundidade de rolagem =====
    const marks = [25, 50, 75, 90];
    const reached = {};
    let ticking = false;
    window.addEventListener('scroll', function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
            ticking = false;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            if (max <= 0) return;
            const percent = (window.scrollY / max) * 100;
            marks.forEach(function (mark) {
                if (percent >= mark && !reached[mark]) {
                    reached[mark] = true;
                    track('scroll_depth', { percent: mark });
                }
            });
        });
    }, { passive: true });
})();
