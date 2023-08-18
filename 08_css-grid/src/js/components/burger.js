 // бургер

 let burger = document.querySelector('.header__burger');
 let menu = document.querySelector('.burger__menu');
 let menuLinks = document.querySelectorAll('.burger__link');
 let burgerBtn = document.querySelector('.burger__btn');

 burger.addEventListener('click',
   function () {
     menu.style.visibility = 'visible';
     document.body.classList.toggle('stop-scroll');
     document.body.style.overflow = 'hidden';
   })

 menuLinks.forEach(function (element) {
   element.addEventListener('click', function () {
     burger.style.visibility = 'hidden';
     menu.style.visibility = 'hidden';
     document.body.style.overflow = 'visible';
   })
 })

 burgerBtn.addEventListener('click',
  function() {
    menu.style.visibility = 'hidden';
    document.body.style.overflow = 'visible';
 })


