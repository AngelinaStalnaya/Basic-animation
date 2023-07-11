
// main

setTimeout(() => {

  var animationItems = document.querySelectorAll('.hidden-for-animation');

  animationItems.forEach(function (element) {
    element.classList.remove('hidden-for-animation');
  });


  gsap.from(".hero__title", {
    opacity: 0,
    y: 200,
    ease: "power4.out",
    duration: 1,
  });

  gsap.from(".hero__btn", {
    opacity: 0,
    y: 200,
    ease: "power4.out",
    duration: 1,
  });

  gsap.from('.hero__descr', {
  opacity: 0,
  ease: "slow(0.7, 0.7,false)",
  delay: 0.8,
  duration: 2,
  });

  gsap.from('.photos-wrap img:first-child', {
    opacity: 0,
    ease: "circ.out",
    duration: 0.8,
    scale: 0.8,
    delay: 0.8,
  });

  gsap.from('.photos-wrap img:nth-child(2)', {
    opacity: 0,
    ease: "sine.out",
    duration: 0.8,
    scale: 0.8,
    delay: 1,
  });

  gsap.from('.photos-wrap img:last-child', {
    opacity: 0,
    ease: "sine.out",
    duration: 0.8,
    scale: 0.8,
    delay: 1.2,
  });

  gsap.from('.photos__author', {
    opacity: 0,
    ease: "slow(0.7, 0.7,false)",
    duration: 1.5,
    delay: 1.5,
  });

}, 3000);



// burger

var burger = document.querySelector('.burger');
var closeMenu = document.querySelector('.close');
var menu = document.querySelector('.menu');

menuTop = gsap.timeline();
menuMain = gsap.timeline();
menuSub = gsap.timeline();

menuSub.reverse();
menuMain.reverse();
menuTop.reverse();


burger.onclick = function() {

  toggleMenuOpen();

  menuTop.play();
  menuMain.play();
  menuSub.play();
};

closeMenu.onclick = function() {
  (menuSub.reverse(),
  menuMain.reverse().then(toggleMenuOpen),
  menuTop.delay(1).reverse());
};


menuTop.fromTo('.menu--open', {ease:'sine.out', y: 30, opacity: 0}, {ease: 'sine.out', y: 0, opacity: 1,  duration: 0.9});

menuMain.fromTo('.menu__top', {ease: "sine.out", y: -140, opacity: 0}, {ease: 'sine.out', y: 0, opacity: 1, duration: 0.5})
        .fromTo('.nav__list', {ease: "slow(0.7, 0.7,false)", y: 100, opacity: 0}, {ease: "slow(0.7, 0.7,false)", y: 0, opacity: 1, duration: 0.5, delay: 0.2})
        .fromTo('.social', {ease: "slow(0.7, 0.7,false)", y: 100,  opacity: 0}, {ease: "slow(0.7, 0.7,false)", y: 0, opacity: 1, duration: 0.7});


menuSub.fromTo('.close', {ease: 'sine.out', opacity: 0}, {ease: 'sine.out', opacity: 1, duration: 0.2, delay: 0.4})
       .fromTo('.menu__right', {ease: "slow(0.5, 0.5,false)", y: 100, opacity: 0}, {ease: "slow(0.5, 0.5,false)", y: 0, opacity: 1, duration: 0.7, delay: 0.6});


function toggleMenuOpen() {
  if (document.querySelector('menu--open') != null) {
    menu.classList.remove('menu--open');
  } else {
    menu.classList.toggle('menu--open');
  };
};
