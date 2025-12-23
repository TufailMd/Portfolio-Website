const roles = ["Coder.", "Problem Solver."];
let roleIndex = 0;
let charIndex = 0;
const roleElement = document.getElementById("role-text");

let typingDelay = 120; // ms
let eraseDelay = 60;
let holdDelay = 900;

function typeRole() {
  if (!roleElement) return;

  if (charIndex < roles[roleIndex].length) {
    roleElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingDelay);
  } else {
    // text completed, hold then erase
    setTimeout(eraseRole, holdDelay);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, eraseDelay);
  } else {
    // move to next role
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, typingDelay);
  }
}

// Start animation when page loads
document.addEventListener("DOMContentLoaded", () => {
  typeRole();

  // Set year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
