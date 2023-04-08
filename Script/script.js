const body = document.querySelector('body');
const darkModeButton = document.querySelector('.darkModeButton');
const cancelButton = document.querySelector(".cancelButton");
const saveButton = document.querySelector(".saveButton");
const textArea = document.querySelector("textarea");
const newNoteButton = document.querySelector(".newNoteButton");
const noteList = document.querySelector(".left-aligned");
const ulList = document.querySelector("ul");

let notesArray = [];

const placeHolder = [
    {title: "Note One", body: "This is the first note"},
    {title: "Note Two", body: "This is the second note"}
];

notesArray.concat(placeHolder);

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

//Save Button
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

ulList.addEventListener("click", (event) => {
    const noteTitle = event.target.textContent;

    const note = notesArray.find(note =>
        note.title === noteTitle
    );

    if (note) {
        textArea.value = note.body;
    }
});