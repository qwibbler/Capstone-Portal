const hamburgerIcon = document.querySelector('#hamburger');
const hamburgerNavBar = document.querySelector('.hamburgerNav');
const hamburgerNavItems = hamburgerNavBar.querySelectorAll('li');
const windowSize = window.matchMedia('(max-width: 768px)');

// Navbar closed by default
let toggler = 'closed';

// Open Navbar
function openNav() {
  if (windowSize.matches) {
    hamburgerNavBar.style.width = '150%';
    hamburgerNavBar.style.paddingLeft = '2rem';
    hamburgerIcon.innerHTML = '&#10005;';
    toggler = 'open';
  }
}

// Close Navbar
function closeNav() {
  if (windowSize.matches) {
    hamburgerNavBar.style.width = '0';
    hamburgerNavBar.style.paddingLeft = '0';
    hamburgerIcon.innerHTML = '&#9776;';
    toggler = 'closed';
  }
}

// Toggles Navbar open and shut
function toggle() {
  if (toggler === 'closed') {
    openNav();
  } else {
    closeNav();
  }
}

// All buttons that open or shut Navbar
hamburgerIcon.addEventListener('click', toggle);
hamburgerNavItems.forEach((item) => {
  item.addEventListener('click', closeNav);
});

// Resets Navbar defaults on window resize
function resetNavOnDesktop() {
  if (windowSize.matches) {
    closeNav();
  } else {
    closeNav();
    hamburgerNavBar.style.width = 'auto';
    hamburgerNavBar.style.paddingLeft = '0';
  }
}
window.addEventListener('resize', resetNavOnDesktop);