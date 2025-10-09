# Design Document - OWLIN Website Redesign

## Overview

Este documento descreve o design técnico e visual para a repaginada completa do site da OWLIN, inspirado no AG São Paulo. O design foca em criar uma experiência dinâmica e moderna com elementos animados, carrosséis interativos, e uma identidade visual forte baseada nas cores da marca (verde #2E7D32, amarelo #FFC107, off-white #FAFAFA).

### Design Principles

1. **Movimento Intencional**: Cada animação deve ter propósito e melhorar a experiência
2. **Performance First**: Animações otimizadas usando CSS transforms e GPU acceleration
3. **Mobile-First**: Design responsivo que funciona perfeitamente em todos os dispositivos
4. **Identidade Visual Forte**: Manter as cores OWLIN em todos os elementos
5. **Conteúdo Rico**: Textos expandidos e imagens de alta qualidade do Unsplash

## Architecture

### File Structure

```
owlin-website/
├── index.html (página principal expandida)
├── css/
│   ├── style.css (estilos principais expandidos)
│   ├── animations.css (animações e efeitos)
│   └── carousel.css (estilos específicos de carrosséis)
├── js/
│   ├── script.js (funcionalidades principais)
│   ├── carousel.js (lógica de carrosséis)
│   ├── animations.js (controle de animações)
│   └── form-validation.js (validação de formulário)
└── img/
    └── (imagens locais + URLs do Unsplash)
```

### Technology Stack

- **HTML5**: Estrutura semântica
- **CSS3**: Animações, Grid, Flexbox, Custom Properties
- **Vanilla JavaScript**: Sem dependências externas
- **Unsplash API**: Imagens de placeholder de alta qualidade


## Components and Interfaces

### 1. Hero Section com Carrossel Avançado

**Visual Design:**
- Carrossel fullscreen com 5+ slides
- Overlay gradient para legibilidade do texto
- Textos animados com efeitos de fade e slide
- CTAs duplos em cada slide
- Controles de navegação (setas + dots)
- Indicador de progresso animado

**Technical Implementation:**
```javascript
class HeroCarousel {
  constructor(slides, autoplayDelay = 6000)
  nextSlide()
  prevSlide()
  goToSlide(index)
  pauseAutoplay()
  resumeAutoplay()
  addParallaxEffect()
}
```

**Slides Content:**
1. "Transforme seu Negócio Digital" - Foco em resultados
2. "Estratégias que Geram Vendas" - Foco em ROI
3. "Sua Marca nas Redes Sociais" - Foco em presença digital
4. "Sites que Convertem" - Foco em desenvolvimento
5. "Marketing com Propósito" - Foco em valores

**Unsplash Images:**
- Marketing digital workspace
- Team collaboration
- Digital analytics dashboard
- Social media content creation
- Business growth graphs

### 2. Seção Sobre Expandida

**Visual Design:**
- Layout two-column (texto + carrossel de imagens)
- Cards de valores com ícones animados
- Estatísticas com contadores animados
- Timeline de história da empresa
- Seção de equipe com fotos

**Content Structure:**
```
- Introdução (2-3 parágrafos)
- Missão e Visão
- Valores (4-6 cards)
- Estatísticas (Anos, Clientes, Projetos, Satisfação)
- Nossa História (timeline)
- Equipe (carrossel de fotos)
```

**Animations:**
- Fade in ao entrar na viewport
- Contadores incrementais para números
- Hover effects nos cards de valores
- Parallax nas imagens de fundo


### 3. Serviços com Cards Interativos

**Visual Design:**
- Grid 3x3 de cards (9 serviços)
- Cards com hover effect 3D
- Ícones animados do Font Awesome
- Modal de expansão para detalhes
- Imagens ilustrativas do Unsplash

**Services List:**
1. Marketing Digital Estratégico
2. Gestão de Redes Sociais
3. Tráfego Pago (Google + Meta Ads)
4. Desenvolvimento Web & E-commerce
5. SEO & Conteúdo
6. Branding & Identidade Visual
7. Email Marketing & Automação
8. Analytics & Business Intelligence
9. Consultoria Digital

**Card Structure:**
```html
<div class="service-card">
  <div class="service-icon-wrapper">
    <i class="animated-icon"></i>
  </div>
  <h3>Service Title</h3>
  <p class="service-description">Extended description...</p>
  <ul class="service-features">
    <li>Feature 1</li>
    <li>Feature 2</li>
    <li>Feature 3</li>
  </ul>
  <button class="btn-details">Saiba Mais</button>
</div>
```

**Hover Effects:**
- Elevação 3D (translateY + shadow)
- Mudança de cor do ícone
- Escala do card (1.05)
- Blur no fundo
- Reveal de informações adicionais

### 4. Galeria de Cases com Filtros

**Visual Design:**
- Carrossel de cards (3 visíveis simultaneamente)
- Filtros por categoria no topo
- Modal fullscreen para detalhes
- Métricas de resultado animadas
- Depoimento do cliente

**Categories:**
- Todos
- Redes Sociais
- E-commerce
- Branding
- Tráfego Pago
- Desenvolvimento Web

**Case Card Structure:**
```html
<div class="case-card" data-category="category">
  <div class="case-image">
    <img src="unsplash-url" alt="Case">
    <div class="case-overlay">
      <span class="case-category">Category</span>
    </div>
  </div>
  <div class="case-content">
    <h3>Client Name</h3>
    <p class="case-brief">Brief description...</p>
    <div class="case-metrics">
      <div class="metric">
        <span class="metric-value">+300%</span>
        <span class="metric-label">Crescimento</span>
      </div>
    </div>
  </div>
</div>
```


### 5. Elementos Flutuantes e Animações de Fundo

**Visual Design:**
- Formas geométricas flutuantes (círculos, quadrados, triângulos)
- Gradientes animados
- Partículas sutis
- Efeitos de parallax em múltiplas camadas
- Cursor customizado com trail effect

**Background Elements:**
```css
.floating-element {
  position: absolute;
  animation: float 20s infinite ease-in-out;
  opacity: 0.1;
  z-index: -1;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(100px, -100px) rotate(90deg); }
  50% { transform: translate(200px, 50px) rotate(180deg); }
  75% { transform: translate(-50px, 100px) rotate(270deg); }
}
```

**Parallax Layers:**
- Layer 1: Elementos de fundo (velocidade 0.2)
- Layer 2: Imagens principais (velocidade 0.5)
- Layer 3: Conteúdo (velocidade 1.0)

**Micro-interactions:**
- Botões: scale + shadow ao hover
- Links: underline animado
- Cards: lift effect
- Inputs: border glow ao focus
- Icons: rotate/bounce ao hover

### 6. Timeline de Processo/Metodologia

**Visual Design:**
- Timeline horizontal em desktop, vertical em mobile
- 5-6 etapas do processo
- Ícones animados para cada fase
- Linha conectora animada
- Cards expansíveis com detalhes

**Process Steps:**
1. **Descoberta** - Entendimento do negócio e objetivos
2. **Estratégia** - Planejamento e definição de metas
3. **Criação** - Desenvolvimento de conteúdo e materiais
4. **Implementação** - Execução das campanhas
5. **Otimização** - Análise e ajustes contínuos
6. **Resultados** - Relatórios e crescimento

**Timeline Structure:**
```html
<div class="timeline">
  <div class="timeline-line"></div>
  <div class="timeline-step" data-step="1">
    <div class="step-icon">
      <i class="fas fa-search"></i>
    </div>
    <div class="step-content">
      <h3>Descoberta</h3>
      <p>Description...</p>
      <ul class="step-deliverables">
        <li>Deliverable 1</li>
        <li>Deliverable 2</li>
      </ul>
    </div>
  </div>
</div>
```

**Animations:**
- Linha progressiva ao scroll
- Ícones que "acendem" ao entrar na viewport
- Pulse effect no step ativo
- Expand/collapse de detalhes


### 7. Carrossel de Depoimentos

**Visual Design:**
- Carrossel com 3 cards visíveis (1 em mobile)
- Card central destacado (maior e mais brilhante)
- Fotos dos clientes em círculo
- Rating com estrelas
- Navegação por setas e dots

**Testimonial Structure:**
```html
<div class="testimonial-card">
  <div class="testimonial-header">
    <img src="client-photo.jpg" alt="Client" class="client-photo">
    <div class="client-info">
      <h4 class="client-name">Nome do Cliente</h4>
      <p class="client-company">Empresa</p>
      <div class="rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
    </div>
  </div>
  <div class="testimonial-content">
    <p class="testimonial-text">"Depoimento completo..."</p>
  </div>
  <div class="testimonial-footer">
    <span class="project-type">Tipo de Projeto</span>
  </div>
</div>
```

**Carousel Behavior:**
- Autoplay com 5s de intervalo
- Pause ao hover
- Swipe em mobile
- Infinite loop
- Smooth transitions

### 8. Seção de Blog/Conteúdo

**Visual Design:**
- Grid 3 colunas (1 em mobile)
- Cards com imagem featured do Unsplash
- Categoria tag colorida
- Data de publicação
- Excerpt do artigo
- Hover effect com preview expandido

**Blog Card Structure:**
```html
<article class="blog-card">
  <div class="blog-image">
    <img src="unsplash-url" alt="Article">
    <span class="blog-category">Categoria</span>
  </div>
  <div class="blog-content">
    <div class="blog-meta">
      <span class="blog-date">
        <i class="far fa-calendar"></i> 15 Jan 2025
      </span>
      <span class="blog-read-time">
        <i class="far fa-clock"></i> 5 min
      </span>
    </div>
    <h3 class="blog-title">Título do Artigo</h3>
    <p class="blog-excerpt">Resumo do artigo...</p>
    <a href="#" class="blog-read-more">
      Ler mais <i class="fas fa-arrow-right"></i>
    </a>
  </div>
</article>
```

**Categories:**
- Marketing Digital
- Redes Sociais
- SEO
- E-commerce
- Tendências
- Dicas


### 9. Formulário de Contato Interativo

**Visual Design:**
- Layout two-column (form + info)
- Campos com animação de label flutuante
- Validação em tempo real com feedback visual
- Loading animation ao enviar
- Modal de sucesso/erro

**Form Structure:**
```html
<form class="contact-form" id="contactForm">
  <div class="form-group">
    <input type="text" id="name" required>
    <label for="name">Seu Nome</label>
    <span class="form-error"></span>
  </div>
  
  <div class="form-group">
    <input type="email" id="email" required>
    <label for="email">Seu E-mail</label>
    <span class="form-error"></span>
  </div>
  
  <div class="form-group">
    <input type="tel" id="phone" required>
    <label for="phone">Seu Telefone</label>
    <span class="form-error"></span>
  </div>
  
  <div class="form-group">
    <select id="service" required>
      <option value="">Selecione um serviço</option>
      <option value="marketing">Marketing Digital</option>
      <option value="social">Redes Sociais</option>
      <option value="ads">Tráfego Pago</option>
      <option value="web">Desenvolvimento Web</option>
      <option value="seo">SEO</option>
      <option value="other">Outro</option>
    </select>
    <label for="service">Serviço de Interesse</label>
  </div>
  
  <div class="form-group">
    <textarea id="message" rows="5" required></textarea>
    <label for="message">Sua Mensagem</label>
    <span class="form-error"></span>
  </div>
  
  <button type="submit" class="btn btn-primary">
    <span class="btn-text">Enviar Mensagem</span>
    <span class="btn-loader"></span>
  </button>
</form>
```

**Validation Rules:**
- Nome: mínimo 3 caracteres
- Email: formato válido
- Telefone: formato brasileiro
- Serviço: seleção obrigatória
- Mensagem: mínimo 10 caracteres

**Animations:**
- Label float ao focus
- Border glow em verde
- Shake animation em erro
- Success checkmark animation
- Loading spinner ao enviar


### 10. Footer Rico

**Visual Design:**
- 4 colunas em desktop (1 em mobile)
- Background gradient verde escuro
- Links com hover effect
- Newsletter signup
- Mapa do site completo
- Redes sociais animadas

**Footer Structure:**
```html
<footer class="footer">
  <div class="footer-top">
    <div class="container">
      <div class="footer-grid">
        
        <div class="footer-col footer-about">
          <img src="logo-white.png" alt="OWLIN" class="footer-logo">
          <p>Agência de marketing digital...</p>
          <div class="footer-social">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
        
        <div class="footer-col">
          <h4>Serviços</h4>
          <ul class="footer-links">
            <li><a href="#">Marketing Digital</a></li>
            <li><a href="#">Redes Sociais</a></li>
            <li><a href="#">Tráfego Pago</a></li>
            <li><a href="#">Desenvolvimento Web</a></li>
            <li><a href="#">SEO</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Empresa</h4>
          <ul class="footer-links">
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Cases</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Carreira</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>Receba dicas de marketing digital</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Seu e-mail">
            <button type="submit">
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
        
      </div>
    </div>
  </div>
  
  <div class="footer-bottom">
    <div class="container">
      <p>&copy; 2025 OWLIN. Todos os direitos reservados.</p>
      <div class="footer-legal">
        <a href="#">Política de Privacidade</a>
        <a href="#">Termos de Uso</a>
      </div>
    </div>
  </div>
</footer>
```

## Data Models

### Carousel Item
```javascript
{
  id: number,
  image: string (URL),
  title: string,
  description: string,
  cta: {
    primary: { text: string, link: string },
    secondary: { text: string, link: string }
  }
}
```

### Service
```javascript
{
  id: number,
  icon: string (Font Awesome class),
  title: string,
  shortDescription: string,
  fullDescription: string,
  features: string[],
  image: string (Unsplash URL)
}
```

### Case Study
```javascript
{
  id: number,
  client: string,
  category: string,
  image: string (Unsplash URL),
  brief: string,
  challenge: string,
  solution: string,
  results: {
    metric: string,
    value: string,
    label: string
  }[],
  testimonial: {
    text: string,
    author: string,
    position: string
  }
}
```

### Testimonial
```javascript
{
  id: number,
  clientName: string,
  clientCompany: string,
  clientPhoto: string (URL),
  rating: number (1-5),
  text: string,
  projectType: string
}
```

### Blog Post
```javascript
{
  id: number,
  title: string,
  excerpt: string,
  category: string,
  image: string (Unsplash URL),
  date: string,
  readTime: number (minutes),
  link: string
}
```


## Error Handling

### Image Loading
- Implementar placeholders durante carregamento
- Fallback para imagens locais se Unsplash falhar
- Lazy loading com Intersection Observer
- Error handling para imagens quebradas

### Form Validation
- Validação client-side em tempo real
- Mensagens de erro claras e específicas
- Prevenção de múltiplos submits
- Feedback visual imediato

### Carousel Errors
- Verificar existência de slides antes de iniciar
- Fallback para slide estático se JS falhar
- Graceful degradation em navegadores antigos

### Animation Performance
- Detectar preferência de movimento reduzido (prefers-reduced-motion)
- Desabilitar animações pesadas em dispositivos lentos
- Usar requestAnimationFrame para animações suaves
- Cleanup de event listeners ao destruir componentes

## Testing Strategy

### Visual Testing
- Testar em múltiplos navegadores (Chrome, Firefox, Safari, Edge)
- Testar em diferentes tamanhos de tela (mobile, tablet, desktop)
- Verificar consistência de cores e tipografia
- Validar acessibilidade (contraste, foco, navegação por teclado)

### Functional Testing
- Testar todos os carrosséis (navegação, autoplay, pause)
- Validar formulário com dados válidos e inválidos
- Testar filtros de cases
- Verificar smooth scroll e navegação
- Testar menu mobile

### Performance Testing
- Medir tempo de carregamento inicial
- Verificar FPS das animações (mínimo 60fps)
- Testar lazy loading de imagens
- Medir Core Web Vitals (LCP, FID, CLS)
- Otimizar para PageSpeed Insights (score > 90)

### Responsiveness Testing
- Testar em dispositivos reais (iOS, Android)
- Verificar gestos touch (swipe, tap, pinch)
- Testar orientação portrait e landscape
- Validar breakpoints (320px, 768px, 1024px, 1440px)

### Accessibility Testing
- Validar HTML semântico
- Testar navegação por teclado (Tab, Enter, Esc)
- Verificar ARIA labels e roles
- Testar com screen readers
- Validar contraste de cores (WCAG AA)

## Color Palette

### Primary Colors
```css
--owlin-green: #2E7D32;
--owlin-dark-green: #1B5E20;
--owlin-light-green: #4CAF50;
--owlin-yellow: #FFC107;
--owlin-light-yellow: #FFEB3B;
--owlin-off-white: #FAFAFA;
```

### Semantic Colors
```css
--success: #4CAF50;
--error: #F44336;
--warning: #FF9800;
--info: #2196F3;
```

### Neutral Colors
```css
--text-primary: #212121;
--text-secondary: #757575;
--text-light: #BDBDBD;
--bg-white: #FFFFFF;
--bg-light: #F5F5F5;
--bg-dark: #161616;
--border: #E0E0E0;
```

### Gradients
```css
--gradient-primary: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%);
--gradient-accent: linear-gradient(135deg, #FFC107 0%, #FFEB3B 100%);
--gradient-overlay: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
```


## Typography

### Font Families
```css
--font-primary: 'Poppins', sans-serif;
--font-secondary: 'Inter', sans-serif;
--font-mono: 'Fira Code', monospace;
```

### Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

### Font Weights
```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

## Spacing System

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

## Animation Timings

```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 800ms;

--easing-linear: linear;
--easing-ease: ease;
--easing-ease-in: ease-in;
--easing-ease-out: ease-out;
--easing-ease-in-out: ease-in-out;
--easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
```

## Breakpoints

```css
--breakpoint-xs: 320px;
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;
--breakpoint-xxl: 1400px;
```

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
--shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-glow: 0 0 20px rgba(46, 125, 50, 0.3);
```

## Border Radius

```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
--radius-full: 9999px;
```

## Z-Index Layers

```css
--z-background: -1;
--z-base: 0;
--z-dropdown: 100;
--z-sticky: 200;
--z-fixed: 300;
--z-modal-backdrop: 400;
--z-modal: 500;
--z-popover: 600;
--z-tooltip: 700;
```

## Unsplash Image Collections

### Hero Slides
- Marketing workspace: `photo-1460925895917-afdab827c52f`
- Team collaboration: `photo-1522071820081-009f0129c71c`
- Digital analytics: `photo-1551288049-bebda4e38f71`
- Social media: `photo-1611162617474-5b21e879e113`
- Business growth: `photo-1553877522-43269d4ea984`

### About Section
- Office space: `photo-1497366216548-37526070297c`
- Team meeting: `photo-1522071820081-009f0129c71c`
- Creative workspace: `photo-1497366811353-6870744d04b2`

### Services
- Digital marketing: `photo-1460925895917-afdab827c52f`
- Social media: `photo-1611162617474-5b21e879e113`
- Web development: `photo-1498050108023-c5249f4df085`
- Analytics: `photo-1551288049-bebda4e38f71`
- Content creation: `photo-1499343245400-cddc78a01317`

### Cases
- E-commerce: `photo-1556742049-0cfed4f6a45d`
- Mobile app: `photo-1512941937669-90a1b58e7e9c`
- Branding: `photo-1561070791-2526d30994b5`
- Campaign: `photo-1553877522-43269d4ea984`

### Blog
- Marketing tips: `photo-1432888622747-4eb9a8f2c293`
- Social media: `photo-1611162616305-c69b3fa7fbe0`
- SEO: `photo-1562577309-4932fdd64cd1`
- Trends: `photo-1504868584819-f8e8b4b6d7e3`

## Performance Optimization Strategies

### Image Optimization
- Use WebP format with JPEG fallback
- Implement responsive images with srcset
- Lazy load images below the fold
- Use blur-up technique for progressive loading
- Compress images to < 200KB

### CSS Optimization
- Use CSS custom properties for theming
- Minimize use of expensive properties (box-shadow, filter)
- Use transform and opacity for animations (GPU accelerated)
- Implement critical CSS inline
- Defer non-critical CSS

### JavaScript Optimization
- Use vanilla JS (no jQuery)
- Implement code splitting
- Defer non-critical scripts
- Use passive event listeners
- Debounce scroll and resize events
- Use Intersection Observer for lazy loading

### Caching Strategy
- Set appropriate cache headers
- Use service worker for offline support
- Implement browser caching for static assets
- Use CDN for external resources

