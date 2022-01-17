export const ParticlesConfig = {
  preset: "seaAnemone",
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 1400
        }
      },
      color: {
        value: ['#353D40','#A1A5A6','#F2B138','#003F63','#BB2020']
      },
      shape: {
        type: ['edge','circle'],
        stroke: {
          width: 0,
          color: ['#353D40','#A1A5A6','#F2B138','#003F63']
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 0.8,
          opacity_min: 0.25,
          sync: false
        }
      },
      size: {
        value: 20,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 1.25,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: '#283593',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: true,
          rotateX: 1200,
          rotateY: 200
        },
        warp: true
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 3
          }
        },
        repulse: {
          distance: 380,
          duration: 2
        }
      }
    },
    retina_detect: true
 };