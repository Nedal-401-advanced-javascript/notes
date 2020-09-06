'use strict';

//To read command line arguments
const minimist=require('minimist')

function Input(){

//read command line arguments
const args=minimist(process.argv.slice(2));

//evaluates and validates the input 
//Returns an instance containing the action to perform and the payload for the action
if(args.a){
    console.log(`Adding: ${args.a} `);
    return{
        action:'add',
        payload:args.a
    }
}else {
    console.log('check the argument');
    return false; }

}

//Exports a constructor function
module.exports=Input;