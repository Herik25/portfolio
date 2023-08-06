const layer = document.getElementById("layer");

let typed = new Typed("#text", {
  strings: ["Harsh", "Developer", "Designer", "Coder"],
  typeSpeed: 200,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  loopCount: Infinity,
});

const home = document.querySelector(".home");
const about = document.querySelector(".about");
const work = document.querySelector(".work");
const contact = document.querySelector(".contact");
const a2 = document.getElementById("about");
const w2 = document.getElementById("work");
const wl = document.querySelector(".work .line");
const line = document.querySelector(".line");
const line2 = document.querySelector(".line2");
const footer = document.querySelector(".footer");

function night() {
  home.classList.toggle("night");
  about.classList.toggle("night");
  work.classList.toggle("night");
  contact.classList.toggle("night");
  footer.classList.toggle("night");
}

a2.addEventListener("click", () => {
  line.classList.add("lineactive");
  setTimeout(() => {
    line.classList.remove("lineactive");
  }, 5000);
});
w2.addEventListener("click", () => {
  wl.classList.add("lineactive");
  line2.classList.add("line2active");
  setTimeout(() => {
    wl.classList.remove("lineactive");
  }, 5000);

  setTimeout(() => {
    line2.classList.remove("line2active");
  }, 6220);
});

function hire() {
  setTimeout(() => {
    scrollTo(0, 2238);
  }, 1000);
}

const btn = document.querySelectorAll("header li a, button");
for (const button of btn) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    var layerClass = ".right-layer";
    var layers = document.querySelectorAll(layerClass);
    for (const layer of layers) {
      layer.classList.toggle("active");
      setTimeout(() => {
        layer.classList.remove("active");
      }, 900);
    }

    setTimeout(() => {
      const sectionId = button.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);
      if (sectionId === "about") {
        window.scrollTo(0, 746);
      } else if (sectionId === "work") {
        window.scrollTo(0, 1492);
      } else if (sectionId === "contact") {
        window.scrollTo(0, 2238);
      } else {
        window.scrollTo(0, 0);
      }
    }, 1500);
  });
}

// workpage

const cards = document.querySelectorAll(".card");
for (const card of cards) {
  const motion = window.matchMedia("(prefers-reduced-motion)");
  const threshold = 15;

  function handleHover(e) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (threshold / 2 - horizontal * threshold).toFixed(2);
    const rotateY = (vertical * threshold - threshold / 2).toFixed(2);

    card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  }

  function resetStyles(e) {
    card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  }

  if (!motion.matches) {
    card.addEventListener("mousemove", handleHover);
    card.addEventListener("mouseleave", resetStyles);
  }
}
