#!/usr/bin/env node   //This is Shabbang syntax used which helps OS to run any particular script on environment, in thic case the environment is NodeJs.

let treeFuncCaller = require("./tree");
let organizeFuncCaller = require("./organize");
let helpFuncCaller = require("./help");

let fs = require("fs");
let path = require("path");

let input = process.argv.slice(2); //as in the below samples, this command will take input from terminal and it will sloce in form of array elements and it will skip the first element as that is only "node".
//console.log(input);

//node main.js tree "directoryPath"
//node main.js organize "directoryPath"
//node main.js help



let command = input[0];

switch(command){
    case "tree":
        treeFuncCaller.helpKey(input[1]);
        //treeFunc(input[1]);
        break;

    case "organize":
        organizeFuncCaller.helpKey(input[1]);
        //organizeFunc(input[1]);
        break;
    
    case "help":
        helpFuncCaller.helpKey(); 
        //helpFunc();
        break;

    default :
        console.log("🙄...Incorrect command");
        break;
}












