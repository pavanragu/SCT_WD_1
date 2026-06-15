// navbar scroll effect
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", function() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("open");
});

// close nav when a link is clicked (for mobile)
var allLinks = document.querySelectorAll(".nav-links a");
for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener("click", function() {
        document.getElementById("navLinks").classList.remove("open");
    });
}


// contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("message").value;

    if (name == "" || email == "" || msg == "") {
        document.getElementById("successMsg").textContent = "Please fill all the fields.";
        document.getElementById("successMsg").style.color = "red";
    } else {
        document.getElementById("successMsg").textContent = "Message sent! We will get back to you soon.";
        document.getElementById("successMsg").style.color = "green";
        document.getElementById("contactForm").reset();
    }
});
