const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
   
    const icon = menuToggle.querySelector('i');
    if(navMenu.classList.contains('active')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.querySelector('i').className = 'fas fa-bars';
    });
});

const canvas = document.getElementById('tech-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particlesArray = [];
const numberOfParticles = 75; 

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1; 
        this.speedX = (Math.random() - 0.5) * 0.5; 
        this.speedY = (Math.random() - 0.5) * 0.5; 
    }

    draw() {
        ctx.fillStyle = 'rgba(0, 242, 254, 0.7)'; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
    }
}

function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}
init();

function connectParticles() {
    let maxDistance = 120; 
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                
                let opacity = 1 - (distance / maxDistance);
                ctx.strokeStyle = `rgba(79, 172, 254, ${opacity * 0.15})`; 
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    
    connectParticles();
    requestAnimationFrame(animate);
}
animate();

const translations = {
    pt: {
        "nav.about": "Sobre",
        "nav.studies": "Estudos",
        "nav.experience": "Experiência",
        "nav.skills": "Interesses & Idiomas",
        "nav.contact": "Contato",
        "hero.greeting": "Seja bem vindo...",
        "hero.subtitle": "Desenvolvedor Full Stack / QA",
        "hero.description": "Profissional focado em criar soluções tecnológicas inovadoras, eficientes e úteis para o dia a dia, buscando reconhecer a necessidade do cliente e me aprofundar na análise e resolução das problemáticas, oferecendo soluções para facilitar sua vida",
        "hero.contactBtn": "Entrar em Contato",
        "hero.experienceBtn": "Ver Experiência",
        "studies.title": "Estudos & Formação",
        "studies.item1.date": "2025 - Cursando",
        "studies.item1.title": "Bacharelado em Tecnologia da Informação",
        "studies.item1.institution": "Universidade Univesp",
        "studies.item1.desc": "Foco em arquitetura de sistemas, desenvolvimento ágil, estruturas de dados e desenvolvimento web.",
        "studies.item2.date": "2025",
        "studies.item2.title": "Engenharia Ambiental",
        "studies.item2.institution": "Universidade da Cidade de São Paulo",
        "studies.item3.date": "2026",
        "studies.item3.title": "Quality Assurance (QA)",
        "studies.item3.desc": "Testes de qualidade de software, suas especificidades e ferramentas como o Selenium para testes automatizados Web com Python.",
        "studies.item4.date": "2025",
        "studies.item4.title": "Desenvolvimento Backend Java/Spring",
        "studies.item4.institution": "DIO",
        "studies.item4.desc": "Cursos cobrindo Java, ecossistema Spring (Spring Boot, Spring Data JPA, Spring Security), APIs RESTful, bancos de dados relacionais com o MySQL e PostgreSQL, não-relacionais com o MongoDB, Docker e versionamento com GIT.",
        "studies.item5.date": "2025",
        "studies.item5.title": "Desenvolvimento Front-End",
        "studies.item5.institution": "DIO",
        "studies.item5.desc": "Desenvolvimento de sites e interfaces responsivas utilizando HTML, CSS, JavaScript modernos e frameworks. Integração com APIs e metodologias ágeis (Scrum).",
        "exp.title": "Experiência Profissional",
        "exp.item1.title": "Desenvolvimento de Sites",
        "exp.item1.desc": "Desenvolvimento de sites e interfaces responsivas utilizando HTML, CSS, JavaScript modernos e frameworks. Integração com APIs e metodologias ágeis (Scrum).",
        "exp.item2.date": "2022 - 2024",
        "exp.item2.title": "Montagem de computadores",
        "exp.item2.desc": "Montagem e manutenção de computadores, instalação de sistemas operacionais e configuração de Hackintosh com MacOS, Linux e Windows em bootloader opencore. Configuração de tablets e celulares android para Linux e ambientes de desenvolvimento adaptados nesses dispositivos.",
        "skills.languagesTitle": "Idiomas",
        "skills.portuguese": "Português",
        "skills.portugueseLevel": "Nativo",
        "skills.english": "Inglês",
        "skills.englishLevel": "Intermediário",
        "skills.spanish": "Espanhol",
        "skills.spanishLevel": "Fluente",
        "skills.interestsTitle": "Áreas de Interesse",
        "interests.backend": "Desenvolvimento Backend",
        "interests.frontend": "Desenvolvimento Frontend",
        "interests.devops": "DevOps",
        "interests.ai": "Inteligência Artificial",
        "interests.qa": "Quality Assurance (QA)",
        "interests.cloud": "Cloud Computing",
        "interests.cybersecurity": "Cybersecurity",
        "interests.infrastructure": "Infraestrutura e suporte (TI)",
        "contact.title": "Vamos Conversar?",
        "contact.text": "Estou sempre aberto a novos projetos, oportunidades e parcerias. Sinta-se à vontade para se conectar comigo através de qualquer uma das redes abaixo, whatsapp ou enviando um e-mail!",
        "footer.text": "© 2026 - Desenvolvido por João Luiz da Conceição. Todos os direitos reservados."
    },
    en: {
        "nav.about": "About",
        "nav.studies": "Education",
        "nav.experience": "Experience",
        "nav.skills": "Skills & Languages",
        "nav.contact": "Contact",
        "hero.greeting": "Welcome...",
        "hero.subtitle": "Full Stack Developer / QA",
        "hero.description": "Professional focused on creating innovative, efficient, and useful technological solutions for everyday life, seeking to recognize client needs and delve into the analysis and resolution of problems, offering solutions to make your life easier.",
        "hero.contactBtn": "Get in Touch",
        "hero.experienceBtn": "View Experience",
        "studies.title": "Education & Background",
        "studies.item1.date": "2025 - In Progress",
        "studies.item1.title": "Bachelor's in Information Technology",
        "studies.item1.institution": "Universidade Univesp",
        "studies.item1.desc": "Focus on system architecture, agile development, data structures, and web development.",
        "studies.item2.date": "2025",
        "studies.item2.title": "Environmental Engineering",
        "studies.item2.institution": "Universidade da Cidade de São Paulo",
        "studies.item3.date": "2026",
        "studies.item3.title": "Quality Assurance (QA)",
        "studies.item3.desc": "Software quality testing, its specificities, and tools such as Selenium for automated web testing with Python.",
        "studies.item4.date": "2025",
        "studies.item4.title": "Backend Development Java/Spring",
        "studies.item4.institution": "DIO",
        "studies.item4.desc": "Courses covering Java, Spring ecosystem (Spring Boot, Spring Data JPA, Spring Security), RESTful APIs, relational databases with MySQL and PostgreSQL, non-relational with MongoDB, Docker, and versioning with GIT.",
        "studies.item5.date": "2025",
        "studies.item5.title": "Front-End Development",
        "studies.item5.institution": "DIO",
        "studies.item5.desc": "Development of responsive websites and interfaces using modern HTML, CSS, JavaScript, and frameworks. Integration with APIs and agile methodologies (Scrum).",
        "exp.title": "Professional Experience",
        "exp.item1.title": "Web Development",
        "exp.item1.desc": "Development of responsive websites and interfaces using modern HTML, CSS, JavaScript, and frameworks. Integration with APIs and agile methodologies (Scrum).",
        "exp.item2.date": "2022 - 2024",
        "exp.item2.title": "Computer Assembly",
        "exp.item2.desc": "Assembly and maintenance of computers, installation of operating systems, and Hackintosh configuration with MacOS, Linux, and Windows using OpenCore bootloader. Configuration of Android tablets and phones for Linux and adapted development environments on these devices.",
        "skills.languagesTitle": "Languages",
        "skills.portuguese": "Portuguese",
        "skills.portugueseLevel": "Native",
        "skills.english": "English",
        "skills.englishLevel": "Intermediate",
        "skills.spanish": "Spanish",
        "skills.spanishLevel": "Fluent",
        "skills.interestsTitle": "Areas of Interest",
        "interests.backend": "Backend Development",
        "interests.frontend": "Frontend Development",
        "interests.devops": "DevOps",
        "interests.ai": "Artificial Intelligence",
        "interests.qa": "Quality Assurance (QA)",
        "interests.cloud": "Cloud Computing",
        "interests.cybersecurity": "Cybersecurity",
        "interests.infrastructure": "IT Infrastructure & Support",
        "contact.title": "Let's Talk?",
        "contact.text": "I'm always open to new projects, opportunities, and partnerships. Feel free to connect with me through any of the networks below, WhatsApp, or by sending an email!",
        "footer.text": "© 2026 - Developed by João Luiz da Conceição. All rights reserved."
    },
    es: {
        "nav.about": "Sobre mí",
        "nav.studies": "Estudios",
        "nav.experience": "Experiencia",
        "nav.skills": "Intereses & Idiomas",
        "nav.contact": "Contacto",
        "hero.greeting": "Bienvenido...",
        "hero.subtitle": "Desarrollador Full Stack / QA",
        "hero.description": "Profesional enfocado en crear soluciones tecnológicas innovadoras, eficientes y útiles para el día a día, buscando reconocer las necesidades del cliente y profundizar en el análisis y resolución de problemas, ofreciendo soluciones para facilitar tu vida.",
        "hero.contactBtn": "Contactar",
        "hero.experienceBtn": "Ver Experiencia",
        "studies.title": "Estudios & Formación",
        "studies.item1.date": "2025 - Cursando",
        "studies.item1.title": "Licenciatura en Tecnología de la Información",
        "studies.item1.institution": "Universidade Univesp",
        "studies.item1.desc": "Enfoque en arquitectura de sistemas, desarrollo ágil, estructuras de datos y desarrollo web.",
        "studies.item2.date": "2025",
        "studies.item2.title": "Ingeniería Ambiental",
        "studies.item2.institution": "Universidad de la Ciudad de São Paulo",
        "studies.item3.date": "2026",
        "studies.item3.title": "Quality Assurance (QA)",
        "studies.item3.desc": "Pruebas de calidad de software, sus especificidades y herramientas como Selenium para pruebas automatizadas Web con Python.",
        "studies.item4.date": "2025",
        "studies.item4.title": "Desarrollo Backend Java/Spring",
        "studies.item4.institution": "DIO",
        "studies.item4.desc": "Cursos que cubren Java, ecosistema Spring (Spring Boot, Spring Data JPA, Spring Security), APIs RESTful, bases de datos relacionales con MySQL y PostgreSQL, no relacionales con MongoDB, Docker y control de versiones con GIT.",
        "studies.item5.date": "2025",
        "studies.item5.title": "Desarrollo Front-End",
        "studies.item5.institution": "DIO",
        "studies.item5.desc": "Desarrollo de sitios web e interfaces responsivas utilizando HTML, CSS, JavaScript modernos y frameworks. Integración con APIs y metodologías ágiles (Scrum).",
        "exp.title": "Experiencia Profesional",
        "exp.item1.title": "Desarrollo de Sitios Web",
        "exp.item1.desc": "Desarrollo de sitios web e interfaces responsivas utilizando HTML, CSS, JavaScript modernos y frameworks. Integración con APIs y metodologías ágiles (Scrum).",
        "exp.item2.date": "2022 - 2024",
        "exp.item2.title": "Montaje de computadoras",
        "exp.item2.desc": "Montaje y mantenimiento de computadoras, instalación de sistemas operativos y configuración de Hackintosh con MacOS, Linux y Windows en bootloader OpenCore. Configuración de tablets y celulares Android para Linux y entornos de desarrollo adaptados en estos dispositivos.",
        "skills.languagesTitle": "Idiomas",
        "skills.portuguese": "Portugués",
        "skills.portugueseLevel": "Nativo",
        "skills.english": "Inglés",
        "skills.englishLevel": "Intermedio",
        "skills.spanish": "Español",
        "skills.spanishLevel": "Fluido",
        "skills.interestsTitle": "Áreas de Interés",
        "interests.backend": "Desarrollo Backend",
        "interests.frontend": "Desarrollo Frontend",
        "interests.devops": "DevOps",
        "interests.ai": "Inteligencia Artificial",
        "interests.qa": "Quality Assurance (QA)",
        "interests.cloud": "Cloud Computing",
        "interests.cybersecurity": "Ciberseguridad",
        "interests.infrastructure": "Infraestructura y soporte (TI)",
        "contact.title": "¿Conversamos?",
        "contact.text": "Siempre estoy abierto a nuevos proyectos, oportunidades y asociaciones. Siéntete libre de conectarte conmigo a través de cualquiera de las redes a continuación, WhatsApp o enviando un correo electrónico.",
        "footer.text": "© 2026 - Desarrollado por João Luiz da Conceição. Todos los derechos reservados."
    }
};

let currentLang = localStorage.getItem('lang') || 'pt';

function applyLanguage(lang) {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    currentLang = lang;
    localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
    });
});

applyLanguage(currentLang);