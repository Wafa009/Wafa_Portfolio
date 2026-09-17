// Dark Mode Toggle with Icon Change
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  const icon = toggleBtn.querySelector("i");
  if (body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Auto Close Menu on Link Click
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const roles = [
  "Software Developer",
  "CSE Student",
  "Web Developer",
  "Problem Solver",
  "Tech Enthusiast"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {
  const current = roles[index];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingText.textContent = current.substring(0, charIndex);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === current.length) {
    speed = 1500; // pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


// LinkedIn button animation

const linkedinButtons = document.querySelectorAll(".linkedin-btn");

linkedinButtons.forEach(button => {

    button.addEventListener("click", function(){

        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "";
        },150);

    });

});

const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

timelineItems.forEach((item) => observer.observe(item));