const navbar = document.querySelector("nav");
const abouth1 = document.querySelector("about-h1");



window.onscroll = function() {backgroundBlack(), fixedButtons()};

function backgroundBlack() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
navbar.style.backgroundColor="black";
  } else {
    navbar.style.backgroundColor= null;
  }
}


function scrollDown(){
  const section = document.getElementById('sp');
  const navHeight = 81.2;
  const sectionPosition = section.getBoundingClientRect().top;
  const finalScrollPosition = sectionPosition - navHeight;

  window.scrollTo({
       top: finalScrollPosition,
  });
}



function scrollToNotifications(){
  const section = document.getElementById('notif');
  const navHeight = 81.2;
  const sectionPosition = section.getBoundingClientRect().top;
  const finalScrollPosition = sectionPosition - navHeight;

  window.scrollTo({
       top: finalScrollPosition,
  });
}

function scrollToWeekly(){
  const section = document.getElementById('weekly');
  const navHeight = 81.2;
  const sectionPosition = section.getBoundingClientRect().top;
  const finalScrollPosition = sectionPosition - navHeight;

  window.scrollTo({
       top: finalScrollPosition,
  });
}

function scrollToTipsNTricks(){
  const section = document.getElementById('tipsntricks');
  const navHeight = 81.2;
  const sectionPosition = section.getBoundingClientRect().top;
  const finalScrollPosition = sectionPosition - navHeight;

  window.scrollTo({
       top: finalScrollPosition,
  });
}


const rightButton = document.querySelector(".next");
const leftButton = document.querySelector(".previous");


const latest = document.querySelector(".latest-posts");


function fixedButtons() {
  if (window.matchMedia('(max-width: 1010px)').matches &&  window.scrollY > 600 && window.pageYOffset < 2000) {
rightButton.style.position="fixed";
leftButton.style.position="fixed";
  } else {
    rightButton.style.position="static";
    leftButton.style.position="static";

  }
}


