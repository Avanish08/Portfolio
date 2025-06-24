// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.category-blocks button');
  const images = document.querySelectorAll('.gallery img');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Highlight active button
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      images.forEach(img => {
        const category = img.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          img.style.display = 'block';  // show image
        } else {
          img.style.display = 'none';   // hide image
        }
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "Game Designer | 2D Artist | Animator | Script Writer ",
    
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
      delay = 1500; // pause before deleting
      isDeleting = true;
    } else if (isDeleting && currentText === "") {
      isDeleting = false;
      currentRole = (currentRole + 1) % roles.length;
      delay = 500; // pause before next word
    }

    setTimeout(typeLoop, delay);
  }

  typeLoop();
});
