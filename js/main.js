// Smooth nav link animation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "scale(1.05)";
  });
  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1)";
  });
});

// Fade-in animation on scroll for other sections
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .hero, .page-header').forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// Make contact form visible immediately
const contactFormSection = document.querySelector('.contact-form');
contactFormSection.classList.add('fade-in', 'visible');

// Formspree submission
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            formMessage.style.color = "#a855f7"; // purple success
            formMessage.textContent = "Thanks! Your message has been sent.";
            contactForm.reset();
        } else {
            formMessage.style.color = "#ff4c4c"; // red error
            formMessage.textContent = "Oops! Something went wrong. Please try again.";
        }
    }).catch(() => {
        formMessage.style.color = "#ff4c4c";
        formMessage.textContent = "Network error. Please try again.";
    });
});
