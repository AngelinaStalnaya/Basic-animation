 //  лупа

 let magnifierOpen = document.querySelector('.header__btn');
 let magnifierClose = document.querySelector('.button_close');
 let magnifierWindow = document.querySelector('.search_window')

 magnifierOpen.addEventListener('click', function () {
   magnifierWindow.style.visibility = 'visible';
 })

 magnifierClose.addEventListener('click', function () {
   magnifierWindow.style.visibility = 'hidden';
 })
