hamburgerIcon = document.querySelector('#hamburger');
hamburgerNavBar = document.querySelector('.hamburgerNav');

// hamburgerNavItems = hamburgerNavBar.querySelectors('li');

let toggler = 'closed'

function openNav() {
  hamburgerNavBar.style.width = '150%';
  hamburgerNavBar.style.paddingLeft = '2rem';
  hamburgerIcon.innerHTML = '&#10005;';
  toggler = 'open'
};

function closeNav() {
  hamburgerNavBar.style.width = '0';
  hamburgerNavBar.style.paddingLeft = '0';
  hamburgerIcon.innerHTML = '&#9776;';
  toggler = 'closed'
};

function toggle() {
  if (toggler == 'closed') {
    openNav()
  } else {
    closeNav()
  }
}

hamburgerIcon.addEventListener('click', toggle);