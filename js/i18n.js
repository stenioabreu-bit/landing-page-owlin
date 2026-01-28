// Traduções
const translations = {
    'pt-BR': {
        // Header
        'nav.home': 'Início',
        'nav.about': 'Sobre Nós',
        'nav.services': 'Serviços',
        'nav.portfolio': 'Portfólio',
        'nav.cases': 'Cases',
        'nav.contact': 'Contato',
        
        // Hero Slides
        'hero.title1': 'Transforme seu Negócio com Marketing Digital',
        'hero.desc1': 'Estratégias personalizadas que geram resultados reais. Aumente suas vendas, fortaleça sua marca e conquiste novos clientes com excelência e calmaria em cada projeto.',
        'hero.cta1': 'Começar Agora',
        'hero.cta2': 'Nossos Serviços',
        'hero.title2': 'Estratégias que Geram Vendas Reais',
        'hero.desc2': 'Campanhas de tráfego pago otimizadas, SEO estratégico e automação de marketing. Transformamos investimento em resultados mensuráveis e crescimento sustentável.',
        'hero.cta3': 'Ver Cases de Sucesso',
        'hero.cta4': 'Falar com Especialista',
        'hero.title3': 'Sua Marca Forte nas Redes Sociais',
        'hero.desc3': 'Gestão completa de redes sociais com conteúdo estratégico, design impactante e engajamento autêntico. Construa uma comunidade fiel e aumente sua presença digital.',
        'hero.cta5': 'Gestão de Redes',
        'hero.cta6': 'Agendar Reunião',
        'hero.title4': 'Sites que Convertem Visitantes em Clientes',
        'hero.desc4': 'Desenvolvimento de sites responsivos, landing pages de alta conversão e e-commerce completo. Design moderno, performance otimizada e experiência do usuário impecável.',
        'hero.cta7': 'Criar Meu Site',
        'hero.cta8': 'Ver Portfólio',
        'hero.title5': 'Marketing Digital com Propósito e Resultados',
        'hero.desc5': 'Mais que uma agência, somos seu parceiro estratégico. Trabalhamos com transparência, dedicação e foco total no crescimento do seu negócio. Excelência e calmaria em cada projeto.',
        'hero.cta9': 'Conhecer a OWLIN',
        'hero.cta10': 'Ser Nosso Cliente',
        
        // About
        'about.title': 'Conheça a OWLIN',
        'about.subtitle': 'Mais que uma agência, somos seu parceiro estratégico de crescimento',
        'about.who': 'Quem Somos',
        'about.values': 'Nossos Valores',
        
        // Values
        'value.excellence': 'Excelência',
        'value.excellence.desc': 'Com um olhar minucioso, buscamos a perfeição em cada detalhe e entregamos o mais alto padrão em cada projeto, garantindo resultados que superam expectativas.',
        'value.strategy': 'Estratégia',
        'value.strategy.desc': 'Guiados por uma visão aguçada, planejamos cada passo com inteligência e organização. Nosso processo é focado, eficiente e desenhado para gerar impacto sem estresse.',
        'value.transparency': 'Transparência',
        'value.transparency.desc': 'Acreditamos na comunicação clara, honesta e contínua. Sem surpresas, construímos relações de confiança baseadas na verdade e no comprometimento mútuo.',
        'value.innovation': 'Inovação',
        'value.innovation.desc': 'Sempre à frente, exploramos tendências e tecnologias de ponta. Nossa criatividade se alia à expertise para desenvolver soluções inovadoras que posicionam sua marca no futuro.',
        'value.focus': 'Foco',
        'value.focus.desc': 'Nosso propósito é o crescimento do seu negócio. Com base em métricas e análise de ROI, garantimos que cada investimento se traduza em desempenho e impacto tangível.',
        'value.partnership': 'Parceria',
        'value.partnership.desc': 'Seu sucesso é o nosso maior objetivo. Trabalhamos lado a lado, com dedicação e comprometimento, como verdadeiros parceiros estratégicos que celebram cada conquista.',
        
        // Services
        'services.title': 'Nossos Serviços',
        'services.subtitle': 'Soluções completas de marketing digital para transformar seu negócio',
        'services.learnmore': 'Saiba Mais',
        
        // Service names and descriptions
        'service.marketing': 'Marketing Digital Estratégico',
        'service.marketing.desc': 'Estratégias completas e personalizadas de marketing digital para aumentar sua presença online, conquistar novos clientes e gerar resultados consistentes e mensuráveis.',
        'service.social': 'Gestão de Redes Sociais',
        'service.social.desc': 'Criação de conteúdo estratégico, planejamento editorial completo e gestão profissional das suas redes sociais para engajar seu público e construir uma comunidade fiel.',
        'service.ads': 'Tráfego Pago',
        'service.ads.desc': 'Campanhas otimizadas no Google Ads, Meta Ads (Facebook/Instagram) e TikTok Ads para gerar leads qualificados, aumentar suas vendas e maximizar o retorno sobre investimento.',
        'service.web': 'Desenvolvimento Web & E-commerce',
        'service.web.desc': 'Sites responsivos, landing pages de alta conversão e e-commerce completo desenvolvidos com foco em performance, experiência do usuário e resultados de vendas.',
        'service.seo': 'SEO & Conteúdo',
        'service.seo.desc': 'Otimização para mecanismos de busca e produção de conteúdo estratégico para posicionar sua marca no topo do Google e atrair tráfego orgânico qualificado.',
        'service.branding': 'Branding & Identidade Visual',
        'service.branding.desc': 'Criação e desenvolvimento de identidade visual completa, naming, posicionamento de marca e estratégias para fortalecer sua presença no mercado.',
        'service.audiovisual': 'Produção Audiovisual',
        'service.audiovisual.desc': 'Sessões fotográficas profissionais e vídeos de eventos como casamentos, festas, eventos corporativos e muito mais para eternizar seus momentos especiais.',
        'service.analytics': 'Analytics & Business Intelligence',
        'service.analytics.desc': 'Monitoramento avançado, análise de métricas e relatórios inteligentes para otimizar suas estratégias e maximizar o retorno sobre investimento.',
        'service.consulting': 'Consultoria Digital',
        'service.consulting.desc': 'Consultoria especializada em marketing digital, análise de processos, diagnóstico de oportunidades e desenvolvimento de estratégias personalizadas de crescimento.',
        
        // Service features
        'feature.planning': 'Planejamento Estratégico',
        'feature.market': 'Análise de Mercado',
        'feature.personas': 'Definição de Personas',
        'feature.content': 'Criação de Conteúdo',
        'feature.design': 'Design de Posts',
        'feature.community': 'Gestão de Comunidade',
        'feature.google': 'Google Ads',
        'feature.meta': 'Meta Ads (Facebook/Instagram)',
        'feature.tiktok': 'TikTok Ads',
        'feature.sites': 'Sites Institucionais',
        'feature.landing': 'Landing Pages',
        'feature.stores': 'Lojas Virtuais',
        'feature.seo': 'SEO On-Page e Off-Page',
        'feature.contentmkt': 'Marketing de Conteúdo',
        'feature.blog': 'Blog Corporativo',
        'feature.logo': 'Criação de Logo',
        'feature.brand': 'Manual de Marca',
        'feature.positioning': 'Posicionamento',
        'feature.photo': 'Fotografia Profissional',
        'feature.video': 'Vídeos de Eventos',
        'feature.coverage': 'Cobertura Completa',
        'feature.analytics': 'Google Analytics',
        'feature.dashboards': 'Dashboards Personalizados',
        'feature.reports': 'Relatórios de Performance',
        'feature.diagnostic': 'Diagnóstico Digital',
        'feature.action': 'Plano de Ação',
        'feature.mentoring': 'Mentoria Estratégica',
        
        // Cases
        'cases.title': 'Nossos Cases de Sucesso',
        'cases.subtitle': 'Resultados reais que transformaram negócios',
        'cases.filter.all': 'Todos',
        'cases.filter.social': 'Redes Sociais',
        'cases.filter.ecommerce': 'E-commerce',
        'cases.filter.branding': 'Branding',
        'cases.filter.ads': 'Tráfego Pago',
        'cases.filter.web': 'Desenvolvimento',
        
        // Process
        'process.title': 'Nosso Processo de Trabalho',
        'process.subtitle': 'Um método comprovado para transformar seu negócio',
        'process.step1': 'Descoberta',
        'process.step1.desc': 'Entendemos profundamente seu negócio, objetivos, público-alvo e desafios atuais.',
        'process.step2': 'Estratégia',
        'process.step2.desc': 'Desenvolvemos um plano estratégico personalizado com metas claras e KPIs definidos.',
        'process.step3': 'Criação',
        'process.step3.desc': 'Produzimos todo o conteúdo, design e materiais necessários para executar a estratégia.',
        'process.step4': 'Implementação',
        'process.step4.desc': 'Colocamos tudo em prática com execução impecável e atenção aos detalhes.',
        'process.step5': 'Otimização',
        'process.step5.desc': 'Monitoramos resultados e fazemos ajustes contínuos para maximizar performance.',
        'process.step6': 'Resultados',
        'process.step6.desc': 'Entregamos relatórios detalhados e celebramos o crescimento do seu negócio.',
        
        // Process Deliverables
        'process.step1.item1': 'Reunião de Briefing',
        'process.step1.item2': 'Análise de Mercado',
        'process.step1.item3': 'Definição de Personas',
        'process.step2.item1': 'Plano de Marketing',
        'process.step2.item2': 'Definição de Metas',
        'process.step2.item3': 'Cronograma de Ações',
        'process.step3.item1': 'Criação de Conteúdo',
        'process.step3.item2': 'Design de Materiais',
        'process.step3.item3': 'Desenvolvimento Técnico',
        'process.step4.item1': 'Lançamento de Campanhas',
        'process.step4.item2': 'Publicação de Conteúdo',
        'process.step4.item3': 'Ativação de Canais',
        'process.step5.item1': 'Análise de Métricas',
        'process.step5.item2': 'Testes A/B',
        'process.step5.item3': 'Ajustes Estratégicos',
        'process.step6.item1': 'Relatórios Mensais',
        'process.step6.item2': 'Reuniões de Resultados',
        'process.step6.item3': 'Planejamento Futuro',
        
        // About - Who We Are (full text)
        'about.text1': 'Na OWLIN, não apenas criamos presença digital; nós a posicionamos. Atuamos desde 2019 e somos a fusão perfeita entre uma agência de marketing digital completa e uma produtora audiovisual de excelência, com soluções 360° para marcas, empresas, infoprodutores, profissionais liberais, igrejas e podcasts que buscam liderança e autoridade online.',
        'about.text2': 'Nossa essência está na <strong>VISÃO QUE POSICIONA</strong>. Com o olhar aguçado da coruja, agimos com precisão e estratégia para:',
        'about.text3.title': 'REBRANDING E IDENTIDADE VISUAL:',
        'about.text3': 'Somos referência na criação de identidades visuais impactantes e estratégias de rebranding que reconectam sua marca ao futuro, garantindo uma imagem profissional e memorável.',
        'about.text4.title': 'ESTRATÉGIA DIGITAL INTEGRADA:',
        'about.text4': 'Conectamos seu propósito, estratégia e performance. Nossa equipe conta com gestores de tráfego pago certificados (Meta, Google, TikTok), que impulsionam resultados reais, além de especialistas em social media (Instagram, Facebook, TikTok) para engajar e construir comunidades.',
        'about.text5.title': 'PRODUÇÃO AUDIOVISUAL DE ALTO NÍVEL:',
        'about.text5': 'Elevamos sua comunicação com fotografia profissional, videomaker para conteúdo estratégico e transmissões ao vivo de qualidade que capturam a atenção e contam sua história.',
        'about.text6.title': 'DESENVOLVIMENTO WEB:',
        'about.text6': 'Criamos websites corporativos e landing pages otimizadas, transformando visitantes em clientes com design intuitivo e foco em conversão.',
        'about.text7.title': 'CONSULTORIA ESPECIALIZADA:',
        'about.text7': 'Oferecemos orientação estratégica e personalizada, com foco em resultados, para que cada projeto alcance seu máximo potencial.',
        'about.text8': 'Na OWLIN, cada projeto é uma oportunidade de demonstrar nossa excelência criativa e técnica. Transformamos ideias em soluções prontas para impactar e consolidar sua marca no cenário digital.',
        'about.text9': '<strong>Pronto para ter uma VISÃO QUE POSICIONA sua marca no lugar certo?</strong> Conheça nossos cases e descubra como podemos fazer a diferença para você!',
        
        // Portfolio Page
        'portfolio.title': 'Nosso Portfólio',
        'portfolio.subtitle': 'Conheça alguns dos projetos que desenvolvemos com excelência e dedicação para nossos clientes',
        'portfolio.visit': 'Visitar Site',
        'portfolio.ff.type': 'Studio Automotivo',
        'portfolio.ff.desc': 'Site moderno e profissional para um studio automotivo, com design elegante, navegação intuitiva e otimizado para conversão de clientes.',
        'portfolio.ip.type': 'Saúde & Odontologia',
        'portfolio.ip.desc': 'Site completo para clínica odontológica com apresentação dos serviços, equipe profissional e sistema de agendamento, transmitindo confiança e profissionalismo.',
        'portfolio.tag.web': 'Desenvolvimento Web',
        'portfolio.tag.responsive': 'Design Responsivo',
        'portfolio.tag.seo': 'SEO',
        'portfolio.tag.uiux': 'UI/UX Design',
        'portfolio.tag.optimization': 'Otimização',
        'portfolio.cta.title': 'Transforme sua Presença Digital',
        'portfolio.cta.subtitle': 'Oferecemos soluções completas para levar seu negócio ao próximo nível',
        'portfolio.cta.web': 'Desenvolvimento Web',
        'portfolio.cta.web.desc': 'Sites modernos, responsivos e otimizados para conversão',
        'portfolio.cta.marketing': 'Marketing Digital',
        'portfolio.cta.marketing.desc': 'Estratégias personalizadas para aumentar sua visibilidade',
        'portfolio.cta.social': 'Gestão de Redes Sociais',
        'portfolio.cta.social.desc': 'Conteúdo estratégico que engaja e converte',
        'portfolio.cta.ads': 'Tráfego Pago',
        'portfolio.cta.ads.desc': 'Campanhas otimizadas no Google, Meta e TikTok Ads',
        'portfolio.cta.branding': 'Branding',
        'portfolio.cta.branding.desc': 'Identidade visual que destaca sua marca no mercado',
        'portfolio.cta.audiovisual': 'Produção Audiovisual',
        'portfolio.cta.audiovisual.desc': 'Fotos e vídeos profissionais para sua comunicação',
        'portfolio.final.title': 'Pronto para ter um projeto como esses?',
        'portfolio.final.subtitle': 'Entre em contato conosco e vamos transformar sua ideia em realidade!',
        'portfolio.final.whatsapp': 'Falar no WhatsApp',
        'portfolio.final.quote': 'Solicitar Orçamento',
        
        // Blog
        'blog.title': 'Blog & Conteúdo',
        'blog.subtitle': 'Dicas, tendências e insights sobre marketing digital',
        'blog.readmore': 'Ler mais',
        'blog.category.marketing': 'Marketing Digital',
        'blog.category.social': 'Redes Sociais',
        'blog.category.ecommerce': 'E-commerce',
        'blog.post1.title': 'Tendências do Marketing Digital em 2025',
        'blog.post1.excerpt': 'Inteligência artificial, personalização e experiências imersivas lideram as transformações no marketing digital para este ano.',
        'blog.post2.title': 'Como as Redes Sociais Transformam Negócios',
        'blog.post2.excerpt': 'Empresas brasileiras investem cada vez mais em estratégias de redes sociais para alcançar novos públicos e aumentar vendas.',
        'blog.post3.title': 'O Futuro do E-commerce brasileiro',
        'blog.post3.excerpt': 'Setor de comércio eletrônico no Brasil registra crescimento expressivo impulsionado por inovações tecnológicas e mudanças no comportamento do consumidor.',
        
        // Contact
        'contact.title': 'Entre em Contato',
        'contact.subtitle': 'Pronto para transformar seu negócio? Vamos conversar!',
        'contact.form.title': 'Ou Solicite um Orçamento',
        'contact.form.desc': 'Preencha o formulário abaixo e entraremos em contato em breve!',
        'contact.form.name': 'Seu nome',
        'contact.form.email': 'Seu e-mail',
        'contact.form.phone': 'Seu telefone (opcional)',
        'contact.form.message': 'Conte-nos sobre seu projeto...',
        'contact.form.submit': 'Enviar Mensagem',
        'contact.info.title': 'Fale Conosco',
        'contact.info.desc': 'Entre em contato pelos nossos canais!',
        'contact.whatsapp': 'Entre em contato!',
        'contact.instagram': 'Nos siga no instagram!',
        'contact.cta.title': 'Atendimento Rápido',
        'contact.cta.desc': 'Fale conosco agora pelo WhatsApp e receba uma resposta imediata!',
        'contact.cta.btn': 'Falar no WhatsApp',
        
        // Footer
        'footer.services': 'Serviços',
        'footer.company': 'Empresa',
        'footer.rights': '© 2025 OWLIN - Agência de Marketing Digital. Todos os direitos reservados.',
        'footer.privacy': 'Política de Privacidade',
        'footer.terms': 'Termos de Uso'
    },
    'en': {
        // Header
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.cases': 'Cases',
        'nav.contact': 'Contact',
        
        // Hero Slides
        'hero.title1': 'Transform Your Business with Digital Marketing',
        'hero.desc1': 'Personalized strategies that generate real results. Increase your sales, strengthen your brand and win new customers with excellence and calm in every project.',
        'hero.cta1': 'Get Started',
        'hero.cta2': 'Our Services',
        'hero.title2': 'Strategies that Generate Real Sales',
        'hero.desc2': 'Optimized paid traffic campaigns, strategic SEO and marketing automation. We transform investment into measurable results and sustainable growth.',
        'hero.cta3': 'View Success Cases',
        'hero.cta4': 'Talk to Specialist',
        'hero.title3': 'Your Strong Brand on Social Media',
        'hero.desc3': 'Complete social media management with strategic content, impactful design and authentic engagement. Build a loyal community and increase your digital presence.',
        'hero.cta5': 'Social Media Management',
        'hero.cta6': 'Schedule Meeting',
        'hero.title4': 'Websites that Convert Visitors into Customers',
        'hero.desc4': 'Development of responsive websites, high-conversion landing pages and complete e-commerce. Modern design, optimized performance and impeccable user experience.',
        'hero.cta7': 'Create My Website',
        'hero.cta8': 'View Portfolio',
        'hero.title5': 'Digital Marketing with Purpose and Results',
        'hero.desc5': 'More than an agency, we are your strategic partner. We work with transparency, dedication and total focus on growing your business. Excellence and calm in every project.',
        'hero.cta9': 'Meet OWLIN',
        'hero.cta10': 'Become Our Client',
        
        // About
        'about.title': 'Meet OWLIN',
        'about.subtitle': 'More than an agency, we are your strategic growth partner',
        'about.who': 'Who We Are',
        'about.values': 'Our Values',
        
        // Values
        'value.excellence': 'Excellence',
        'value.excellence.desc': 'With a meticulous eye, we seek perfection in every detail and deliver the highest standard in every project, ensuring results that exceed expectations.',
        'value.strategy': 'Strategy',
        'value.strategy.desc': 'Guided by a sharp vision, we plan every step with intelligence and organization. Our process is focused, efficient and designed to generate impact without stress.',
        'value.transparency': 'Transparency',
        'value.transparency.desc': 'We believe in clear, honest and continuous communication. No surprises, we build trusting relationships based on truth and mutual commitment.',
        'value.innovation': 'Innovation',
        'value.innovation.desc': 'Always ahead, we explore cutting-edge trends and technologies. Our creativity combines with expertise to develop innovative solutions that position your brand in the future.',
        'value.focus': 'Focus',
        'value.focus.desc': 'Our purpose is the growth of your business. Based on metrics and ROI analysis, we ensure that every investment translates into tangible performance and impact.',
        'value.partnership': 'Partnership',
        'value.partnership.desc': 'Your success is our greatest goal. We work side by side, with dedication and commitment, as true strategic partners who celebrate every achievement.',
        
        // Services
        'services.title': 'Our Services',
        'services.subtitle': 'Complete digital marketing solutions to transform your business',
        'services.learnmore': 'Learn More',
        
        // Service names and descriptions
        'service.marketing': 'Strategic Digital Marketing',
        'service.marketing.desc': 'Complete and personalized digital marketing strategies to increase your online presence, win new customers and generate consistent and measurable results.',
        'service.social': 'Social Media Management',
        'service.social.desc': 'Strategic content creation, complete editorial planning and professional management of your social media to engage your audience and build a loyal community.',
        'service.ads': 'Paid Traffic',
        'service.ads.desc': 'Optimized campaigns on Google Ads, Meta Ads (Facebook/Instagram) and TikTok Ads to generate qualified leads, increase your sales and maximize return on investment.',
        'service.web': 'Web Development & E-commerce',
        'service.web.desc': 'Responsive websites, high-conversion landing pages and complete e-commerce developed with focus on performance, user experience and sales results.',
        'service.seo': 'SEO & Content',
        'service.seo.desc': 'Search engine optimization and strategic content production to position your brand at the top of Google and attract qualified organic traffic.',
        'service.branding': 'Branding & Visual Identity',
        'service.branding.desc': 'Creation and development of complete visual identity, naming, brand positioning and strategies to strengthen your market presence.',
        'service.audiovisual': 'Audiovisual Production',
        'service.audiovisual.desc': 'Professional photo sessions and event videos such as weddings, parties, corporate events and much more to eternalize your special moments.',
        'service.analytics': 'Analytics & Business Intelligence',
        'service.analytics.desc': 'Advanced monitoring, metrics analysis and intelligent reports to optimize your strategies and maximize return on investment.',
        'service.consulting': 'Digital Consulting',
        'service.consulting.desc': 'Specialized consulting in digital marketing, process analysis, opportunity diagnosis and development of personalized growth strategies.',
        
        // Service features
        'feature.planning': 'Strategic Planning',
        'feature.market': 'Market Analysis',
        'feature.personas': 'Persona Definition',
        'feature.content': 'Content Creation',
        'feature.design': 'Post Design',
        'feature.community': 'Community Management',
        'feature.google': 'Google Ads',
        'feature.meta': 'Meta Ads (Facebook/Instagram)',
        'feature.tiktok': 'TikTok Ads',
        'feature.sites': 'Institutional Websites',
        'feature.landing': 'Landing Pages',
        'feature.stores': 'Online Stores',
        'feature.seo': 'On-Page and Off-Page SEO',
        'feature.contentmkt': 'Content Marketing',
        'feature.blog': 'Corporate Blog',
        'feature.logo': 'Logo Creation',
        'feature.brand': 'Brand Manual',
        'feature.positioning': 'Positioning',
        'feature.photo': 'Professional Photography',
        'feature.video': 'Event Videos',
        'feature.coverage': 'Complete Coverage',
        'feature.analytics': 'Google Analytics',
        'feature.dashboards': 'Custom Dashboards',
        'feature.reports': 'Performance Reports',
        'feature.diagnostic': 'Digital Diagnostic',
        'feature.action': 'Action Plan',
        'feature.mentoring': 'Strategic Mentoring',
        // Cases
        'cases.title': 'Our Success Cases',
        'cases.subtitle': 'Real results that transformed businesses',
        'cases.filter.all': 'All',
        'cases.filter.social': 'Social Media',
        'cases.filter.ecommerce': 'E-commerce',
        'cases.filter.branding': 'Branding',
        'cases.filter.ads': 'Paid Traffic',
        'cases.filter.web': 'Development',
        
        // Process
        'process.title': 'Our Work Process',
        'process.subtitle': 'A proven method to transform your business',
        'process.step1': 'Discovery',
        'process.step1.desc': 'We deeply understand your business, goals, target audience and current challenges.',
        'process.step2': 'Strategy',
        'process.step2.desc': 'We develop a personalized strategic plan with clear goals and defined KPIs.',
        'process.step3': 'Creation',
        'process.step3.desc': 'We produce all the content, design and materials needed to execute the strategy.',
        'process.step4': 'Implementation',
        'process.step4.desc': 'We put everything into practice with impeccable execution and attention to detail.',
        'process.step5': 'Optimization',
        'process.step5.desc': 'We monitor results and make continuous adjustments to maximize performance.',
        'process.step6': 'Results',
        'process.step6.desc': 'We deliver detailed reports and celebrate the growth of your business.',
        
        // Process Deliverables
        'process.step1.item1': 'Briefing Meeting',
        'process.step1.item2': 'Market Analysis',
        'process.step1.item3': 'Persona Definition',
        'process.step2.item1': 'Marketing Plan',
        'process.step2.item2': 'Goal Setting',
        'process.step2.item3': 'Action Timeline',
        'process.step3.item1': 'Content Creation',
        'process.step3.item2': 'Material Design',
        'process.step3.item3': 'Technical Development',
        'process.step4.item1': 'Campaign Launch',
        'process.step4.item2': 'Content Publishing',
        'process.step4.item3': 'Channel Activation',
        'process.step5.item1': 'Metrics Analysis',
        'process.step5.item2': 'A/B Testing',
        'process.step5.item3': 'Strategic Adjustments',
        'process.step6.item1': 'Monthly Reports',
        'process.step6.item2': 'Results Meetings',
        'process.step6.item3': 'Future Planning',
        
        // About - Who We Are (full text)
        'about.text1': 'At OWLIN, we don\'t just create digital presence; we position it. Operating since 2019, we are the perfect fusion between a complete digital marketing agency and an excellence audiovisual production company, with 360° solutions for brands, companies, infoproducers, freelancers, churches and podcasts seeking leadership and online authority.',
        'about.text2': 'Our essence lies in the <strong>VISION THAT POSITIONS</strong>. With the sharp eye of the owl, we act with precision and strategy to:',
        'about.text3.title': 'REBRANDING AND VISUAL IDENTITY:',
        'about.text3': 'We are a reference in creating impactful visual identities and rebranding strategies that reconnect your brand to the future, ensuring a professional and memorable image.',
        'about.text4.title': 'INTEGRATED DIGITAL STRATEGY:',
        'about.text4': 'We connect your purpose, strategy and performance. Our team includes certified paid traffic managers (Meta, Google, TikTok), who drive real results, as well as social media specialists (Instagram, Facebook, TikTok) to engage and build communities.',
        'about.text5.title': 'HIGH-LEVEL AUDIOVISUAL PRODUCTION:',
        'about.text5': 'We elevate your communication with professional photography, videomaker for strategic content and quality live broadcasts that capture attention and tell your story.',
        'about.text6.title': 'WEB DEVELOPMENT:',
        'about.text6': 'We create corporate websites and optimized landing pages, transforming visitors into customers with intuitive design and focus on conversion.',
        'about.text7.title': 'SPECIALIZED CONSULTING:',
        'about.text7': 'We offer strategic and personalized guidance, focused on results, so that each project reaches its maximum potential.',
        'about.text8': 'At OWLIN, each project is an opportunity to demonstrate our creative and technical excellence. We transform ideas into solutions ready to impact and consolidate your brand in the digital landscape.',
        'about.text9': '<strong>Ready to have a VISION THAT POSITIONS your brand in the right place?</strong> Check out our cases and discover how we can make a difference for you!',
        
        // Portfolio Page
        'portfolio.title': 'Our Portfolio',
        'portfolio.subtitle': 'Discover some of the projects we developed with excellence and dedication for our clients',
        'portfolio.visit': 'Visit Website',
        'portfolio.ff.type': 'Automotive Studio',
        'portfolio.ff.desc': 'Modern and professional website for an automotive studio, with elegant design, intuitive navigation and optimized for customer conversion.',
        'portfolio.ip.type': 'Health & Dentistry',
        'portfolio.ip.desc': 'Complete website for dental clinic with presentation of services, professional team and scheduling system, conveying trust and professionalism.',
        'portfolio.tag.web': 'Web Development',
        'portfolio.tag.responsive': 'Responsive Design',
        'portfolio.tag.seo': 'SEO',
        'portfolio.tag.uiux': 'UI/UX Design',
        'portfolio.tag.optimization': 'Optimization',
        'portfolio.cta.title': 'Transform Your Digital Presence',
        'portfolio.cta.subtitle': 'We offer complete solutions to take your business to the next level',
        'portfolio.cta.web': 'Web Development',
        'portfolio.cta.web.desc': 'Modern, responsive websites optimized for conversion',
        'portfolio.cta.marketing': 'Digital Marketing',
        'portfolio.cta.marketing.desc': 'Personalized strategies to increase your visibility',
        'portfolio.cta.social': 'Social Media Management',
        'portfolio.cta.social.desc': 'Strategic content that engages and converts',
        'portfolio.cta.ads': 'Paid Traffic',
        'portfolio.cta.ads.desc': 'Optimized campaigns on Google, Meta and TikTok Ads',
        'portfolio.cta.branding': 'Branding',
        'portfolio.cta.branding.desc': 'Visual identity that highlights your brand in the market',
        'portfolio.cta.audiovisual': 'Audiovisual Production',
        'portfolio.cta.audiovisual.desc': 'Professional photos and videos for your communication',
        'portfolio.final.title': 'Ready to have a project like these?',
        'portfolio.final.subtitle': 'Contact us and let\'s turn your idea into reality!',
        'portfolio.final.whatsapp': 'Chat on WhatsApp',
        'portfolio.final.quote': 'Request Quote',
        
        // Blog
        'blog.title': 'Blog & Content',
        'blog.subtitle': 'Tips, trends and insights about digital marketing',
        'blog.readmore': 'Read more',
        'blog.category.marketing': 'Digital Marketing',
        'blog.category.social': 'Social Media',
        'blog.category.ecommerce': 'E-commerce',
        'blog.post1.title': 'Digital Marketing Trends in 2025',
        'blog.post1.excerpt': 'Artificial intelligence, personalization and immersive experiences lead the transformations in digital marketing for this year.',
        'blog.post2.title': 'How Social Media Transforms Businesses',
        'blog.post2.excerpt': 'Brazilian companies are increasingly investing in social media strategies to reach new audiences and increase sales.',
        'blog.post3.title': 'The Future of Brazilian E-commerce',
        'blog.post3.excerpt': 'E-commerce sector in Brazil registers significant growth driven by technological innovations and changes in consumer behavior.',
        
        // Contact
        'contact.title': 'Get in Touch',
        'contact.subtitle': 'Ready to transform your business? Let\'s talk!',
        'contact.form.title': 'Or Request a Quote',
        'contact.form.desc': 'Fill out the form below and we will contact you soon!',
        'contact.form.name': 'Your name',
        'contact.form.email': 'Your email',
        'contact.form.phone': 'Your phone (optional)',
        'contact.form.message': 'Tell us about your project...',
        'contact.form.submit': 'Send Message',
        'contact.info.title': 'Contact Us',
        'contact.info.desc': 'Get in touch through our channels!',
        'contact.whatsapp': 'Get in touch!',
        'contact.instagram': 'Follow us on Instagram!',
        'contact.cta.title': 'Quick Service',
        'contact.cta.desc': 'Talk to us now on WhatsApp and get an immediate response!',
        'contact.cta.btn': 'Chat on WhatsApp',
        
        // Footer
        'footer.services': 'Services',
        'footer.company': 'Company',
        'footer.rights': '© 2025 OWLIN - Digital Marketing Agency. All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Use'
    },
    'es': {
        // Header
        'nav.home': 'Inicio',
        'nav.about': 'Nosotros',
        'nav.services': 'Servicios',
        'nav.portfolio': 'Portafolio',
        'nav.cases': 'Casos',
        'nav.contact': 'Contacto',
        
        // Hero Slides
        'hero.title1': 'Transforma tu Negocio con Marketing Digital',
        'hero.desc1': 'Estrategias personalizadas que generan resultados reales. Aumenta tus ventas, fortalece tu marca y conquista nuevos clientes con excelencia y calma en cada proyecto.',
        'hero.cta1': 'Comenzar Ahora',
        'hero.cta2': 'Nuestros Servicios',
        'hero.title2': 'Estrategias que Generan Ventas Reales',
        'hero.desc2': 'Campañas de tráfico pago optimizadas, SEO estratégico y automatización de marketing. Transformamos inversión en resultados medibles y crecimiento sostenible.',
        'hero.cta3': 'Ver Casos de Éxito',
        'hero.cta4': 'Hablar con Especialista',
        'hero.title3': 'Tu Marca Fuerte en Redes Sociales',
        'hero.desc3': 'Gestión completa de redes sociales con contenido estratégico, diseño impactante y engagement auténtico. Construye una comunidad fiel y aumenta tu presencia digital.',
        'hero.cta5': 'Gestión de Redes',
        'hero.cta6': 'Agendar Reunión',
        'hero.title4': 'Sitios que Convierten Visitantes en Clientes',
        'hero.desc4': 'Desarrollo de sitios responsivos, landing pages de alta conversión y e-commerce completo. Diseño moderno, rendimiento optimizado y experiencia de usuario impecable.',
        'hero.cta7': 'Crear Mi Sitio',
        'hero.cta8': 'Ver Portafolio',
        'hero.title5': 'Marketing Digital con Propósito y Resultados',
        'hero.desc5': 'Más que una agencia, somos tu socio estratégico. Trabajamos con transparencia, dedicación y enfoque total en el crecimiento de tu negocio. Excelencia y calma en cada proyecto.',
        'hero.cta9': 'Conocer OWLIN',
        'hero.cta10': 'Ser Nuestro Cliente',
        
        // About
        'about.title': 'Conoce OWLIN',
        'about.subtitle': 'Más que una agencia, somos tu socio estratégico de crecimiento',
        'about.who': 'Quiénes Somos',
        'about.values': 'Nuestros Valores',
        
        // Values
        'value.excellence': 'Excelencia',
        'value.excellence.desc': 'Con una mirada minuciosa, buscamos la perfección en cada detalle y entregamos el más alto estándar en cada proyecto, garantizando resultados que superan expectativas.',
        'value.strategy': 'Estrategia',
        'value.strategy.desc': 'Guiados por una visión aguda, planificamos cada paso con inteligencia y organización. Nuestro proceso es enfocado, eficiente y diseñado para generar impacto sin estrés.',
        'value.transparency': 'Transparencia',
        'value.transparency.desc': 'Creemos en la comunicación clara, honesta y continua. Sin sorpresas, construimos relaciones de confianza basadas en la verdad y el compromiso mutuo.',
        'value.innovation': 'Innovación',
        'value.innovation.desc': 'Siempre adelante, exploramos tendencias y tecnologías de punta. Nuestra creatividad se une a la experiencia para desarrollar soluciones innovadoras que posicionan tu marca en el futuro.',
        'value.focus': 'Enfoque',
        'value.focus.desc': 'Nuestro propósito es el crecimiento de tu negocio. Con base en métricas y análisis de ROI, garantizamos que cada inversión se traduzca en desempeño e impacto tangible.',
        'value.partnership': 'Alianza',
        'value.partnership.desc': 'Tu éxito es nuestro mayor objetivo. Trabajamos lado a lado, con dedicación y compromiso, como verdaderos socios estratégicos que celebran cada logro.',
        
        // Services
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Soluciones completas de marketing digital para transformar tu negocio',
        'services.learnmore': 'Saber Más',
        
        // Service names and descriptions
        'service.marketing': 'Marketing Digital Estratégico',
        'service.marketing.desc': 'Estrategias completas y personalizadas de marketing digital para aumentar tu presencia online, conquistar nuevos clientes y generar resultados consistentes y medibles.',
        'service.social': 'Gestión de Redes Sociales',
        'service.social.desc': 'Creación de contenido estratégico, planificación editorial completa y gestión profesional de tus redes sociales para enganchar a tu público y construir una comunidad fiel.',
        'service.ads': 'Tráfico Pago',
        'service.ads.desc': 'Campañas optimizadas en Google Ads, Meta Ads (Facebook/Instagram) y TikTok Ads para generar leads calificados, aumentar tus ventas y maximizar el retorno sobre inversión.',
        'service.web': 'Desarrollo Web & E-commerce',
        'service.web.desc': 'Sitios responsivos, landing pages de alta conversión y e-commerce completo desarrollados con enfoque en rendimiento, experiencia del usuario y resultados de ventas.',
        'service.seo': 'SEO & Contenido',
        'service.seo.desc': 'Optimización para motores de búsqueda y producción de contenido estratégico para posicionar tu marca en la cima de Google y atraer tráfico orgánico calificado.',
        'service.branding': 'Branding & Identidad Visual',
        'service.branding.desc': 'Creación y desarrollo de identidad visual completa, naming, posicionamiento de marca y estrategias para fortalecer tu presencia en el mercado.',
        'service.audiovisual': 'Producción Audiovisual',
        'service.audiovisual.desc': 'Sesiones fotográficas profesionales y videos de eventos como bodas, fiestas, eventos corporativos y mucho más para eternizar tus momentos especiales.',
        'service.analytics': 'Analytics & Business Intelligence',
        'service.analytics.desc': 'Monitoreo avanzado, análisis de métricas e informes inteligentes para optimizar tus estrategias y maximizar el retorno sobre inversión.',
        'service.consulting': 'Consultoría Digital',
        'service.consulting.desc': 'Consultoría especializada en marketing digital, análisis de procesos, diagnóstico de oportunidades y desarrollo de estrategias personalizadas de crecimiento.',
        
        // Service features
        'feature.planning': 'Planificación Estratégica',
        'feature.market': 'Análisis de Mercado',
        'feature.personas': 'Definición de Personas',
        'feature.content': 'Creación de Contenido',
        'feature.design': 'Diseño de Posts',
        'feature.community': 'Gestión de Comunidad',
        'feature.google': 'Google Ads',
        'feature.meta': 'Meta Ads (Facebook/Instagram)',
        'feature.tiktok': 'TikTok Ads',
        'feature.sites': 'Sitios Institucionales',
        'feature.landing': 'Landing Pages',
        'feature.stores': 'Tiendas Virtuales',
        'feature.seo': 'SEO On-Page y Off-Page',
        'feature.contentmkt': 'Marketing de Contenido',
        'feature.blog': 'Blog Corporativo',
        'feature.logo': 'Creación de Logo',
        'feature.brand': 'Manual de Marca',
        'feature.positioning': 'Posicionamiento',
        'feature.photo': 'Fotografía Profesional',
        'feature.video': 'Videos de Eventos',
        'feature.coverage': 'Cobertura Completa',
        'feature.analytics': 'Google Analytics',
        'feature.dashboards': 'Dashboards Personalizados',
        'feature.reports': 'Informes de Rendimiento',
        'feature.diagnostic': 'Diagnóstico Digital',
        'feature.action': 'Plan de Acción',
        'feature.mentoring': 'Mentoría Estratégica',
        // Cases
        'cases.title': 'Nuestros Casos de Éxito',
        'cases.subtitle': 'Resultados reales que transformaron negocios',
        'cases.filter.all': 'Todos',
        'cases.filter.social': 'Redes Sociales',
        'cases.filter.ecommerce': 'E-commerce',
        'cases.filter.branding': 'Branding',
        'cases.filter.ads': 'Tráfico Pago',
        'cases.filter.web': 'Desarrollo',
        
        // Process
        'process.title': 'Nuestro Proceso de Trabajo',
        'process.subtitle': 'Un método comprobado para transformar tu negocio',
        'process.step1': 'Descubrimiento',
        'process.step1.desc': 'Entendemos profundamente tu negocio, objetivos, público objetivo y desafíos actuales.',
        'process.step2': 'Estrategia',
        'process.step2.desc': 'Desarrollamos un plan estratégico personalizado con metas claras y KPIs definidos.',
        'process.step3': 'Creación',
        'process.step3.desc': 'Producimos todo el contenido, diseño y materiales necesarios para ejecutar la estrategia.',
        'process.step4': 'Implementación',
        'process.step4.desc': 'Ponemos todo en práctica con ejecución impecable y atención a los detalles.',
        'process.step5': 'Optimización',
        'process.step5.desc': 'Monitoreamos resultados y hacemos ajustes continuos para maximizar el rendimiento.',
        'process.step6': 'Resultados',
        'process.step6.desc': 'Entregamos informes detallados y celebramos el crecimiento de tu negocio.',
        
        // Process Deliverables
        'process.step1.item1': 'Reunión de Briefing',
        'process.step1.item2': 'Análisis de Mercado',
        'process.step1.item3': 'Definición de Personas',
        'process.step2.item1': 'Plan de Marketing',
        'process.step2.item2': 'Definición de Metas',
        'process.step2.item3': 'Cronograma de Acciones',
        'process.step3.item1': 'Creación de Contenido',
        'process.step3.item2': 'Diseño de Materiales',
        'process.step3.item3': 'Desarrollo Técnico',
        'process.step4.item1': 'Lanzamiento de Campañas',
        'process.step4.item2': 'Publicación de Contenido',
        'process.step4.item3': 'Activación de Canales',
        'process.step5.item1': 'Análisis de Métricas',
        'process.step5.item2': 'Pruebas A/B',
        'process.step5.item3': 'Ajustes Estratégicos',
        'process.step6.item1': 'Informes Mensuales',
        'process.step6.item2': 'Reuniones de Resultados',
        'process.step6.item3': 'Planificación Futura',
        
        // About - Who We Are (full text)
        'about.text1': 'En OWLIN, no solo creamos presencia digital; la posicionamos. Operando desde 2019, somos la fusión perfecta entre una agencia de marketing digital completa y una productora audiovisual de excelencia, con soluciones 360° para marcas, empresas, infoproductores, profesionales independientes, iglesias y podcasts que buscan liderazgo y autoridad online.',
        'about.text2': 'Nuestra esencia está en la <strong>VISIÓN QUE POSICIONA</strong>. Con la mirada aguda del búho, actuamos con precisión y estrategia para:',
        'about.text3.title': 'REBRANDING E IDENTIDAD VISUAL:',
        'about.text3': 'Somos referencia en la creación de identidades visuales impactantes y estrategias de rebranding que reconectan tu marca con el futuro, garantizando una imagen profesional y memorable.',
        'about.text4.title': 'ESTRATEGIA DIGITAL INTEGRADA:',
        'about.text4': 'Conectamos tu propósito, estrategia y rendimiento. Nuestro equipo cuenta con gestores de tráfico pago certificados (Meta, Google, TikTok), que impulsan resultados reales, además de especialistas en redes sociales (Instagram, Facebook, TikTok) para enganchar y construir comunidades.',
        'about.text5.title': 'PRODUCCIÓN AUDIOVISUAL DE ALTO NIVEL:',
        'about.text5': 'Elevamos tu comunicación con fotografía profesional, videomaker para contenido estratégico y transmisiones en vivo de calidad que capturan la atención y cuentan tu historia.',
        'about.text6.title': 'DESARROLLO WEB:',
        'about.text6': 'Creamos sitios web corporativos y landing pages optimizadas, transformando visitantes en clientes con diseño intuitivo y enfoque en conversión.',
        'about.text7.title': 'CONSULTORÍA ESPECIALIZADA:',
        'about.text7': 'Ofrecemos orientación estratégica y personalizada, con enfoque en resultados, para que cada proyecto alcance su máximo potencial.',
        'about.text8': 'En OWLIN, cada proyecto es una oportunidad de demostrar nuestra excelencia creativa y técnica. Transformamos ideas en soluciones listas para impactar y consolidar tu marca en el escenario digital.',
        'about.text9': '<strong>¿Listo para tener una VISIÓN QUE POSICIONA tu marca en el lugar correcto?</strong> ¡Conoce nuestros casos y descubre cómo podemos hacer la diferencia para ti!',
        
        // Portfolio Page
        'portfolio.title': 'Nuestro Portafolio',
        'portfolio.subtitle': 'Conoce algunos de los proyectos que desarrollamos con excelencia y dedicación para nuestros clientes',
        'portfolio.visit': 'Visitar Sitio',
        'portfolio.ff.type': 'Studio Automotriz',
        'portfolio.ff.desc': 'Sitio web moderno y profesional para un studio automotriz, con diseño elegante, navegación intuitiva y optimizado para conversión de clientes.',
        'portfolio.ip.type': 'Salud & Odontología',
        'portfolio.ip.desc': 'Sitio web completo para clínica odontológica con presentación de servicios, equipo profesional y sistema de agendamiento, transmitiendo confianza y profesionalismo.',
        'portfolio.tag.web': 'Desarrollo Web',
        'portfolio.tag.responsive': 'Diseño Responsivo',
        'portfolio.tag.seo': 'SEO',
        'portfolio.tag.uiux': 'Diseño UI/UX',
        'portfolio.tag.optimization': 'Optimización',
        'portfolio.cta.title': 'Transforma tu Presencia Digital',
        'portfolio.cta.subtitle': 'Ofrecemos soluciones completas para llevar tu negocio al siguiente nivel',
        'portfolio.cta.web': 'Desarrollo Web',
        'portfolio.cta.web.desc': 'Sitios modernos, responsivos y optimizados para conversión',
        'portfolio.cta.marketing': 'Marketing Digital',
        'portfolio.cta.marketing.desc': 'Estrategias personalizadas para aumentar tu visibilidad',
        'portfolio.cta.social': 'Gestión de Redes Sociales',
        'portfolio.cta.social.desc': 'Contenido estratégico que engancha y convierte',
        'portfolio.cta.ads': 'Tráfico Pago',
        'portfolio.cta.ads.desc': 'Campañas optimizadas en Google, Meta y TikTok Ads',
        'portfolio.cta.branding': 'Branding',
        'portfolio.cta.branding.desc': 'Identidad visual que destaca tu marca en el mercado',
        'portfolio.cta.audiovisual': 'Producción Audiovisual',
        'portfolio.cta.audiovisual.desc': 'Fotos y videos profesionales para tu comunicación',
        'portfolio.final.title': '¿Listo para tener un proyecto como estos?',
        'portfolio.final.subtitle': '¡Contáctanos y transformemos tu idea en realidad!',
        'portfolio.final.whatsapp': 'Hablar por WhatsApp',
        'portfolio.final.quote': 'Solicitar Presupuesto',
        
        // Blog
        'blog.title': 'Blog & Contenido',
        'blog.subtitle': 'Tips, tendencias e insights sobre marketing digital',
        'blog.readmore': 'Leer más',
        'blog.category.marketing': 'Marketing Digital',
        'blog.category.social': 'Redes Sociales',
        'blog.category.ecommerce': 'E-commerce',
        'blog.post1.title': 'Tendencias del Marketing Digital en 2025',
        'blog.post1.excerpt': 'Inteligencia artificial, personalización y experiencias inmersivas lideran las transformaciones en el marketing digital para este año.',
        'blog.post2.title': 'Cómo las Redes Sociales Transforman Negocios',
        'blog.post2.excerpt': 'Empresas brasileñas invierten cada vez más en estrategias de redes sociales para alcanzar nuevos públicos y aumentar ventas.',
        'blog.post3.title': 'El Futuro del E-commerce brasileño',
        'blog.post3.excerpt': 'Sector de comercio electrónico en Brasil registra crecimiento expresivo impulsado por innovaciones tecnológicas y cambios en el comportamiento del consumidor.',
        
        // Contact
        'contact.title': 'Contáctanos',
        'contact.subtitle': '¿Listo para transformar tu negocio? ¡Hablemos!',
        'contact.form.title': 'O Solicita un Presupuesto',
        'contact.form.desc': '¡Completa el formulario y te contactaremos pronto!',
        'contact.form.name': 'Tu nombre',
        'contact.form.email': 'Tu email',
        'contact.form.phone': 'Tu teléfono (opcional)',
        'contact.form.message': 'Cuéntanos sobre tu proyecto...',
        'contact.form.submit': 'Enviar Mensaje',
        'contact.info.title': 'Contáctanos',
        'contact.info.desc': '¡Comunícate por nuestros canales!',
        'contact.whatsapp': '¡Contáctanos!',
        'contact.instagram': '¡Síguenos en Instagram!',
        'contact.cta.title': 'Atención Rápida',
        'contact.cta.desc': '¡Habla con nosotros ahora por WhatsApp y recibe una respuesta inmediata!',
        'contact.cta.btn': 'Hablar por WhatsApp',
        
        // Footer
        'footer.services': 'Servicios',
        'footer.company': 'Empresa',
        'footer.rights': '© 2025 OWLIN - Agencia de Marketing Digital. Todos los derechos reservados.',
        'footer.privacy': 'Política de Privacidad',
        'footer.terms': 'Términos de Uso'
    }
};

// Detecta idioma preferido
function detectLanguage() {
    // 1. Verifica se há preferência salva
    const saved = localStorage.getItem('owlin-lang');
    if (saved && translations[saved]) return saved;
    
    // 2. Verifica Accept-Language do navegador
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Mapeia variações
    if (browserLang.startsWith('pt')) return 'pt-BR';
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('en')) return 'en';
    
    // 3. Fallback para português
    return 'pt-BR';
}

// Aplica traduções
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            // Se o texto contém HTML (como <strong>), usa innerHTML
            if (t[key].includes('<')) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
    
    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    // Atualiza lang do HTML
    document.documentElement.lang = lang === 'pt-BR' ? 'pt-BR' : lang;
    
    // Atualiza botões de idioma (novo sistema com bandeiras)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        // Verifica o onclick para identificar o idioma do botão
        const onclick = btn.getAttribute('onclick');
        if (onclick && onclick.includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });
    
    // Fallback para seletor antigo (compatibilidade)
    const selector = document.getElementById('lang-selector');
    if (selector) selector.value = lang;
    
    // Salva preferência
    localStorage.setItem('owlin-lang', lang);
}

// Troca idioma
function changeLanguage(lang) {
    applyTranslations(lang);
}

// Inicializa
document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLanguage();
    applyTranslations(lang);
});
