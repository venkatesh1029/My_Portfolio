// Example: Smooth scroll for navigation (if needed)
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission functionality (you can change this later to handle actual submissions)
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent! I will get back to you shortly.");
});
