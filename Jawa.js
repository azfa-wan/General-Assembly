/*
const menuController = document.getElementsByClassName("hamburger");
menuController.addEventListener('click', function() {
  document.querySelector('.menu-bar-mobile').classList.toggle('menu-open');
});

document.getElementsByClassName('close-menu-bar').addEventListener('click', function() {
  console.log('close anonymous function was clicked');
  document.querySelector('.menu-bar-mobile').classList.remove('menu-open');
});
*/

////////////////////////////////////////////////
/////////  Hamburger Menu Button  //////////////
////////////////////////////////////////////////

const menuController = document.getElementsByClassName("hamburger");
for (let i = 0; i < menuController.length; i++) {
  menuController[i].addEventListener('click', function() {
    document.querySelector('.menu-bar-mobile').classList.toggle('menu-open');
  });
}

const closeMenuButtons = document.getElementsByClassName('close-menu-bar');
for (let i = 0; i < closeMenuButtons.length; i++) {
  closeMenuButtons[i].addEventListener('click', function() {
    console.log('close anonymous function was clicked');
    document.querySelector('.menu-bar-mobile').classList.remove('menu-open');
  });
}

////////////////////////////////////////////////
/////////  Scroll parallax effect  /////////////
////////////////////////////////////////////////

window.addEventListener('scroll', function() {
  const parallaxFactor = window.scrollY * -0.7;

  // Adjust speed based on screen width
  const speedMultiplier = window.innerWidth > 480 ? 1.5 : 1; // Change speed multiplier for larger screens
  
  const circle = document.querySelector('.circle');
  const aboutMe = document.querySelector('#about-me');

  // Apply the adjusted speed multiplier
  circle.style.transform = 'translateY(' + (parallaxFactor * speedMultiplier) + 'px)';
  aboutMe.style.transform = 'translateY(-' + (parallaxFactor * speedMultiplier) + 'px)';

  // Calculate the bottom position of the circle
  const scrollEffectBottom = circle.offsetTop + (circle.offsetHeight / 2);

  // Reveal about-me section when scrolling past the bottom of scroll-effect
    if (window.scrollY > scrollEffectBottom - window.innerHeight) {
      aboutMe.classList.add('visible');
    }
    else {
      aboutMe.classList.remove('visible');
    }
});

////////////////////////////////////////////////
/////////////  Work Image Switcher /////////////
////////////////////////////////////////////////

// Define images for each category
const media = {
    digital: [
      { type: 'image', src: 'https://static.wixstatic.com/media/22503f_8b8232ab6645449d87b847138e40af90~mv2.png/v1/fit/w_1417,h_1015,q_90/22503f_8b8232ab6645449d87b847138e40af90~mv2.webp'},
      { type: 'image', src: 'https://static.wixstatic.com/media/22503f_c4ba3859d8574e1a8455f02c78c1cf20~mv2.png/v1/fit/w_1417,h_1016,q_90/22503f_c4ba3859d8574e1a8455f02c78c1cf20~mv2.webp'},
      { type: 'image', src: 'https://static.wixstatic.com/media/22503f_59665d5ef2244e468aa380c2caeb095f~mv2.png/v1/fit/w_1416,h_1015,q_90/22503f_59665d5ef2244e468aa380c2caeb095f~mv2.webp'},
    ],
    print: [
      { type: 'image', src: 'https://static.wixstatic.com/media/22503f_2f74db4573f44ff4a84ff2cc8b2c19a0~mv2.png/v1/fit/w_2722,h_1722,q_90/22503f_2f74db4573f44ff4a84ff2cc8b2c19a0~mv2.webp' },
      { type: 'image', src: 'https://static.wixstatic.com/media/22503f_064df894dfed4be0b25780f0307ad505~mv2.png/v1/fill/w_452,h_452,fp_0.75_0.47,q_90/22503f_064df894dfed4be0b25780f0307ad505~mv2.webp' },
      { type: 'image', src: 'https://static.wixstatic.com/media/22503f_a65fff42d6b04f5388f410cff5814ad0~mv2.png/v1/fit/w_2722,h_1722,q_90/22503f_a65fff42d6b04f5388f410cff5814ad0~mv2.webp' },
    ],
    animation: [
      { type: 'video', src: 'Images/Video 1.mp4' },
      { type: 'video', src: 'Images/Video 2.mp4' },
      { type: 'video', src: 'Images/Video 3.mp4' },
    ]
};

let currentIndex = 0;
let currentCategory = 'digital'; // Default category

const imageElement = document.getElementById('slideshow-image');
const videoElement = document.getElementById('slideshow-video');

// Function to update the displayed media
function updateMedia() {
  const categoryMedia = media[currentCategory];
  const currentMedia = categoryMedia[currentIndex];

  if (currentMedia.type === 'image') {
    imageElement.src = currentMedia.src;
    imageElement.style.display = 'block'; // Show image
    videoElement.style.display = 'none';  // Hide video
  }
  
  else if (currentMedia.type === 'video') {
    videoElement.src = currentMedia.src;
    videoElement.load(); // Load the new video
    videoElement.muted = true; // Mute the video
    videoElement.style.display = 'block'; // Show video
    imageElement.style.display = 'none';   // Hide image
    videoElement.play(); // Auto-play the video (optional)
  }
}

function updateActiveButton() {
  const buttons = document.querySelectorAll('.ctgry-btn');
  buttons.forEach(button => {
      button.classList.remove('active');
  });
  const activeButton = document.getElementById(`${currentCategory}-btn`);
  activeButton.classList.add('active');
}

// Functions to handle button clicks
document.getElementById('digital-btn').addEventListener('click', () => {
  currentCategory = 'digital';
  currentIndex = 0; // Reset to first media
  updateMedia();
  updateActiveButton(); // Call to update active button
});

document.getElementById('print-btn').addEventListener('click', () => {
  currentCategory = 'print';
  currentIndex = 0; // Reset to first media
  updateMedia();
  updateActiveButton(); // Call to update active button
});

document.getElementById('animation-btn').addEventListener('click', () => {
  currentCategory = 'animation';
  currentIndex = 0; // Reset to first media
  updateMedia();
  updateActiveButton(); // Call to update active button
});

// Event listeners for arrow buttons
document.getElementById('left-btn').addEventListener('click', () => {
  const categoryMedia = media[currentCategory];
  currentIndex = (currentIndex - 1 + categoryMedia.length) % categoryMedia.length;
  updateMedia();
});

document.getElementById('right-btn').addEventListener('click', () => {
  const categoryMedia = media[currentCategory];
  currentIndex = (currentIndex + 1) % categoryMedia.length;
  updateMedia();
});

// Initialize the first media
updateMedia();
updateActiveButton();


////////////////////////////////////////////////
//////////////  FAQ Drop down //////////////////
////////////////////////////////////////////////

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    // Collapse other FAQs
    faqs.forEach((otherFaq) => {
      if (otherFaq !== faq) {
        otherFaq.classList.remove("active");
        
        // Reset icon visibility
        const addIcon = otherFaq.querySelector('.add-icon');
        const subtractIcon = otherFaq.querySelector('.subtract-icon');
        addIcon.style.display = "block";
        subtractIcon.style.display = "none";
      }
    });

    // Toggle the clicked FAQ
    faq.classList.toggle("active");
    
    // Get the icons
    const addIcon = faq.querySelector('.add-icon');
    const subtractIcon = faq.querySelector('.subtract-icon');

    // Toggle icon visibility for the clicked FAQ
    if (faq.classList.contains("active")) {
      addIcon.style.display = "none";
      subtractIcon.style.display = "block";
    } else {
      addIcon.style.display = "block";
      subtractIcon.style.display = "none";
    }
  });
});


////////////////////////////////////////////////
///////////////  Submit reset //////////////////
////////////////////////////////////////////////

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  this.reset();
    });
