console.log('welcome to my first app')
showNotes();
//If user add note add in local storage //
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener("click", function(e) {
        let addText = document.getElementById("addText");
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(addText.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addText.value = " ";
        // console.log(notesObj)
        showNotes();
    })
    //Show notes below the text area

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html +=
            `<div class="noteCard my-2 mx-4 card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id = "${index}" onclick = "deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show here first "Add Your Note" Thanku !`
    }
}

//deleting the unwanted notes

function deleteNotes(index) {
    // console.log('I am deleting', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


//filtering the notes

let search = document.getElementById('searchTxt');
search.addEventListener("input", function() {
    let inputVal = search.value.toLowerCase();
    // console.log('input event started', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })

})



/* Extra thing that i need to do 
add tittle with date
mark a note as impotant
seprate note b user */