const fs = require("fs");
const chalk = require("chalk");
//function to add notes
const addNote = (title,body) =>{

const notes = loadNotes();
const duplicateNotes = notes.filter((note)=>note.title === title);
if(duplicateNotes.length === 0){
    notes.push({
        title: title,
        body : body
    })
    saveNotes(notes);
    console.log(chalk.green.inverse(("New Note Added")));
}
else
{
    console.log(chalk.red.inverse("Error : Note with same title already exists"));
}


}
//function to remove note
const removeNote = (title)=>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=>note.title !== title);
    if(duplicateNotes.length === notes.length)
    {
        console.log(chalk.red.inverse("Error : No such title exists"));
    }
    else
    {
        console.log(chalk.green.inverse("Note with title " + title + " Successfully Removed"));
        saveNotes(duplicateNotes);
    }

}
//function to list notes
const listNodes = () =>{
    const notes = loadNotes();
    console.log(chalk.inverse("Your Notes"));
    notes.forEach((note) =>{
        console.log(note.title);
    })
}
const readNode = (title) => {
    const notes = loadNotes();
    const findNote = notes.find((note) => note.title === title);
    if(findNote == undefined)
        console.log(chalk.red.inverse("Error : No such note found"));
    else
    {
        console.log(chalk.bold.inverse(findNote.title));
        console.log(findNote.body);
    }
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json",dataJSON);

}
const loadNotes = ()=>{
    try{
        const jnotes = fs.readFileSync("notes.json");
        const jsonNotes = jnotes.toString();
        const notes = JSON.parse(jsonNotes);
        return notes;
    }
    catch(e){
        return [];
    }
    

}
module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNodes: listNodes,
    readNode : readNode
}