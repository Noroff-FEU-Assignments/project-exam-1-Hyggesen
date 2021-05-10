const navbar = document.querySelector("nav");
const abouth1 = document.querySelector("about-h1");



window.onscroll = function() {backgroundBlack()};

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