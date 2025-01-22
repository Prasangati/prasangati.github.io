function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const body = document.body;

  // Toggle the "open" class for menu and icon
  menu.classList.toggle("open");
  icon.classList.toggle("open");

}
