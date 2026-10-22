'use strict';

const portfolio = {

  email: 'acayajohnrex20@gmail.com',
  github: 'https://github.com/acayajohnrex20-ops',
  linkedin: '',
  resume: 'resume.pdf',


  skills: [
    {
      icon: 'HTML',
      name: 'HTML5',
      detail: 'Semantic markup'
    },
    {
      icon: 'CSS',
      name: 'CSS3',
      detail: 'Responsive web design'
    },
    {
      icon: 'JS',
      name: 'JavaScript',
      detail: 'Interactive websites'
    },
    {
      icon: 'PHP',
      name: 'PHP',
      detail: 'Backend development'
    },
    {
      icon: 'SQL',
      name: 'SQL',
      detail: 'Database management'
    },
    {
      icon: 'UI',
      name: 'UI / UX',
      detail: 'Interface design'
    }
  ],



  projects: [
    {
      title: 'Alumni Tracking System',
      category: 'systems',
      badge: 'INFORMATION SYSTEM',
      symbol: 'ATS',
      image: 'projects/alumni-tracking-system.png',
      glow: '#b5253b55',
      description:
        'A web-based system for organizing alumni records, profiles, and graduate information.',
      contribution:
        'Add your actual responsibilities and contributions.',
      tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
      link: ''
    },
    {
      title: 'Personal Portfolio',
      category: 'web',
      badge: 'WEB DEVELOPMENT',
      symbol: '</>',
      image: 'projects/personal-portfolio.png',
      glow: '#99233f66',
      description:
        'A responsive portfolio website showcasing technical skills, projects, and professional development.',
      contribution:
        'Design, layout, and interactive frontend development.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: ''
    },
    
    {
      title: 'Mobile App',
      category: 'mobile',
      badge: 'MOBILE APPLICATION',
      symbol: '{ }',
      image: 'projects/mobile.jpg',
      glow: '#bc613144',
      description:
        'Sample academic web application project.',
      contribution:
        'Add your verified role and contributions.',
      tags: ['Frontend', 'Database'],
      link: ''
    }
  ],


  certificates: [
    {
      title: 'Networking Basics',
      type: 'cisco',
      issuer: 'Cisco Networking Academy',
      date: 'September 24 , 2026',
      file: 'images/certificate1.jpg',
      details: ''
    },
    {
      title: 'IT Customer Support Basics',
      type: 'cisco',
      issuer: 'Cisco Networking Academy',
      date: 'October 20 , 2026',
      file: 'images/certificate2.jpg',
      details: ''
    },
    {
      title: 'Programming Fundamentals',
      type: 'seminar',
      issuer: 'Northeastern College',
      date: 'August 27 , 2026',
      file: 'images/certificate3.png',
      details: ''
    },
    {
      title: 'Integrating IoT in Capstone Project',
      type: 'seminar',
      issuer: 'Northeastern College',
      date: 'August 27 , 2026',
      file: 'images/certificate4.png',
      details: ''
    },
    {
      title: 'Video Editing Tips & Tricks',
      type: 'seminar',
      issuer: 'Northeastern College',
      date: 'August 27, 2026',
      file: 'images/certificate5.png',
      details: ''
    },
    {
      title: 'Agentic AI',
      type: 'seminar',
      issuer: 'Northeastern College',
      date: 'August 27, 2026',
      file: 'images/certificate6.png',
      details: ''
    },
    {
      title: 'Foundational C# with Microsoft',
      type: 'microsoft learn',
      issuer: 'Microsoft Learn',
      date: 'September 27 , 2026',
      file: 'images/certificate7.jpg',
      details: ''
    },
    {
      title: 'Installing and Configuring Computer System',
      type: 'tesda',
      issuer: 'Technical Education and Skills Development Authority',
      date: 'October 12, 2026',
      file: 'images/certificate8.jpg',
      details: ''
    },
    {
      title: 'Introduction to Computer Systems Servicing',
      type: 'tesda',
      issuer: 'Technical Education and Skills Development Authority',
      date: 'September 27, 2026',
      file: 'images/certificate9.jpg',
      details: ''
    },
    {
      title: 'Maintaining Computer Systems and Networks',
      type: 'tesda',
      issuer: 'Technical Education and Skills Development Authority',
      date: 'October 12, 2026',
      file: 'images/certificate10.jpg',
      details: ''
    },
    {
      title: 'Setting Up Computer Networks',
      type: 'tesda',
      issuer: 'Technical Education and Skills Development Authority',
      date: 'September 27, 2026',
      file: 'images/certificate11.jpg',
      details: ''
    },
    {
      title: 'Setting Up Computer Servers ',
      type: 'tesda',
      issuer: 'Technical Education and Skills Development Authority',
      date: 'October 12, 2026',
      file: 'images/certificate12.jpg',
      details: ''
    },
    {
      title: 'DICT',
      type: 'webinar',
      issuer: 'Department of Information and Communications Technology',
      date: 'October 10, 2026',
      file: 'images/certificate13.jpg',
      details: ''
    }
  ],

  // ACHIEVEMENTS
  achievements: [
    {
      date: 'ACADEMIC JOURNEY',
      title: 'Information Technology Studies',
      description:
        'Developing knowledge in programming, systems, and technology through academic coursework.'
    },
    {
      date: 'PRACTICAL EXPERIENCE',
      title: 'Building Academic Projects',
      description:
        'Applying programming knowledge to practical projects and systems.'
    },
    {
      date: 'PROFESSIONAL DEVELOPMENT',
      title: 'Continuous Learning',
      description:
        'Participating in seminars, training activities, and professional development opportunities.'
    }
  ]

};

/* ==========================================================
   UTILITY FUNCTIONS
   ========================================================== */

const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];

const htmlEscape = value =>
  String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));

const isHttpUrl = value => {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol);
  } catch {
    return false;
  }
};

const assetPath = value => {
  if (typeof value !== 'string') return '';

  const validPath =
    /^(?:images|projects)\/[a-zA-Z0-9_./-]+\.(?:png|jpg|jpeg|webp|pdf)$/i;

  return validPath.test(value) && !value.includes('..')
    ? value
    : '';
};

// CURRENT YEAR
const yearElement = $('#year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* ==========================================================
   SKILLS SECTION
   ========================================================== */

const skillGrid = $('#skillGrid');

if (skillGrid) {
  skillGrid.innerHTML = portfolio.skills.map(skill => `
    <article class="skill-card reveal visible">

      <span class="skill-glyph">
        ${htmlEscape(skill.icon)}
      </span>

      <div>
        <strong>${htmlEscape(skill.name)}</strong>
        <br>
        <small>${htmlEscape(skill.detail)}</small>
      </div>

    </article>
  `).join('');
}

/* ==========================================================
   PROJECT CARDS
   ========================================================== */


function renderProjects(filter = 'all') {

  const grid = $('#projectGrid');
  if (!grid) return;

  const filteredProjects = portfolio.projects.filter(project =>
    filter === 'all' || project.category === filter
  );

  grid.innerHTML = filteredProjects.map((project, index) => {

    const glow = /^#[0-9a-f]{6,8}$/i.test(project.glow)
      ? project.glow
      : '#a81c3750';

    const image = assetPath(project.image);

    return `
      <article class="project-card reveal visible">

        <div class="project-art" style="--art-glow:${glow}">

          ${
            image
              ? `
                <img
                  src="${htmlEscape(image)}"
                  alt="${htmlEscape(project.title)} screenshot"
                  class="project-image"
                  loading="lazy"
                >
              `
              : ''
          }

          <span class="project-number">
            ${String(index + 1).padStart(2, '0')}
            /
            ${String(portfolio.projects.length).padStart(2, '0')}
          </span>

          <span class="project-category">
            ${htmlEscape(project.badge)}
          </span>

          <span
            class="art-symbol"
            ${image ? 'hidden' : ''}
          >
            ${htmlEscape(project.symbol)}
          </span>

        </div>

        <div class="project-content">

          <h3>${htmlEscape(project.title)}</h3>

          <p>${htmlEscape(project.description)}</p>

          <div class="project-tags">
            ${project.tags.map(tag => `
              <span>${htmlEscape(tag)}</span>
            `).join('')}
          </div>

          <div class="project-contribution">
            ↳ ${htmlEscape(project.contribution)}
          </div>

          ${
            isHttpUrl(project.link)
              ? `
                <a
                  class="text-link"
                  href="${htmlEscape(project.link)}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project ↗
                </a>
              `
              : ''
          }

        </div>

      </article>
    `;

  }).join('') || '<p>No projects in this category yet.</p>';

  // Display the original symbol if an image fails to load.
  $$('#projectGrid .project-image').forEach(img => {
    const showFallback = () => {
      img.hidden = true;

      const symbol = img.parentElement.querySelector('.art-symbol');

      if (symbol) {
        symbol.hidden = false;
      }
    };

    img.addEventListener('error', showFallback);

    if (img.complete && img.naturalWidth === 0) {
      showFallback();
    }
  });

}

renderProjects();


/* ==========================================================
   FILTER BUTTONS
   ========================================================== */

function setupFilters(containerSelector, handler) {

  const buttons = $$(`${containerSelector} .filter`);

  buttons.forEach(button => {

    button.addEventListener('click', () => {

      buttons.forEach(otherButton => {
        otherButton.classList.remove('active');
        otherButton.setAttribute('aria-pressed', 'false');
      });

      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      handler(button.dataset.filter || 'all');

    });

  });

}

setupFilters('#projectFilters', renderProjects);

/* ==========================================================
   CERTIFICATE IMAGE CARDS
   ========================================================== */

function renderCertificates(filter = 'all') {

  const grid = $('#certificateGrid');
  if (!grid) return;

  const filteredCertificates = portfolio.certificates

    .map((certificate, index) => ({
      ...certificate,
      index
    }))

    .filter(certificate =>
      filter === 'all' || certificate.type === filter
    );

  grid.innerHTML = filteredCertificates.map(certificate => {

    const image = assetPath(certificate.file);

    return `
      <button
        type="button"
        class="certificate-card reveal visible"
        data-cert="${certificate.index}"
        aria-label="Preview ${htmlEscape(certificate.title)}"
      >

        <div class="certificate-art">

          ${image
        ? `
                <img
                  class="certificate-preview"
                  src="${htmlEscape(image)}"
                  alt="${htmlEscape(certificate.title)}"
                  loading="lazy"
                  decoding="async"
                >
              `
        : ''
      }

          <span class="certificate-type">
            ${htmlEscape(
        certificate.type.toUpperCase().replace('-', ' ')
      )}
          </span>

          <span
            class="certificate-icon"
            ${image ? 'hidden' : ''}
          >
            ✧
          </span>

        </div>

        <div class="certificate-body">

          <strong>
            ${htmlEscape(certificate.title)}
          </strong>

          <span>
            ${htmlEscape(certificate.issuer)}
            ·
            ${htmlEscape(certificate.date)}
          </span>

          <small>
            VIEW CERTIFICATE ↗
          </small>

        </div>

      </button>
    `;

  }).join('') || '<p>No certificates in this category yet.</p>';

  // Restore placeholder if an image cannot be loaded.
  $$('#certificateGrid .certificate-preview').forEach(img => {

    img.addEventListener('error', () => {

      img.hidden = true;

      const placeholder = img.parentElement.querySelector(
        '.certificate-icon'
      );

      if (placeholder) {
        placeholder.hidden = false;
      }

    });

    if (img.complete && img.naturalWidth === 0) {
      img.dispatchEvent(new Event('error'));
    }

  });

  // Open certificate details when clicked.
  $$('#certificateGrid [data-cert]').forEach(button => {

    button.addEventListener('click', () => {

      const index = Number(button.dataset.cert);

      openCertificate(index);

    });

  });

}

/* ==========================================================
   CERTIFICATE FILTERS
   ========================================================== */

// Automatically change old "field-trip" filter to
// "certificate" if the HTML has not been updated yet.

const certificateFilterContainer = $('#certificateFilters');

if (certificateFilterContainer) {

  const oldFilter = $(
    '[data-filter="field-trip"]',
    certificateFilterContainer
  );

  const hasCertificateFilter = $(
    '[data-filter="certificate"]',
    certificateFilterContainer
  );

  if (oldFilter && !hasCertificateFilter) {
    oldFilter.dataset.filter = 'certificate';
    oldFilter.textContent = 'CERTIFICATES';
  }

}

renderCertificates();

setupFilters('#certificateFilters', renderCertificates);

/* ==========================================================
   FULL-SIZE CERTIFICATE MODAL
   ========================================================== */

const modal = $('#certificateModal');

function openCertificate(index) {

  const certificate = portfolio.certificates[index];

  if (!certificate || !modal) return;

  const image = assetPath(certificate.file);

  const modalContents = $('#modalContents');

  if (!modalContents) return;

  modalContents.innerHTML = `

    ${image
      ? `
          <img
            class="certificate-full-image"
            src="${htmlEscape(image)}"
            alt="${htmlEscape(certificate.title)}"
          >
        `
      : `
          <div class="modal-placeholder">
            <strong>✧</strong>
            <span>Certificate image not uploaded yet</span>
          </div>
        `
    }

    <h3>
      ${htmlEscape(certificate.title)}
    </h3>

    <p>
      <strong>Category:</strong>
      ${htmlEscape(certificate.type)}
      <br>

      <strong>Organizer:</strong>
      ${htmlEscape(certificate.issuer)}
      <br>

      <strong>Date:</strong>
      ${htmlEscape(certificate.date)}
    </p>

    <p>
      ${htmlEscape(certificate.details)}
    </p>

  `;

  const fullImage = modalContents.querySelector('img');

  if (fullImage) {

    fullImage.addEventListener('error', () => {
      fullImage.outerHTML = `
        <div class="modal-placeholder">
          <strong>✧</strong>
          <span>Certificate image not found</span>
        </div>
      `;
    });

  }

  if (!modal.open) {
    modal.showModal();
  }

}

// CLOSE MODAL
const closeCertificate = $('#closeCertificate');

if (closeCertificate && modal) {

  closeCertificate.addEventListener('click', () => {
    modal.close();
  });

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.close();
    }
  });

}

/* ==========================================================
   ACHIEVEMENTS TIMELINE
   ========================================================== */

const achievementTimeline = $('#achievementTimeline');

if (achievementTimeline) {

  achievementTimeline.innerHTML = portfolio.achievements.map(
    achievement => `

      <article class="timeline-item reveal visible">

        <span class="timeline-date">
          ${htmlEscape(achievement.date)}
        </span>

        <h3>
          ${htmlEscape(achievement.title)}
        </h3>

        <p>
          ${htmlEscape(achievement.description)}
        </p>

      </article>

    `
  ).join('');

}


const socialLinks = $('#socialLinks');

const social = [
  ['GitHub', portfolio.github],
  ['LinkedIn', portfolio.linkedin]
];

if (socialLinks) {

  socialLinks.innerHTML = social

    .filter(([, href]) => isHttpUrl(href))

    .map(([label, href]) => `

      <a
        href="${htmlEscape(href)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${htmlEscape(label)} ↗
      </a>

    `).join('');

}


let toastTimer;

function showToast(message) {

  const toast = $('#toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('visible');

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 4500);

}



const emailButton = $('#emailButton');

if (emailButton) {

  emailButton.addEventListener('click', () => {

    const validEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmail.test(portfolio.email)) {

      showToast(
        'Please add your professional email in script.js.'
      );

      return;
    }

    window.location.href =
      `mailto:${portfolio.email}?subject=Hello%20Johnrex`;

  });

}



const resumeButton = $('#resumeButton');

if (resumeButton) {

  resumeButton.addEventListener('click', async () => {

    try {

      const response = await fetch(portfolio.resume, {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error('Resume not found');
      }

      const fileBlob = await response.blob();

      const url = URL.createObjectURL(fileBlob);

      const anchor = document.createElement('a');

      anchor.href = url;
      anchor.download = 'resume.pdf';

      document.body.appendChild(anchor);

      anchor.click();
      anchor.remove();

      setTimeout(() => URL.revokeObjectURL(url), 1000);

    } catch {

      showToast(
        'Please add your resume.pdf file and open the portfolio using Live Server.'
      );

    }

  });

}



const menu = $('#menuToggle');
const links = $('#navLinks');

if (menu && links) {

  menu.addEventListener('click', () => {

    const isOpen = links.classList.toggle('open');

    menu.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    menu.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation' : 'Open navigation'
    );

  });

  $$('.nav-link').forEach(link => {

    link.addEventListener('click', () => {

      links.classList.remove('open');

      menu.setAttribute('aria-expanded', 'false');

    });

  });

}


if ('IntersectionObserver' in window) {

  const revealObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.09
    }
  );

  $$('.reveal').forEach(element => {
    revealObserver.observe(element);
  });

}



const sections = $$('main section[id]');

if ('IntersectionObserver' in window) {

  const sectionObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          $$('.nav-link').forEach(link => {

            const isActive =
              link.getAttribute('href') ===
              '#' + entry.target.id;

            link.classList.toggle('active', isActive);

          });

        }

      });

    },
    {
      rootMargin: '-25% 0px -60% 0px'
    }
  );

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

}



let ticking = false;

window.addEventListener('scroll', () => {

  if (!ticking) {

    requestAnimationFrame(() => {

      const scrollHeight = Math.max(
        1,
        document.documentElement.scrollHeight -
        window.innerHeight
      );

      const progress =
        (window.scrollY / scrollHeight) * 100;

      const progressBar = $('.scroll-progress');

      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }

      ticking = false;

    });

    ticking = true;

  }

}, { passive: true });


const canvas = $('#particles');

const reducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (canvas && !reducedMotion) {

  const ctx = canvas.getContext('2d');

  if (ctx) {

    let dots = [];
    let width = 0;
    let height = 0;
    let animationId = 0;

    const resize = () => {

      width = canvas.width = window.innerWidth;
      height = canvas.height = 770;

      dots = Array.from(
        {
          length: Math.min(
            45,
            Math.floor(width / 27)
          )
        },
        () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.6 + 0.4,
          v: Math.random() * 0.27 + 0.08
        })
      );

    };

    resize();

    window.addEventListener(
      'resize',
      resize,
      { passive: true }
    );

    const draw = () => {

      ctx.clearRect(0, 0, width, height);

      for (const particle of dots) {

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.r,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = '#c84a62';
        ctx.fill();

        particle.y -= particle.v;

        if (particle.y < 0) {

          particle.y = height;
          particle.x = Math.random() * width;

        }

      }

      animationId = requestAnimationFrame(draw);

    };

    draw();

    document.addEventListener(
      'visibilitychange',
      () => {

        if (document.hidden) {

          cancelAnimationFrame(animationId);

        } else {

          cancelAnimationFrame(animationId);
          draw();

        }

      }
    );

  }

}


const precisePointer = window.matchMedia(
  '(pointer: fine) and (prefers-reduced-motion: no-preference)'
).matches;

const heroCard = $('#heroCard');

if (precisePointer && heroCard) {

  heroCard.addEventListener('pointermove', event => {

    const rectangle = heroCard.getBoundingClientRect();

    const x =
      (event.clientX - rectangle.left) /
      rectangle.width - 0.5;

    const y =
      (event.clientY - rectangle.top) /
      rectangle.height - 0.5;

    heroCard.style.transform = `
      perspective(1000px)
      rotateY(${x * 8}deg)
      rotateX(${-y * 7}deg)
      rotateZ(-2deg)
    `;

  });

  heroCard.addEventListener('pointerleave', () => {

    heroCard.style.transform = 'rotate(-2deg)';

  });

}

