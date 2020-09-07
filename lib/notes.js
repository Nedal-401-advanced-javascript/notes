'use strict';

class Note{
    constructor(obj){
        this.execute(obj)
    }
    
    execute(obj){
        if (obj.getParse.action){
            this.add(obj.getParse.payload)
        }
    }

    add(text){
        let noteObj={
            id:Math.floor(Math.random() * 101),//random
            text:text
        }
        console.log('Adding Note: '+noteObj.text);
    }
}
// Exports a constructor function

module.exports=Note;


