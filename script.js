// Wait for page to fully load
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Custom Cursor
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});

// Typing Loop Effect
const typingText = document.getElementById('typing-text');
const words = ['Game Designer', 'Script Writer', '2D Artist', 'Animator'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 100;

function typeLoop() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex--);
        delay = 50;
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 300;
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
        delay = 100;
        if (charIndex > currentWord.length) {
            isDeleting = true;
            delay = 1000;
        }
    }
    setTimeout(typeLoop, delay);
}
typeLoop();

// Category Filter Logic
const filterButtons = document.querySelectorAll('.category-blocks button');
const galleryItems = document.querySelectorAll('.gallery img');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');

        // Toggle active button class
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter gallery items
        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Hamburger menu toggle for mobile
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

// Initialize particles.js
document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#00ffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 100
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
});

