window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  if (window.pageYOffset > 20) {
    header.classList.add("small");
  } else {
    header.classList.remove("small");
  }
});

window.addEventListener("load", function() {
  var header = document.querySelector("header");
  header.classList.remove("small");
});