const email = document.getElementById('email');
email.addEventListener('input', () => {
  if (email.validity.valid) {
    email.classList.add('valid');
    email.classList.remove('invalid');
  } else {
    email.classList.add('invalid');
    email.classList.remove('valid');
  }
});