// ================= PRELOADER =================
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");

  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});


// ================= PARALLAX SCROLL =================
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");

  if (!hero) return;

  let offset = window.scrollY;
  hero.style.backgroundPositionY = offset * 0.5 + "px";
});
// ================= SIDEBAR TOGGLE =================
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}


// ================= SMOOTH SCROLL + ACTIVE NAV =================
function scrollToSection(id, el) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");
  });

  if (el) el.classList.add("active");

  // CLOSE sidebar on mobile
  if (window.innerWidth < 768) {
    document.querySelector(".sidebar").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active");
  }
}


// ================= ACTIVE NAV ON SCROLL =================
const sections = document.querySelectorAll("h1[id], h2[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");

    if (item.dataset.section === current) {
      item.classList.add("active");
    }
  });
});


// ================= VIDEO INTERACTION =================
window.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth < 768;

  document.querySelectorAll(".project").forEach(card => {
    const video = card.querySelector("video");

    if (!video) return;

    if (!isMobile) {
      // Desktop hover
      card.addEventListener("mouseenter", () => {
        video.play().catch(() => {});
      });

      card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    } else {
      // Mobile tap
      card.addEventListener("click", () => {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    }
  });
});


// ================= FADE-IN ANIMATION =================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".card, .stat, h1, h2").forEach(el => {
  el.classList.add("fade");
  observer.observe(el);
});

// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    try {

      const response = await fetch("https://script.google.com/macros/s/AKfycbxGgc39lHMLB0CLtSRpWjMA3fVzoo71Wv1FYj8j5j5wEhE0_Uj2Q018sCP7eWR2vtVf/exec", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message Sent Successfully 🚀");
        form.reset();
      } else {
        alert("Something went wrong.");
      }

    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }

  });

}