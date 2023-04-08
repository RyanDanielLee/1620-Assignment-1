//Dark & Light Theme Toggle
const body = document.querySelector('body');
const darkModeButton = document.querySelector('.darkModeButton');

darkModeButton.addEventListener('click', () => {
  body.classList.toggle('darkMode');
  if (body.classList.contains('darkMode')) {
    darkModeButton.textContent = 'Light Theme';
  } else {
    darkModeButton.textContent = 'Dark Theme';
  }
});