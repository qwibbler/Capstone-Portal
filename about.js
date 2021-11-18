// Navbar Variables
const windowSize = window.matchMedia('(max-width: 768px)');
const hamburgerIcon = document.querySelector('#hamburger');
const hamburgerNavBar = document.querySelector('.hamburgerNav');
const hamburgerNavItems = hamburgerNavBar.querySelectorAll('li');
const wrapper = document.querySelector('.allSpeakers');
let togglerNav = 'closed'; // Navbar closed by default
// Sign Form Variables
const form = document.querySelector('.formpage');
const formBg = document.querySelector('.formbg');
const signup = document.querySelector('.signupForm');
const login = document.querySelector('.loginForm');
const loginBtn = document.querySelectorAll('.loginBtn');
const formSwitch = document.querySelectorAll('.formSwitch');
let formToggler = 'none'; // Form off by default
let defaultForm = signup; // Default Shows signup form

// Open Navbar
function openNav() {
  if (windowSize.matches) {
    hamburgerNavBar.style.width = '150%';
    hamburgerNavBar.style.paddingLeft = '2rem';
    hamburgerIcon.innerHTML = '&#10005;';
    togglerNav = 'open';
  }
}

// Close Navbar
function closeNav() {
  if (windowSize.matches) {
    hamburgerNavBar.style.width = '0';
    hamburgerNavBar.style.paddingLeft = '0';
    hamburgerIcon.innerHTML = '&#9776;';
    togglerNav = 'closed';
  }
}

// Toggles Navbar open and shut
function toggle() {
  if (togglerNav === 'closed') {
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

// Login/Sign up Form

function toggleForm() {
  if (formToggler === 'none') {
    form.style.display = 'flex';
    defaultForm.style.display = 'flex';
    formToggler = 'show';
  } else {
    form.style.display = 'none';
    defaultForm.style.display = 'none';
    formToggler = 'none';
  }
}

for (let i = 0; i < loginBtn.length; i += 1) {
  loginBtn[i].addEventListener('click', toggleForm);
}
formBg.addEventListener('click', toggleForm);

function switchForms() {
  toggleForm();
  defaultForm = (defaultForm === signup) ? login : signup;
  toggleForm();
}

for (let i = 0; i < formSwitch.length; i += 1) {
  formSwitch[i].addEventListener('click', switchForms);
}