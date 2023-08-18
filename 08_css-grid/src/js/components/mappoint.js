 // карта контактов

let mapPoint = document.querySelector('.map-point');
let contactsBtn = document.querySelector('.contacts__btn');
let address = document.querySelector('.contacts__address');


mapPoint.addEventListener('click',
  function () {
  address.style.visibility = 'visible';
  contactsBtn.style.visibility = 'visible';
  });

contactsBtn.addEventListener('click',
  function() {
    address.style.visibility = 'hidden';
    contactsBtn.style.visibility = 'hidden';
 });


