#!/usr/bin/env node
'use strict';
const Input= require('./lib/input.js');
const Note= require('./lib/notes.js')

const obj= new Input();

Note.execute(obj);


// Parses the command line input and returns the command and data
// Passes the command to the Notes library, which executes the command