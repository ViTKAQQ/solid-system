
const links = document.querySelectorAll('.scp-nav a');
const sections = document.querySelectorAll('.scp-content');


sections.forEach(section => {
  if (section.id !== 'about') {
    section.style.display = 'none';
  }
});


links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    sections.forEach(section => {
      section.style.display = 'none';
    });


    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }
  });
});

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [" ViTRAL", " best", " the",];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});



(function () {
  const textElements = document.querySelectorAll(".auto-resize-text");
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  const links = document.querySelectorAll('.scp-nav a');
  const sections = document.querySelectorAll('.scp-content');


  function adjustTextSize() {
    const screenWidth = window.innerWidth;
    let fontSize = 0;

    if (screenWidth <= 100) {
      fontSize = screenWidth / 100;
    } else if (screenWidth <= 500) {
      fontSize = screenWidth / 30;
    } else if (screenWidth <= 768) {
      fontSize = screenWidth / 50;
    } else if (screenWidth <= 1440) {
      fontSize = screenWidth / 90;
    } else {
      fontSize = 24;
    }

    textElements.forEach(element => {
      element.style.fontSize = fontSize + "px";
    });
  }

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  function navigateToSection(event) {
    event.preventDefault();
    sections.forEach(section => {
      section.style.display = 'none';
    });

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }
  }

  function initialize() {
    adjustTextSize();
    adjustTextSize();
    window.addEventListener('resize', adjustTextSize);
    window.addEventListener('orientationchange', adjustTextSize);

    links.forEach(link => {
      link.addEventListener('click', navigateToSection);
    });

    if (textArray.length) setTimeout(type, newTextDelay + 250);
  }

  document.addEventListener("DOMContentLoaded", initialize);
})();
