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

let divider = document.getElementById("divider");
let nav = document.getElementById("nav");
let closeDiv = document.getElementById("close");

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

// Typeing Text In Heading

let p = document.querySelector(".home h3");
let text = "Front End Web Developer";

let index = 0;

function typeing() {
  index += 1;
  p.textContent = text.slice(0, index);
  if (index >= 24) {
    index = 0;
  }
}

setInterval(() => typeing(), 300);

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
