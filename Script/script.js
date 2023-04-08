/**
 * @fileoverview This file contains the JavaScript code for the
 * Notes web app. It is used to create, edit, and delete notes.
 * It also has a dark mode toggle. 
 * 
 * @author "Ryan Lee"
 * @StudentID "A01365270"
 * @Date "April 7, 2023"
 */
const body = document.querySelector('body');
const darkModeButton = document.querySelector('.darkModeButton');
const cancelButton = document.querySelector(".cancelButton");
const saveButton = document.querySelector(".saveButton");
const textArea = document.querySelector("textarea");
const newNoteButton = document.querySelector(".newNoteButton");
const noteList = document.querySelector(".left-aligned");
const ulList = document.querySelector("ul");

//Notes Array with placeholder notes
let notesArray = [
    {title: "note one", body: "This is the first placeholder note"},
    {title: "note two", body: "This is the second placeholder note"}
];

/**
 * @function darkModeToggle
 * 
 * @description This function toggles the dark mode on and off.
 * It also changes the text of the dark mode button to  light mode to
 * reflect the current theme.
 * This function also adds an event listener to the dark mode button.
 */
darkModeButton.addEventListener('click', () => {
  body.classList.toggle('darkMode');
  if (body.classList.contains('darkMode')) {
    darkModeButton.textContent = 'Light Theme';
  } else {
    darkModeButton.textContent = 'Dark Theme';
  }
});

/**
 * @function cancelButton
 * 
 * @description This function hides the text area, save button, and cancel button
 * when the cancel button is clicked.
 * This function also adds an event listener to the cancel button.
 */
cancelButton.addEventListener("click", () => {
  textArea.style.display = "none";
  saveButton.style.display = "none";
  cancelButton.style.display = "none";
});

/**
 * @function newNoteButton
 * 
 * @description This function displays the text area, save button, and cancel button
 * when the new note button is clicked. It also clears the text area when the textarea
 * is already present.
 * This function also adds an event listener to the new note button.
 */
newNoteButton.addEventListener('click', () => {
    textArea.style.display = 'block';
    textArea.value = '';
    saveButton.style.display = 'block';
    cancelButton.style.display = 'block';
});

/**
 * @function saveButton
 * 
 * @description This function saves a note to the notes array and displays it in the
 * notes list. It also clears the text area when the save button is clicked.
 * This function also adds an event listener to the save button.
 */
saveButton.addEventListener("click", () => {
    const newNoteTitle = prompt("Enter the title of the note");

    const newNote = {
        title: newNoteTitle,
        body: textArea.value
    }

    notesArray.push(newNote);

    const newListElement = document.createElement("li");
    newListElement.textContent = newNoteTitle;
    noteList.appendChild(newListElement);
    textArea.value = "";
});

/**
 * @function ulList
 * 
 * @description This function displays the notes in the notes array when they are clicked
 * on in the notes list.
 * This function also adds an event listener to the ulList.
 */
ulList.addEventListener("click", (event) => {
    const noteTitle = event.target.textContent;

    const note = notesArray.find(note =>
        note.title === noteTitle
    );

    if (note) {
        textArea.value = note.body;
    }
});