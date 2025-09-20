  // Hamburger Menu and Side Menu
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

function closeMenuHandler() {
  sideMenu.classList.remove("show-menu");
  menuOverlay.classList.remove("show-overlay");
  hamburger.classList.remove("open");
  hamburger.addEventListener("click", openMenu);
}

function toggleMenu() {
  const isOpen = sideMenu.classList.contains("show-menu");
  sideMenu.classList.toggle("show-menu");
  menuOverlay.classList.toggle("show-overlay");
  hamburger.classList.toggle("open");
}

hamburger.addEventListener("click", toggleMenu);
    
    // Reveal on scroll
    function revealOnScroll() {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 120;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }
    window.addEventListener("scroll", revealOnScroll);
    
    // Navbar active link switching
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li a");
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      navLi.forEach(li => {
        li.classList.remove("active");
        if (li.getAttribute("href") === "#" + current) {
          li.classList.add("active");
        }
      });
    });