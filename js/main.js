//email check

const btn = document.getElementById(`btn`);
const text = document.getElementById(`text`);
const input = document.getElementById(`input`);

/* const btn = document.getElementById(`btn`);
const text = document.getElementById(`text`);
const input = document.getElementById(`input`);
 */
const btnC = (e) => {
  //e.preventDefault();
  let val = input.value;

  if (val.includes("@")) {
    text.textContent = `We have received your email.`;
    input.value = ``;
    setTimeout(() => {
      text.remove();
    }, 5000);
  } else {
    text.textContent = `Enter a valid email..`;
    setTimeout(() => {
      text.textContent = `It must have an @`;
    }, 2500);
    setTimeout(() => {
      text.remove();
    }, 8990);
  }
};

btn.addEventListener("click", () => {
  btnC();
});

//gsap
/*
gsap.registerPlugin(ScrollTrigger);

let ti = gsap.timeline({
  default: {
    opacity: 0,
    ease: "back",
    duration: 1,
    delay: 2,
  },
});

ti.from("header", {
  duration: 1,
  y: -1200,
  stagger: {
    each: 0.6,
  },
}) 
  .from(".top-h1", { duration: 1, x: -1200, stagger: 0.6, opacity: 1 })
  .from(".top-p", { duration: 0.8, x: -1200, stagger: 0.6 })
  .from(".top-sign", { duration: 0.8, x: 1200, stagger: 0.6 })
  .from(".top-right", { duration: 0.8, x: 1200, stagger: 0.6 });

  ti.from(".center-h2", {
  duration: 1,
  x: -1200,
  stagger: {
    each : 0.8,
  },
  scrollTrigger: {
    trigger : ".center-h2",
    start : "top 120%",
    end : "top 30%",
    scrub : 2,
    toggleActions : "play none resume reset", //others restart, pause, resume, complete and nope
    
  },
});
ti.from(".center-p-1", {
  duration: 1,
  x: -1200,
  stagger: {
    each : 0.6,
  },
  scrollTrigger: {
    trigger : ".center-p-1",
    scrub : 2,
    start : "top 110%",
    toggleActions : "play none resume reset",
    end : "top 25%",
  },
});
ti.from(".center-p-2", {
  duration: 1,
  x: -1200,
  stagger: 0.6,
  scrollTrigger: {
    trigger : ".center-p-2",
    start : "top 100%",
    toggleActions : "play none resume reset",
    scrub : 2,
  },
});
ti.from(".center-img", {
  duration: 1,
  x: 1200,
  stagger: 0.6,
  scrollTrigger: {
    trigger : ".center-img",
    start : "top 250%",
    toggleActions : "play none resume reset",
    scrub : 2
  },
});
 */