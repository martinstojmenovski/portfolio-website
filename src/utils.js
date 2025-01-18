

export const activeAnimation = () => {
  const progress_inner = document.querySelectorAll(".scroll-animate"),
    triggerBottom = (window.innerHeight / 5) * 5 - 20;
  progress_inner.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.style.visibility = "visible";
      box.classList.add("animate__active");
    }
  });
};

export const stickyNav = () => {
  let offset = window.scrollY;
  const sticky = document.querySelectorAll(".header");
  sticky.forEach((sticky) => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("animate-in", "sticky");
      } else {
        sticky.classList.remove("animate-in", "sticky");
      }
    }
  });
};

export const toggleMenu = (e) => {
  e.preventDefault();
  const menu = document.querySelector(".menu-btn");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menu.classList.add("no-touch");
    document.body.classList.remove("no-scroll");
    document.querySelector(".menu-full-overlay").classList.remove("is-open");
    document.querySelector(".menu-full-overlay").classList.remove("has-scroll");
    document
      .querySelector(".menu-full-overlay")
      .classList.remove("animate-active");
    setTimeout(function () {
      document.querySelector(".menu-full-overlay").classList.remove("visible");
      menu.classList.remove("no-touch");
    }, 1000);
  } else {
    menu.classList.add("active", "no-touch");
    document.body.classList.add("no-scroll");
    document
      .querySelector(".menu-full-overlay")
      .classList.add("is-open", "visible");
    setTimeout(function () {
      document
        .querySelector(".menu-full-overlay")
        .classList.add("has-scroll", "animate-active");
      menu.classList.remove("no-touch");
    }, 1000);
  }
  return false;
};

export const linkClick = () => {
  const menu = document.querySelector(".menu-btn");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menu.classList.add("no-touch");
    document.body.classList.remove("no-scroll");
    document.querySelector(".menu-full-overlay").classList.remove("is-open");
    document.querySelector(".menu-full-overlay").classList.remove("has-scroll");
    document
      .querySelector(".menu-full-overlay")
      .classList.remove("animate-active");
    setTimeout(function () {
      document.querySelector(".menu-full-overlay").classList.remove("visible");
      menu.classList.remove("no-touch");
    }, 1000);
  } else {
    menu.classList.add("active", "no-touch");
    document.body.classList.add("no-scroll");
    document
      .querySelector(".menu-full-overlay")
      .classList.add("is-open", "visible");
    setTimeout(function () {
      document
        .querySelector(".menu-full-overlay")
        .classList.add("has-scroll", "animate-active");
      menu.classList.remove("no-touch");
    }, 1000);
  }
  return false;
};

export const jarallaxAnimation = () => {
  let { jarallax, jarallaxVideo } = require("jarallax");
  jarallax(document.querySelectorAll(`.js-parallax`), {
    speed: 0.65,
    type: "scroll",
  });
};
