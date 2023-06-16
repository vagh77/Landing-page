const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menumobile");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
