// Typeing Text In Heading
let p = document.querySelector(".home h3");
let textRtl = "مطور الوجهات الاماميه للمستخدم";
let index = 0;
function typeingRtl() {
  index += 1;
  p.textContent = textRtl.slice(0, index);
  if (index >= 30) {
    index = 0;
  }
}

setInterval(() => typeingRtl(), 300);

// Hidden Loader
let loader = document.getElementById("load");

document.body.style.overflow = "hidden";

setTimeout(function () {
  loader.style.cssText = "opacity: 0; transition: all 1s linear;";
  document.body.style.overflow = "auto";
}, 2000);

setTimeout(function () {
  loader.style.cssText = "z-index: -3; opacity: 0;";
}, 3000);

// Show And Hidden Nav

let divider = document.getElementById("divider"),
  nav = document.getElementById("nav"),
  closeDiv = document.getElementById("close");

divider.onclick = function () {
  divider.classList.add("open");
  if (divider.classList.contains("open") === true) {
    nav.style.cssText =
      "z-index: 55555; opacity: 1; visibility: visible; transition: all 1s linear;";
  }
};
closeDiv.onclick = function () {
  nav.style.cssText =
    "z-index: -1; opacity: 0; visibility: hidden; transition: all 1s linear;";
};

// Added Class Active To Li Link

let lis = document.querySelectorAll(".nav-ul li a");

lis.forEach((li) => {
  li.addEventListener("click", function () {
    lis.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
      nav.style.cssText =
        "z-index: -1; opacity: 0; visibility: hidden; transition: all 1s linear;";
    });
  });
});

// Scroll To Top

let btn = document.querySelector("#top");

btn.style.opacity = "0";

window.onscroll = function () {
  if (window.scrollY >= 500) {
    btn.style.cssText = "opacity: 1; transition: all 0.3s ease-in-out;";
  } else {
    btn.style.cssText = "opacity: 0; transition: all 0.3s ease-in-out;";
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
if (
  window.localStorage.getItem("color") !== null
  // window.localStorage.getItem("colorAlt") !== undefined
) {
  html.style.cssText = `--yellow-color: ${window.localStorage.getItem(
    "color"
  )};`;
  // html.style.cssText = `--yellow-color-alt: ${window.localStorage.getItem("color-alt")};`;
} else {
  html.style.cssText = `--yellow-color: #dc9e4b;`;
}

edit.forEach((li) => {
  li.addEventListener("click", (e) => {
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // window.localStorage.setItem("color-alt", e.currentTarget.dataset.colorAlt);
    html.style.cssText = `--yellow-color: ${e.currentTarget.dataset.color};`;
  });
});

// Fill Bar
let progress = document.querySelector(".progress"),
  prog = document.querySelectorAll(".prog");

window.addEventListener("scroll", function () {
  const progressWidth = progress.getBoundingClientRect().top;
  if (window.innerHeight > progressWidth) {
    prog.forEach((bar) => {
      const barWidth = bar.dataset.prgo;
      bar.style.width = `${barWidth}%`;
    });
  } else {
    prog.forEach((bar) => {
      bar.style.width = `0`;
    });
  }
});

// Cut Class Active To Nav
let home = document.getElementById("home");

let about = document.getElementById("about");

let skills = document.getElementById("skills");

let services = document.getElementById("services");

let works = document.getElementById("works");

let contact = document.getElementById("contact");

window.addEventListener("scroll", () => {
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
    let abouta = document.querySelector('.nav-ul a[href="#about"]');
    lis.forEach((li) => {
      li.classList.remove("active");
      abouta.classList.add("active");
    });
  }
  skillsScroll = skills.getBoundingClientRect().top;
  if (window.innerHeight > skillsScroll) {
    let skillsa = document.querySelector('.nav-ul a[href="#skills"]');
    lis.forEach((li) => {
      li.classList.remove("active");
      skillsa.classList.add("active");
    });
  }
  servicesScroll = services.getBoundingClientRect().top;
  if (window.innerHeight > servicesScroll) {
    let servicesa = document.querySelector('.nav-ul a[href="#services"]');
    lis.forEach((li) => {
      li.classList.remove("active");
      servicesa.classList.add("active");
    });
  }
  worksScroll = works.getBoundingClientRect().top;
  if (window.innerHeight > worksScroll) {
    let worksa = document.querySelector('.nav-ul a[href="#works"]');
    lis.forEach((li) => {
      li.classList.remove("active");
      worksa.classList.add("active");
    });
  }
  contactScroll = contact.getBoundingClientRect().top;
  if (window.innerHeight > contactScroll) {
    let contacta = document.querySelector('.nav-ul a[href="#contact"]');
    lis.forEach((li) => {
      li.classList.remove("active");
      contacta.classList.add("active");
    });
  }
});
