// Toggle Theme
function toggleTheme() {
  document.body.classList.toggle("light");
}

// Toggle Hamburger Menu
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}
const items = document.querySelectorAll(".ach-item");
const descBox = document.getElementById("ach-desc");
const descWrapper = document.getElementById("ach-desc-box");

let active = -1;

function updateAchievements() {
  items.forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    const trigger = window.innerHeight * 0.55; // better visual midpoint

    if (rect.top < trigger && rect.bottom > trigger) {

      if (active !== index) {
        active = index;

        const newText = item.getAttribute("data-desc");

        descWrapper.classList.add("fade-out");

        setTimeout(() => {
          descBox.textContent = newText;
          descWrapper.classList.remove("fade-out");
          descWrapper.classList.add("fade-in");
        }, 150);
      }
    }
  });
}

window.addEventListener("scroll", updateAchievements);
// ANIMATE ABOUT SECTION
const aboutSection = document.getElementById("about-skills");
const profileImg = document.querySelector(".animate-profile");
const skillCards = document.querySelectorAll(".skill-card");

function animateAboutSection() {
  const rect = aboutSection.getBoundingClientRect();
  const trigger = window.innerHeight * 0.4; // when 70% of section enters viewport

  if(rect.top < trigger) {
    // Animate profile image
    profileImg.classList.add("visible");

    // Animate skills one by one with stagger
    skillCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("visible");
      }, index * 250); // 200ms delay between cards
    });

    // Remove event listener once animated
    window.removeEventListener("scroll", animateAboutSection);
  }
}

window.addEventListener("scroll", animateAboutSection);
window.addEventListener("load", animateAboutSection); // in case section is visible on load
// Animate About & Skills section when it enters viewport
const aboutObserverOptions = {
  threshold: 0.6 // trigger when 20% visible
};

const aboutObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      // Profile image
      const profile = entry.target.querySelector('.animate-top');
      if(profile){
        profile.classList.add('in-view');
      }

      // Skill cards
      const cards = entry.target.querySelectorAll('.animate-left');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('in-view');
        }, index * 600); // stagger animation 150ms
      });

      // Stop observing once animation triggered
      observer.unobserve(entry.target);
    }
  });
}, aboutObserverOptions);


if(aboutSection){
  aboutObserver.observe(aboutSection);
}