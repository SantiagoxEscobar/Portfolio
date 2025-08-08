document.addEventListener('DOMContentLoaded', function () {
  // BACK TO TOP button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // FORM VALIDATION
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      let isValid = true;

      [name, email, message].forEach(input => {
        input.classList.remove('is-invalid');
      });

      if (name.value.trim() === '') {
        name.classList.add('is-invalid');
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        email.classList.add('is-invalid');
        isValid = false;
      }

      if (message.value.trim() === '') {
        message.classList.add('is-invalid');
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault();
      } else {
        alert('Mensaje enviado con éxito ✅');
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  switchLanguage("en"); // o "es" como idioma por defecto
});

function renderProjects(lang) {
  const container = document.getElementById("projectsContainer");
  container.innerHTML = ""; // Limpiar antes de volver a renderizar

  projects.forEach(project => {
    const data = projectCardTranslations[lang][project.id];

    const card = document.createElement("div");
    card.className = "col-12 col-md-6";

    card.innerHTML = `
      <div class="project-card card h-100">
        <div class="row g-0">
          <div class="col-12 project-image-container">
            <img src="${project.image}" class="img-fluid project-image" alt="Project Image">
          </div>
          <div class="col-12">
            <div class="card-body">
              <h3>${data.title}</h3>
              <p>${data.description}</p>
              <p>${data.teamwork}</p>
              <p>${data.technologies}</p>
              <p>${data.tasks}</p>
              <p>${data.duration}</p>
              <div class="project-links mt-3">
                <a href="${project.demoLink}" target="_blank" class="btn btn-sm btn-outline-light me-2">${data.demo}</a>
                <a href="${project.repoLink}" target="_blank" class="btn btn-sm btn-outline-light">${data.repo}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function switchLanguage(lang) {
  // Traducción general
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    const translation = translations[lang][key];
    if (translation) {
      el.innerHTML = translation;
    }
  });

  // Traducción para proyectos
  const projectElements = document.querySelectorAll("[data-project-translate]");
  projectElements.forEach(el => {
    const key = el.getAttribute("data-project-translate"); // ej: "project_1.title"
    const [projectId, subKey] = key.split('.');
    const translation = projectCardTranslations[lang]?.[projectId]?.[subKey];
    if (translation) {
      el.innerHTML = translation;
    }
  });

  // Render dinámico de proyectos traducidos
  renderProjects(lang);
}

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About Me",
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_resume_btn: "PDF Resume",

    home_greeting: "Hi, my name is <span>Santiago</span>",
    home_role: "I'm a full stack web developer. I love programming and creating new things.",
    btn_view_work: "View my work",

    about_title: "About Me",
    about_paragraph_1: `Passionate about web development,
      I am a Programming Technician from UTN Buenos Aires Argentina,
      I am currently specializing in .NET.
      I also have experience in database structures and web app architecture layers.`,
    about_paragraph_2: `My focus is on continuous learning and constant skill improvement.
      I look for challenges that allow me to grow professionally and contribute to project success.`,
    about_lets_explore: "Let's explore the possibilities together!",

    skills_title: "Skills",
    skills_others: "Others",
    projects_title: "Projects",

    btn_back_top: "Back to Top",

    contact_title: "Contact Me",
    contact_find_me: "Find me at:",
    contact_message: "Quick Message",
    form_label_name: "Your Name",
    form_placeholder_name: "Write your name here...",
    form_label_email: "Your Email",
    form_placeholder_email: "you@example.com",
    form_label_message: "Message",
    form_placeholder_message: "Write your message here...",
    form_btn_send: "Send",
    contact_note: "I'm currently open to freelance and full-time opportunities."
  },
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre Mí",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    nav_resume_btn: "CV en PDF",

    home_greeting: "Hola, mi nombre es <span>Santiago</span>",
    home_role: "Soy desarrollador web full stack. Me encanta programar y crear cosas nuevas.",
    btn_view_work: "Ver mi trabajo",

    about_title: "Sobre Mí",
    about_paragraph_1: `Apasionado por el desarrollo web,
      soy Técnico en Programación de la UTN Buenos Aires Argentina,
      actualmente me especializo en .NET.
      También tengo experiencia en estructuras de bases de datos y capas de arquitectura web.`,
    about_paragraph_2: `Mi enfoque está en el aprendizaje continuo y la mejora constante de habilidades.
      Busco desafíos que me permitan crecer profesionalmente y aportar al éxito de los proyectos.`,
    about_lets_explore: "¡Exploremos las posibilidades juntos!",

    skills_title: "Habilidades",
    skills_others: "Otros",
    projects_title: "Proyectos",
    
    btn_back_top: "Volver arriba",

    contact_title: "Contáctame",
    contact_find_me: "Encuéntrame en:",
    contact_message: "Mensaje Rápido",
    form_label_name: "Tu Nombre",
    form_placeholder_name: "Escribe tu nombre aquí...",
    form_label_email: "Tu Correo",
    form_placeholder_email: "tucorreo@ejemplo.com",
    form_label_message: "Mensaje",
    form_placeholder_message: "Escribe tu mensaje aquí...",
    form_btn_send: "Enviar",
    contact_note: "Actualmente estoy abierto a oportunidades freelance y full-time."
  }
};

// Traducciones específicas para cada proyecto
const projectCardTranslations = {
  en: {
    project_1: {
      title: "Waiter Table System",
      description: "The Waiter Table System is a digital solution for restaurant staff.",
      teamwork: "<strong>Teamwork:</strong> Two-person collaboration.",
      technologies: "<strong>Technologies:</strong> .NET Framework, C#, HTML, CSS, JavaScript, Bootstrap, and MySQL.",
      tasks: "<strong>My tasks:</strong> ASP.NET Web Forms Development, Authentication and Security, Logic & Validation, DB interaction.",
      duration: "<strong>Duration:</strong> 1 month",
      demo: "🎥 Demo",
      repo: "💻 Repo"
    },
    project_2: {
      title: "Task Tracker",
      description: "Simple app to organize and prioritize daily tasks.",
      teamwork: "<strong>Teamwork:</strong> Solo project",
      technologies: "<strong>Technologies:</strong> Blazor, C#, SQLite",
      tasks: "<strong>My tasks:</strong> UI with Blazor, CRUD logic, data persistence",
      duration: "<strong>Duration:</strong> 1 month",
      demo: "🎥 Demo",
      repo: "💻 Repo"
    },
    project_3: {
      title: "E-commerce Website",
      description: "Website focused on selling computer-related products, using MVC architecture.",
      teamwork: "<strong>Teamwork:</strong> Collaboration among three people.",
      technologies: "<strong>Technologies:</strong> .NET Framework, C#, HTML, CSS, JavaScript, Bootstrap, and SQL Server.",
      tasks: "<strong>My tasks:</strong> Development and design with ASP.NET Web Forms, CRUD, logic implementation, validations, and database interaction.",
      duration: "<strong>Duration:</strong> 1 month",
      demo: "🎥 Demo",
      repo: "💻 Repo"
    },
    project_4: {
      title: "TypeRacer Game",
      description: "A typing game for C++ programmers, created for a university project.",
      teamwork: "<strong>Teamwork:</strong> Collaboration among three people.",
      technologies: "<strong>Technologies:</strong> C++ and SFML.",
      tasks: "<strong>My tasks:</strong> Game development, asset and scene creation, typing logic implementation, and interface design.",
      duration: "<strong>Duration:</strong> 1 month",
      demo: "🎥 Demo",
      repo: "💻 Repo"
    },
    project_5: {
      title: "Portfolio Website",
      description: "Personal website to showcase my projects and skills.",
      teamwork: "<strong>Teamwork:</strong> Solo project",
      technologies: "<strong>Technologies:</strong> HTML, CSS, JavaScript.",
      tasks: "<strong>My tasks:</strong> Site design and development, contact form implementation, Responsive design.",
      duration: "<strong>Duration:</strong> 2 weeks",
      demo: "🎥 Demo",
      repo: "💻 Repo"
    }
  },
  es: {
    project_1: {
      title: "Sistema de Mesas para Mozos",
      description: "Sistema digital para la gestión de mesas en restaurantes.",
      teamwork: "<strong>Trabajo en equipo:</strong> Colaboración entre dos personas.",
      technologies: "<strong>Tecnologías:</strong> .NET Framework, C#, HTML, CSS, JavaScript, Bootstrap y MySQL.",
      tasks: "<strong>Mis tareas:</strong> Desarrollo y diseño en ASP.NET Web Forms, autenticación, lógica, validaciones e interacción con la BD.",
      duration: "<strong>Duración:</strong> 1 mes",
      demo: "🎥 Ver",
      repo: "💻 Repositorio"
    },
    project_2: {
      title: "Organizador de Tareas",
      description: "App simple para organizar y priorizar tareas diarias.",
      teamwork: "<strong>Trabajo en equipo:</strong> Proyecto individual",
      technologies: "<strong>Tecnologías:</strong> Blazor, C#, SQLite",
      tasks: "<strong>Mis tareas:</strong> UI con Blazor, lógica CRUD, persistencia de datos",
      duration: "<strong>Duración:</strong> 1 mes",
      demo: "🎥 Ver",
      repo: "💻 Repositorio"
    },
    project_3: {
      title: "Página web E-commerce",
      description: "Sitio web con temática en ventas de artículos de computación, con arquitectura MVC.",
      teamwork: "<strong>Trabajo en equipo:</strong> Colaboración entre tres personas.",
      technologies: "<strong>Tecnologías:</strong> .NET Framework, C#, HTML, CSS, JavaScript, Bootstrap y SQL Server.",
      tasks: "<strong>Mis tareas:</strong> Desarrollo y diseño en ASP.NET Web Forms, CRUD, lógica, validaciones e interacción con la BD.",
      duration: "<strong>Duración:</strong> 1 mes",
      demo: "🎥 Ver",
      repo: "💻 Repositorio"
    },
    project_4: {
      title: "TypeRacer Game",
      description: "Un juego de mecanografía pero para programadores C++, creado para la universidad.",
      teamwork: "<strong>Trabajo en equipo:</strong> Colaboración entre tres personas.",
      technologies: "<strong>Tecnologías:</strong> C++ y SFML.",
      tasks: "<strong>Mis tareas:</strong> Desarrollo del juego, creación de assets y escenearios, implementación de la lógica de mecanografía y diseño de la interfaz.",
      duration: "<strong>Duración:</strong> 1 mes",
      demo: "🎥 Ver",
      repo: "💻 Repositorio"
    },
    project_5: {
      title: "Portfolio Website",
      description: "Sitio web personal para mostrar mis proyectos y habilidades.",
      teamwork: "<strong>Trabajo en equipo:</strong> Proyecto individual",
      technologies: "<strong>Tecnologías:</strong> HTML, CSS, JavaScript.",
      tasks: "<strong>Mis tareas:</strong> Diseño y desarrollo del sitio, implementación de formularios de contacto, Responsive.",
      duration: "<strong>Duración:</strong> 2 semanas",
      demo: "🎥 Ver",
      repo: "💻 Repositorio"
    }
  }
};

const projects = [
  {
    id: "project_1",
    image: "https://i.ibb.co/n8mVHv3p/Sistema-Mozoz.jpg",
    demoLink: "#",
    repoLink: "https://github.com/Mariano-Stoessel/ProyectoPedidosRestaurante"
  },
  {
    id: "project_2",
    image: "https://i.ibb.co/jkYjVWpC/pending.jpg",
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: "project_3",
    image: "https://i.ibb.co/GfLZHkL0/IMG-20240606-WA0019.jpg",
    demoLink: "#",
    repoLink: "https://github.com/SantiagoxEscobar/E-Commerce-Backup"
  },
  {
    id: "project_4",
    image: "https://i.ibb.co/TMRNp34Q/Typeracer.jpg",
    demoLink: "#",
    repoLink: "https://github.com/SantiagoxEscobar/TypeRacer-Backup"
  },
  {    
    id: "project_5",
    image: "https://i.ibb.co/1JTg0ZhK/Portfolio.jpg",
    demoLink: "https://santiagoxescobar.github.io/Portfolio/",
    repoLink: "https://github.com/SantiagoxEscobar/Portfolio"
  }
  // Agrega más proyectos aquí
];
