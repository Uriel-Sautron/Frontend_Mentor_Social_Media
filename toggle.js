const toggle = document.querySelector("input");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
  if (toggle.checked) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }
});
