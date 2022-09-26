console.log("hello world");

function addNote() {
    var div = document.createElement('div');
    div.style.backgroundColor = document.getElementById("noteColor").value;
    div.className = 'note';
    document.body.appendChild(div);

    let content = document.createTextNode(document.getElementById('noteTitle').value);
    div.appendChild(content);

    content = document.createElement('br');
    div.appendChild(content);

    content = document.createTextNode(document.getElementById('noteSubject').value);
    div.appendChild(content);

    content = document.createElement('br');
    div.appendChild(content);

    //delete note button
    let button = document.createElement('button');
    button.textContent = "Delete Note";
    div.appendChild(button);

    //code to remove the note
    button.addEventListener('click', function handleClick() {
        div.remove();
    })

    //edit note button - place values from div back into the form and change the text of the edit button to update.
    button = document.createElement('button');
    button.textContent = "Edit Note";
    div.appendChild(button);

}

function editNote() {
    //take the values back into the form field and allow for them to be edited. If clicked change add note button to update note
}
