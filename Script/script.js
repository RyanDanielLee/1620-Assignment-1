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

//Cancel Button
const cancelButton = document.querySelector(".cancelButton");
const saveButton = document.querySelector(".saveButton");
const textArea = document.querySelector("textarea");

cancelButton.addEventListener("click", () => {
  // hide text area, save button, and cancel button
  textArea.style.display = "none";
  saveButton.style.display = "none";
  cancelButton.style.display = "none";
});