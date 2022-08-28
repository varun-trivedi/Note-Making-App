const chalk = require("chalk");

const yargs = require("yargs");

const notes = require("./notes.js");
//customize yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
    command:"add",
    describe: "add a new note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:"Note Body",
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
    }

})
//create remove command
yargs.command({
    command:"remove",
    describe:"remove a note",
    handler:function(argv){
        notes.removeNote(argv.title);
    }
})
//creating list command
yargs.command({
    command:"list",
    describe:"Listing notes",
    handler:function(){
        notes.listNodes();
    }
})
//creating read command
yargs.command({
    command:"read",
    describe:"Reading note",
    handler:function(argv){
        notes.readNode(argv.title);
    }
})
yargs.parse();

//add,remove,read,list
