// Hidden Loader
let loader = document.getElementById("load");

document.body.style.overflow = 'hidden'

setTimeout(function () {
  loader.style.cssText = "opacity: 0; transition: all 1s linear;";
  document.body.style.overflow = 'auto'
}, 2000);

setTimeout(function () {
  loader.style.cssText = "z-index: -3; opacity: 0;";
}, 3000);

// Show And Hidden Nav

let divider = document.getElementById("divider");
let nav = document.getElementById("nav");
let icon = document.getElementById("icon");

divider.onclick = function () {
  divider.classList.toggle("open");
  if (divider.classList.contains("open") === true) {
    nav.style.cssText =
      "left: 0; display: block; transition: all .3s linear;";
    document.getElementById("navbar").style.cssText =
      "width: calc(100% - 50px); transition: all 0.3s linear;";
  } else {
    nav.style.cssText = "left: -50px; transition: all 0.3s linear;";
    document.getElementById("navbar").style.cssText =
      "width: 100%; transition: all 0.3s linear;";
  }
};

// Added Class Active To Nav Icon

if (window.scrollY >= 600) {
  document.getElementById("home").classList.add("active");
} else {
  document.getElementById("home").classList.remove("active");
}
