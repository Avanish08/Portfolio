window.addEventListener('load', () => {
      const loader = document.getElementById('preloader');
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 500);
    });

    const filters = document.querySelectorAll('.filter');
    const cards = document.querySelectorAll('.card');
    filters.forEach(btn => btn.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(c => {
        const tags = c.dataset.tags.split(' ');
        c.style.display = (f === 'all' || tags.includes(f)) ? '' : 'none';
      });
    }));

    document.getElementById('view-work').onclick = () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });

    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('navbar');
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    const videos = document.querySelectorAll('.hover-video');

  videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0; // restart when hover ends (optional)
    });
  });