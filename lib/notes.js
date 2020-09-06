// Has a prototype method called execute() that executes the correct operation, given the above object
// How will you use that object to run the correct method?
// You can predict that add won’t be the only action we’re going to have to handle…
// Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed
function Note(id,text) {
    this.id=id;
    this.text=text
}

Note.execute=function(obj){
    if (obj.action){
        Note.add(obj.payload)
    }
}
Note.add=function (text) {
    
    let noteObj={
        id:n,
        text:text
    }
    console.log(noteObj);
}

// Exports a constructor function
module.exports=Note;