// Hidden Loader
let loader = document.getElementById("load");

document.body.style.overflow = "hidden";

setTimeout(function () {
  loader.style.cssText = "opacity: 0; z-index: -999999995555599955;";
  document.body.style.overflow = "auto";
}, 2000);

// Show And Hidden Nav

let divider = document.getElementById("divider"),
  nav = document.getElementById("nav"),
  closeDiv = document.getElementById("close");

divider.onclick = function () {
  divider.classList.add("open");
  if (divider.classList.contains("open") === true) {
    nav.style.cssText = "z-index: 55555; opacity: 1; visibility: visible;";
  }
};
closeDiv.onclick = function () {
  nav.style.cssText = "z-index: -1; opacity: 0; visibility: hidden;";
};

// Added Class Active To Li Link

let lis = document.querySelectorAll(".nav-ul li a");

lis.forEach((li) => {
  li.addEventListener("click", function () {
    lis.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
      nav.style.cssText = "z-index: -1; opacity: 0; visibility: hidden;";
    });
  });
});

// Typing Text In Heading

let p = document.querySelector(".home h3"),
  text = "Front End Web Developer";

let index = 0;

function Typing() {
  index += 1;
  p.textContent = text.slice(0, index);
  if (index >= 24) {
    index = 0;
  }
}

setInterval(() => Typing(), 300);

// Scroll To Top

let btn = document.querySelector("#top");

btn.style.opacity = "0";

window.onscroll = function () {
  if (window.scrollY >= 500) {
    btn.style.cssText = "opacity: 1;";
  } else {
    btn.style.cssText = "opacity: 0;";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Edit The WebSite

let cog = document.getElementById("cog");

cog.onclick = function () {
  cog.classList.toggle("open");
  if (cog.classList.contains("open") === true) {
    document.getElementById("edit").style.cssText =
      "opacity: 1;visibility: visible; transition: all 0.5s linear;";
  } else {
    document.getElementById("edit").style.cssText =
      "opacity: 0;visibility: hidden; transition: all 0.5s linear;";
  }
};

// Color Change In On Click

let edit = document.querySelectorAll(".edit .color li"),
  html = document.querySelector("html");
if (window.localStorage.getItem("color") !== null) {
  html.style.cssText = `--yellow-color: ${window.localStorage.getItem(
    "color"
  )};`;
} else {
  html.style.cssText = `--yellow-color: #dc9e4b;`;
}

edit.forEach((li) => {
  li.addEventListener("click", (e) => {
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    html.style.cssText = `--yellow-color: ${e.currentTarget.dataset.color};`;
  });
});

let home = document.getElementById("home"),
  about = document.getElementById("about"),
  skills = document.getElementById("skills"),
  services = document.getElementById("services"),
  works = document.getElementById("works"),
  contact = document.getElementById("contact"),
  progressSpans = document.querySelectorAll(".the-progress span"),
  section = document.querySelector(".progress");

window.addEventListener("scroll", () => {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    progressSpans.forEach((span) => {
      span.style.width = "0";
    });
  }
  //
  // Remove And Add Class Active To Nav Link
  //
  homeScroll = home.getBoundingClientRect().top;
  if (window.innerHeight > homeScroll) {
    let homeA = document.querySelector('.nav-ul a[href="#home"]');
    lis.forEach((li) => {
      li.classList.remove("active");
      homeA.classList.add("active");
    });
  }
  aboutScroll = about.getBoundingClientRect().top;
  if (window.innerHeight > aboutScroll) {
    let aboutA = document.querySelector('.nav-ul a[href="#about"]');
    lis.forEach((li) => {
      li.classList.remove("active");
      aboutA.classList.add("active");
    });
  }
  skillsScroll = skills.getBoundingClientRect().top;
  if (window.innerHeight > skillsScroll) {
    let skillsA = document.querySelector('.nav-ul a[href="#skills"]');
    lis.forEach((li) => {
      li.classList.remove("active");
      skillsA.classList.add("active");
    });
  }
  servicesScroll = services.getBoundingClientRect().top;
  if (window.innerHeight > servicesScroll) {
    let servicesA = document.querySelector('.nav-ul a[href="#services"]');
    lis.forEach((li) => {
      li.classList.remove("active");
      servicesA.classList.add("active");
    });
  }
  worksScroll = works.getBoundingClientRect().top;
  if (window.innerHeight > worksScroll) {
    let worksA = document.querySelector('.nav-ul a[href="#works"]');
    lis.forEach((li) => {
      li.classList.remove("active");
      worksA.classList.add("active");
    });
  }
  contactScroll = contact.getBoundingClientRect().top;
  if (window.innerHeight > contactScroll) {
    let contactA = document.querySelector('.nav-ul a[href="#contact"]');
    lis.forEach((li) => {
      li.classList.remove("active");
      contactA.classList.add("active");
    });
  }
});
