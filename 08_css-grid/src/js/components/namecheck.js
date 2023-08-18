// проверка имени и email

let inputName = document.querySelector(".input__name");
let nameError = document.querySelector('.input__name_error');
let inputEmail = document.getElementById('Email');
let emailError = document.getElementById('Email-error');
const regex = new RegExp(/[^A-Za-zА-яа-я]/gm);
const emailRegex = new RegExp(/\@/gm);

inputName.addEventListener('mouseleave', function () {

  let inputName = document.querySelector(".input__name");
  const result = regex.test(inputName.value);

  if (result) {
    nameError.style.visibility = 'visible';
    inputName.style.border = '1px solid #f06666';
  } else {
    nameError.style.visibility = 'hidden';
    inputName.style.border = 'none';
  }
});


inputEmail.addEventListener('mouseleave', function () {

  let inputEmail = document.getElementById('Email');
  const resultEmail = regex.test(inputEmail.value);

  if (!resultEmail) {
    emailError.style.visibility = 'visible';
    inputEmail.style.border = '1px solid #f06666';
  } else {
    emailError.style.visibility = 'hidden';
    inputEmail.style.border = 'none';
  }
});
