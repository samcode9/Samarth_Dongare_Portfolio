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