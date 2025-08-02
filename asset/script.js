const toggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;
const navbar = document.getElementById("mainNavbar");

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("bg-dark", "text-light");
  navbar.classList.remove("navbar-light", "bg-body-tertiary");
  navbar.classList.add("navbar-dark", "bg-dark");
  themeIcon.classList.remove("bi-moon");
  themeIcon.classList.add("bi-sun");
}

toggleBtn.onclick = function () {
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-light");
  if (body.classList.contains("bg-dark")) {
    navbar.classList.remove("navbar-light", "bg-body-tertiary");
    navbar.classList.add("navbar-dark", "bg-dark");
    themeIcon.classList.remove("bi-moon");
    themeIcon.classList.add("bi-sun");
    localStorage.setItem("theme", "dark");
  } else {
    navbar.classList.remove("navbar-dark", "bg-dark");
    navbar.classList.add("navbar-light", "bg-body-tertiary");
    themeIcon.classList.remove("bi-sun");
    themeIcon.classList.add("bi-moon");
    localStorage.setItem("theme", "light");
  }
};
