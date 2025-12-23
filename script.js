const roles = ["Coder.", "Problem Solver."];
let roleIndex = 0;
let charIndex = 0;
const roleElement = document.getElementById("role-text");

let typingDelay = 120;
let eraseDelay = 60;
let holdDelay = 900;

/* ================= TYPEWRITER ================= */
function typeRole() {
  if (!roleElement) return;

  if (charIndex < roles[roleIndex].length) {
    roleElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingDelay);
  } else {
    setTimeout(eraseRole, holdDelay);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, eraseDelay);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, typingDelay);
  }
}

/* ================= THEME TOGGLE ================= */
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
});

/* ================= ON LOAD ================= */
document.addEventListener("DOMContentLoaded", () => {
  typeRole();

  // Footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    icon.classList.replace("fa-moon", "fa-sun");
  }
});
