particlesJS('particles-js', {
  particles: {
      number: {
          value: 100,  // Number of particles
          density: {
              enable: true,
              value_area: 800
          }
      },
      color: {
          value: "#ffcc00"  // Change to your desired color
      },
      shape: {
          type: "circle"  // Ensures particles are circles
      },
      opacity: {
          value: 0.5,
          random: false,
          anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
          }
      },
      size: {
          value: 5,  // Size of the particles
          random: true,
          anim: {
              enable: true,
              speed: 40,
              size_min: 0.1,
              sync: false
          }
      },
      line_linked: {
          enable: false,  // Disable the lines between particles
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
      },
      move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
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
              distance: 100,
              duration: 0.4
          },
          push: {
              particles_nb: 4
          }
      }
  },
  retina_detect: true
});





