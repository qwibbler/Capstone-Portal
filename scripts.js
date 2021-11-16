const { title } = require("process");

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

// Create Featured Speakers

const speakersInfo = {
  aadil: {
    imgUrl: '/img/profiles/6.jpg',
    fullName: 'Aadil Rasheed',
    title: `baaqī hai ab bhī tark-e-tamannā kī aarzū<br>
    kyūñkar kahūñ ki koī tamannā nahīñ mujhe`,
    sample: `He is an important name  in children's 
    literature in Urdu. He has published more than two dozen books of 
    short stories and poetry and received many awards from different 
    Urdu academies of India. He has written on a wide range of topics in a simple 
    and captivating way. In poetry he used different genres, and experimented with 
    writing Ribiyaat and Na'at for children.`,
  },
  hameed: {
    imgUrl: '/img/profiles/5.png',
    fullName: 'Abdul Hameed',
    title: '25 Aug 1928 | Amritsar, Punjab',
    sample: `Hameed’s first story entitled “Manzil Manzil” 
    was published in the prestigious journal Adab-e Lateef. 
    His literary career began with stories that instantly 
    found their appeal with the readers. They were marked by the
    nostalgic fervor and romantic nostalgia they evoked.`,
  },
  charagh: {
    imgUrl: '/img/profiles/4.jpg',
    fullName: 'Charagh Barelvi',
    title: ' 05 Sep 1988 | Bareilly, Uttar pradesh',
    sample: `Born in a Hindi spoken Brahmin family, he was very close to 
    poetry and other literature since his childhood. His love for poetry 
    and his intense passion for urdu brought him to urdu poetry.`,
  },
  aadil1: {
    imgUrl: '/img/profiles/3.jpg',
    fullName: 'Aadil Rasheed',
    title: `baaqī hai ab bhī tark-e-tamannā kī aarzū<br>
    kyūñkar kahūñ ki koī tamannā nahīñ mujhe`,
    sample: `He is an important name  in children's 
    literature in Urdu. He has published more than two dozen books of 
    short stories and poetry and received many awards from different 
    Urdu academies of India. He has written on a wide range of topics in a simple 
    and captivating way. In poetry he used different genres, and experimented with 
    writing Ribiyaat and Na'at for children.`,
  },
  hameed1: {
    imgUrl: '/img/profiles/2.jpg',
    fullName: 'Abdul Hameed',
    title: '25 Aug 1928 | Amritsar, Punjab',
    sample: `Hameed’s first story entitled “Manzil Manzil” 
    was published in the prestigious journal Adab-e Lateef. 
    His literary career began with stories that instantly 
    found their appeal with the readers. They were marked by the
    nostalgic fervor and romantic nostalgia they evoked.`,
  },
  charagh1: {
    imgUrl: '/img/profiles/1.jpg',
    fullName: 'Charagh Barelvi',
    title: ' 05 Sep 1988 | Bareilly, Uttar pradesh',
    sample: `Born in a Hindi spoken Brahmin family, he was very close to 
    poetry and other literature since his childhood. His love for poetry 
    and his intense passion for urdu brought him to urdu poetry.`,
  },
}