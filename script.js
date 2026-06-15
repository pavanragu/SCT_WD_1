// ---- NAVBAR: Change style on scroll ----

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    // Add 'scrolled' class when user scrolls down more than 50px
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ---- HAMBURGER MENU: Toggle mobile nav ----

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

// Close menu when a nav link is clicked
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
});


// ---- CONTACT FORM: Basic form submit handler ----

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("formMessage").textContent = "Thank you, " + name + "! Your message has been sent.";
        contactForm.reset();
    } else {
        document.getElementById("formMessage").textContent = "Please fill in all fields.";
    }
});
