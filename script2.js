const hamBurger = document.querySelector(".toggle-sidebar");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});
