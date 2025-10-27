// Reveal sections on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);

// Animate skill bars when visible
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".fill");
  const skillsSection = document.getElementById("skills");
  const rect = skillsSection.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    skillBars.forEach(bar => {
      const target = bar.getAttribute("data-percent");
      bar.style.width = target;
    });
  }
}
window.addEventListener("scroll", animateSkillBars);
