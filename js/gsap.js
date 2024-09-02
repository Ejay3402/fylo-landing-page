gsap.registerPlugin(ScrollTrigger);

const meun_list = document.querySelector(`.meun-list`);

const top_sign = document.querySelector(`.top-sign`);

const tl = gsap.timeline({
  duration: 1,
});

//header logo
tl.fromTo(
  ".header-logo",
  {
    opacity: 0,
    x: -200,
  },
  {
    duration: 1,
    opacity: 1,
    x: 0,
  }
) //menu list
  .fromTo(
    meun_list.children,
    {
      opacity: 0,
      x: 200,
    },
    {
      duration: 0.5,
      opacity: 1,
      x: 0,
      stagger: 0.6,
    }
  ) //main top-h1
  .fromTo(
    ".top-h1",
    {
      opacity: 0,
      y: -100,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.6,
    }
  ) //main top-p
  .fromTo(
    ".top-p",
    {
      duration: 1,
      opacity: 0,
      y: -51,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  ) //top sign
  .fromTo(
    top_sign.children,
    {
      duration: 1,
      opacity: 0,
      x: 100,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      duration: 1,
      stagger: 0.6,
    }
  ) //top-right-img
  .fromTo(
    ".top-right-img",
    {
      duration: 1,
      opacity: 0,
      x: 51,
    },
    {
      duration: 1,
      opacity: 1,
      x: 0,
      duration: 1,
    }
  )
  .fromTo(
    ".center-h2",
    {
      duration: 1,
      opacity: 0,
      x: -251,
    },
    {
      duration: 0.5,
      opacity: 1,
      x: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".center-h2",
        start: "30% 110%",
        end: "top 20%",
        markers: false,
        scrub: true,
        toggleActions: "play none resume none",
      },
    }
  )
  .fromTo(
    ".center-p-1",
    {
      opacity: 0,
      y: -100,
      duration: 1,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".center-p-1",
        start: "30% 100%",
        end: "top 20%",
        markers: false,
        scrub: true,
        toggleActions: "play none resume none",
      },
      delay : 1
    }
  )
  .fromTo(
    ".center-p-2",
    {
      opacity: 0,
      y: -100,
      duration: 1,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".center-p-2",
        start: "30% 100%",
        end: "top 20%",
        markers: false,
        scrub: true,
        toggleActions: "play none resume none",
      },
      delay : 1
    }
  )// center img
  .fromTo('.center-img', {
    opacity : 0,
    duration : 1,
    x : -60,
    rotate : 110
  }, {
    x : 0,
    rotate : 0,
    opacity : 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".center-img",
      start: "30% 100%",
      end: "top 20%",
      markers: false,
      scrub: true,
      toggleActions: "play none resume none",
    },
    delay : 1
  })
  .fromTo('.center-see-fy', {
    opacity : 0,
    x : -60,
    rotate : -90,
  }, {
    opacity : 1,
    x : 0,
    rotate : 0,
    duration: 1, 
    scrollTrigger: {
      trigger: ".center-see-fy",
      start: "30% 111%",
      end: "top 20%",
      markers: false,
      scrub: true,
      toggleActions: "play none resume none",
    },
    delay : 1
  })
  .fromTo('.quot', {
    x : 100,
    opacity : 0,
    rotate : 20,
  }, {
    x : 0,
    opacity : 1,
    rotate : 0,
    duration: 1,
    scrollTrigger : {
      trigger : '.quot',
      scrub : true,
      start : 'top 111%',
      end : 'top 20%',
      toggleActions : 'play none resume none',
    },
    delay : 1
  })
  .fromTo('.down', {
    duration: 1,
    opacity : 0,
    y : -50,
  }, {
    opacity : 1,
    y : 0,
    duration: 1,
    scrollTrigger : {
      trigger : '.down',
      start : 'top 100%',
      end : 'top 20%',
      scrub : true,
      toggleActions : 'play none resume none',
    },
    delay : 1
  })
  .fromTo('.down-left', {
    opacity : 0,
    x : -200,
    rotate : 50,
  }, {
    opacity : 1,
    x : 0,
    rotate : 0,
    duration: 1,
    scrollTrigger : {
      trigger : '.down-left',
      start : 'top 70%',
      scrub : true,
      end : 'top 20%',
      toggleActions : 'play none resume none',
    },
    delay : 1,
  })
  .fromTo('.down-right', {
    opacity : 0,
    x : 300,
    rotate : 50, 
  }, {
    opacity : 1,
    x : 0,
    rotate : 0,
    duration: 1,
    scrollTrigger : {
      trigger : '.down-right',
      start : 'top 70%',
      scrub : true,
      end : 'top 20%',
      toggleActions : 'play none resume none',
    },
    delay : 1,
  })
  .fromTo('footer', {
    opacity : 0,
    y : -50,
  }, {
    opacity : 1,
    y : 0,
    duration: 1,
    scrollTrigger : {
      trigger : 'footer',
      scrub : true,
      start : 'top 91%',
      end : 'top 20%',
      toggleActions : 'play none resume none'
    },
    delay : 1
  })