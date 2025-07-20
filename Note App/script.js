const btnEl = document.getElementById('btn');
const noteContainerEl = document.getElementById('app');

btnEl.addEventListener("click", addNote);

function addNote() {
    const notes = getNotes();

    const noteObj = {
        id: Math.floor(Math.random() * 1000000),
        content:"",
    };

    const noteEl = createNoteEl(noteObj.id, noteObj.content);

    noteContainerEl.insertBefore(noteEl, btnEl);
    notes.push(noteObj);
    saveNote(notes)
};


function saveNote(notes) {
    localStorage.setItem("noteApp", JSON.stringify(notes));
}

function createNoteEl(id, content){
    const element = document.createElement("textarea");
    element.classList.add('note');
    element.placeholder = "Empty note";
    element.value = content;
    element.cols = "30";
    element.rows = "10";

    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note?");
        if(warning) {
            deleteNote(id,element);
        };
    });

    element.addEventListener("input", () => {
        updateNote(id, element.value);
    });

    return element;
};

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id);
    saveNote(notes);
    noteContainerEl.removeChild(element);

};

function updateNote(id, content) {
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    saveNote(notes);

}

function getNotes() {
    return JSON.parse(localStorage.getItem("noteApp") || "[]");
};

getNotes().forEach(note => {
    const noteEl = createNoteEl(note.id, note.content);
    noteContainerEl.insertBefore(noteEl, btnEl);
});