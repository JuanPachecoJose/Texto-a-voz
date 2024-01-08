document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.querySelector('nav');
  menuIcon.addEventListener('click', function () {
    navMenu.classList.toggle('show-menu');
    menuIcon.classList.toggle('clicked');
  });
  document.addEventListener('click', function (event) {
    const isMenuClicked = navMenu.contains(event.target) || menuIcon.contains(event.target);
    if (!isMenuClicked && navMenu.classList.contains('show-menu')) {
      navMenu.classList.remove('show-menu');
      menuIcon.classList.remove('clicked');
    }
  });
});
