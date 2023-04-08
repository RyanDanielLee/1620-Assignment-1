const body = document.querySelector('body');
const darkModeButton = document.querySelector('.darkModeButton');
const cancelButton = document.querySelector(".cancelButton");
const saveButton = document.querySelector(".saveButton");
const textArea = document.querySelector("textarea");
const newNoteButton = document.querySelector(".newNoteButton");

//Dark & Light Theme Toggle
darkModeButton.addEventListener('click', () => {
  body.classList.toggle('darkMode');
  if (body.classList.contains('darkMode')) {
    darkModeButton.textContent = 'Light Theme';
  } else {
    darkModeButton.textContent = 'Dark Theme';
  }
});

//Cancel Button
cancelButton.addEventListener("click", () => {
  // hide text area, save button, and cancel button
  textArea.style.display = "none";
  saveButton.style.display = "none";
  cancelButton.style.display = "none";
});

//New Note Button
newNoteButton.addEventListener('click', () => {
    textArea.style.display = 'block';
    textArea.value = '';
    saveButton.style.display = 'block';
    cancelButton.style.display = 'block';
});

