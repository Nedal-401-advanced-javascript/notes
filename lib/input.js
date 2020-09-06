// On instantiation, evaluates and validates the input
// Is the command (i.e. ‘–add’) a valid command
// Is there data associated with the command
// Returns an instance containing the action to perform and the payload for the action
const minimist=require('minimist')
function Input(){
console.log(process.argv);  
const args=minimist(process.argv.slice(2));
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

module.exports=Input;