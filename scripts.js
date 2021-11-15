const hamburgerIcon = document.querySelector('#hamburger');
const hamburgerNavBar = document.querySelector('.hamburgerNav');
const windowSize =  window.matchMedia('(min-width: 768px)');

// Navbar closed by default
let toggler = 'closed'

// Open Navbar
function openNav() {
  hamburgerNavBar.style.width = '150%';
  hamburgerNavBar.style.paddingLeft = '2rem';
  hamburgerIcon.innerHTML = '&#10005;';
  toggler = 'open'
};

// Close Navbar
function closeNav() {
  hamburgerNavBar.style.width = '0';
  hamburgerNavBar.style.paddingLeft = '0';
  hamburgerIcon.innerHTML = '&#9776;';
  toggler = 'closed'
};

// Toggles Navbar open and shut
function toggle() {
  if (toggler == 'closed') {
    openNav()
  } else {
    closeNav()
  }
}

// All buttons that open or shut Navbar
hamburgerIcon.addEventListener('click', toggle);

// Resets Navbar defaults on window resize
function resetNavOnDesktop() {
  if (windowSize.matches) {
    closeNav();
    hamburgerNavBar.style.width = 'auto';
    hamburgerNavBar.style.paddingLeft = '0';
   } else {
    closeNav();
   }
}
window.addEventListener('resize', resetNavOnDesktop)