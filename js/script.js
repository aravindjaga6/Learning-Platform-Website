document.addEventListener('DOMContentLoaded', function() {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('.navbar-collapse');
  var navbarNav = document.querySelector('.navbar-nav');
  var loginButtons = document.querySelector('.loginForm');
  var container = document.querySelector('.container');

  function moveLoginButtons() {
    if (window.innerWidth < 1000) {
      navbarNav.appendChild(loginButtons);
    } else {
      container.appendChild(loginButtons);
    }
  }

  document.addEventListener('click', function(event) {
    if (navbarCollapse.classList.contains('show')) {
      if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
        navbarCollapse.classList.remove('show');
      }
    }
  });

  window.addEventListener('resize', moveLoginButtons);

  // Initial call to move buttons on load
  moveLoginButtons();
});
