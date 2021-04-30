const toggle = document.querySelector("input");
const body = document.querySelector("body");

const checkTheme = () => {
  if (toggle.checked) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }
};

toggle.addEventListener("click", () => checkTheme());
