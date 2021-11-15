hamburgerIcon = document.querySelector('#hamburger');
hamburgerNavBar = document.querySelector('.hamburgerNav');
// hamburgerNavItems = hamburgerNavBar.querySelectors('li');

let toggler = 'closed'

function openNav() {
  hamburgerNavBar.style.width = '100%';
  document.body.style.overflow = 'hidden';
  hamburgerIcon.innerHTML = '&#10005;';
  toggler = 'open'
};

function closeNav() {
  hamburgerNavBar.style.width = '0';
  document.body.style.overflow = 'auto';
  hamburgerIcon.innerHTML = '&#9776;';
  toggler = 'closed'
};

hamburgerIcon.addEventListener('click', () => {
  if (toggler == 'closed') {
    openNav()
  } else {
    closeNav()
  }
})