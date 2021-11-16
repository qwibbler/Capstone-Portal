const windowSize = window.matchMedia('(max-width: 768px)');
const hamburgerIcon = document.querySelector('#hamburger');
const hamburgerNavBar = document.querySelector('.hamburgerNav');
const hamburgerNavItems = hamburgerNavBar.querySelectorAll('li');
const wrapper = document.querySelector('.allSpeakers');
let togglerNav = 'closed'; // Navbar closed by default
const mobileFeatures = 2; // Number of features to show by default
const moreBtn = document.querySelector('#more');
let togglerMoreBtn = 'More'; // Less shown by default, button says more
const offset = 100;

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

// Try for scrollspy
const links = document.getElementsByClassName('navLink');

function scrollspy() {
  for (let i = 0; i < links.length; i += 1) {
    const currentLink = links[i];
    const page = document.getElementById(currentLink.classList[1]);
    if (page.getBoundingClientRect().top <= offset) {
      for (let j = 0; j < links.length; j += 1) {
        links[j].classList.remove('active');
      }
      currentLink.classList.add('active');
    }
  }
}
window.addEventListener('scroll', scrollspy);

// Create Featured Speakers

const speakers = [
  {
    imgUrl: './img/profiles/6.jpg',
    fullName: 'Aadil Rasheed',
    title: `baaqī hai ab bhī tark-e-tamannā kī aarzū<br>
    kyūñkar kahūñ ki koī tamannā nahīñ mujhe`,
    sample: `He is an important name  in children's 
    literature in Urdu. He has published more than two dozen books of 
    short stories and poetry and received many awards from different 
    Urdu academies of India.`,
  },
  {
    imgUrl: './img/profiles/2.jpg',
    fullName: 'Abdul Hameed',
    title: '25 Aug 1928 | Amritsar, Punjab',
    sample: `Hameed’s first story entitled “Manzil Manzil” 
    was published in the prestigious journal Adab-e Lateef. 
    His literary career began with stories that instantly 
    found their appeal with the readers. They were marked by the
    nostalgic fervor and romantic nostalgia they evoked.`,
  },
  {
    imgUrl: './img/profiles/7.jpg',
    fullName: 'Charagh Barelvi',
    title: ' 05 Sep 1988 | Bareilly, Uttar pradesh',
    sample: `Born in a Hindi spoken Brahmin family, he was very close to 
    poetry and other literature since his childhood. His love for poetry 
    and his intense passion for urdu brought him to urdu poetry.`,
  },
  {
    imgUrl: './img/profiles/9.jpg',
    fullName: 'Aadil Rasheed',
    title: `baaqī hai ab bhī tark-e-tamannā kī aarzū<br>
    kyūñkar kahūñ ki koī tamannā nahīñ mujhe`,
    sample: `He is an important name  in children's 
    literature in Urdu. He has published more than two dozen books of 
    short stories and poetry and received many awards from different 
    Urdu academies of India.`,
  },
  {
    imgUrl: './img/profiles/10.jpg',
    fullName: 'Abdul Hameed',
    title: '25 Aug 1928 | Amritsar, Punjab',
    sample: `Hameed’s first story entitled “Manzil Manzil” 
    was published in the prestigious journal Adab-e Lateef. 
    His literary career began with stories that instantly 
    found their appeal with the readers. They were marked by the
    nostalgic fervor and romantic nostalgia they evoked.`,
  },
  {
    imgUrl: './img/profiles/11.jpg',
    fullName: 'Charagh Barelvi',
    title: ' 05 Sep 1988 | Bareilly, Uttar pradesh',
    sample: `Born in a Hindi spoken Brahmin family, he was very close to 
    poetry and other literature since his childhood. His love for poetry 
    and his intense passion for urdu brought him to urdu poetry.`,
  },
];

function makeFeatures(speaker) {
  wrapper.innerHTML += `
  <div class="speaker">
    <div class="profilePic">
      <img class="imgBack" src="./img/profiles/checker.jpg" alt="" class="back">
      <img class="speakerImg" src=${speaker.imgUrl} alt="Speaker Profile Image">
    </div>
    <div class="speakerDesc">
      <h3 class="speakerName">${speaker.fullName}</h3>
      <h4 class="speakerTitle">${speaker.title}</h4>
      <hr class="smallDivider">
      <p class="speakerSample">${speaker.sample}</p>
    </div>
  </div>`;
}

function mobileDefaultFeatures() {
  wrapper.innerHTML = '';
  for (let i = 0; i < mobileFeatures; i += 1) {
    makeFeatures(speakers[i]);
  }
}

function showAll() {
  wrapper.innerHTML = '';
  speakers.forEach((speaker) => {
    makeFeatures(speaker);
  });
}

function generate() {
  if (windowSize.matches) {
    mobileDefaultFeatures();
  } else {
    showAll();
  }
}
window.addEventListener('load', generate);
window.addEventListener('resize', generate);

// Show More

// When more is selected, make the rest of the features
function showMore() {
  for (let i = mobileFeatures; i < speakers.length; i += 1) {
    makeFeatures(speakers[i]);
  }
}

function toggleMoreLess() {
  if (togglerMoreBtn === 'More') {
    showMore();
    togglerMoreBtn = 'Less';
    moreBtn.innerHTML = 'Less <span> &#x2303;</span>';
  } else {
    mobileDefaultFeatures();
    togglerMoreBtn = 'More';
    moreBtn.innerHTML = 'More <span> &#x2304;</span>';
  }
}
moreBtn.addEventListener('click', toggleMoreLess);
