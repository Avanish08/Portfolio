document.addEventListener("DOMContentLoaded", () => {
  // Typing Text Animation
  const roles = [
    "Game Designer | 2D Artist | Animator | Script Writer"
  ];
  let currentRole = 0;
  let currentText = "";
  let isDeleting = false;
  const speed = 100;
  const typingText = document.getElementById("typing-text");

  function typeLoop() {
    const fullText = roles[currentRole];

    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    typingText.innerHTML = currentText;

    let delay = isDeleting ? speed / 2 : speed;

    if (!isDeleting && currentText === fullText) {
      delay = 1500;
      isDeleting = true;
    } else if (isDeleting && currentText === "") {
      isDeleting = false;
      currentRole = (currentRole + 1) % roles.length;
      delay = 500;
    }

    setTimeout(typeLoop, delay);
  }

  typeLoop();

  // Category Filtering
  const buttons = document.querySelectorAll('.category-blocks button');
  const images = document.querySelectorAll('.gallery img');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      images.forEach(img => {
        const category = img.getAttribute('data-category');
        img.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
      });
    });
  });

  // Hamburger Menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Initialize particles.js
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 }},
        color: { value: "#00ffd5" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00ffd5",
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          out_mode: "bounce"
        }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }

  // Custom cursor movement
  const customCursor = document.getElementById('custom-cursor');
  window.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
  });

 // Section reveal with IntersectionObserver + staggered animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    } else {
      entry.target.classList.remove("reveal"); // remove if you want re-animation on scroll up
    }
  });
}, {
  threshold: 0.15 // 15% visible to trigger
});

// Loop through all sections and apply stagger + custom animation class
document.querySelectorAll("section").forEach((section, index) => {
  const delay = (index * 0.1 + Math.random() * 0.05).toFixed(2); // slight randomness
  section.style.transitionDelay = `${delay}s`;

  // Optional: support per-section animation type via data-animation
  const animationType = section.dataset.animation || "fade-up"; // default
  section.classList.add(animationType); // e.g., fade-up, fade-left, zoom-in

  observer.observe(section);
});



});

// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});
