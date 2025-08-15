const buttons = document.querySelectorAll('.category-blocks button');
const projects = document.querySelectorAll('.project');

// CATEGORY FILTER
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Highlight active button
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        projects.forEach(project => {
            const media = project.querySelector('video, img'); // works for both
            const category = media ? media.getAttribute('data-category') : null;

            if (filter === 'all' || category === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// VIDEO AUTOPLAY ON HOVER
document.querySelectorAll("video").forEach(video => {
    video.addEventListener("mouseenter", () => video.play());
    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; // optional reset
    });
});
