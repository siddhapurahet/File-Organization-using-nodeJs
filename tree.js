let fs = require("fs");
let path = require("path");

function treeFunc(dirPath){
    if(dirPath == undefined){
        //process.cwd();
        treeHelper(process.cwd(), "");
        //console.log("Kindly Enter the path");
        return;
    }
    else{
        let doesPathExists = fs.existsSync(dirPath);
        if(doesPathExists){
            treeHelper(dirPath, "");
        }
        else{
            console.log("No such directory found");
            return;
        }
    }
}

function treeHelper(dirPath, indent){
     //check if dirPath is file or folder, if it is file then just print and return.
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        let fileName = path.basename(dirPath);
        console.log(indent + "|---" + fileName);
    }
    else{
        let dirName = path.basename(dirPath);
        console.log(indent + "|---" + dirName);
        let childNames = fs.readdirSync(dirPath);
        for(let i=0; i<childNames.length; i++){
            let childPath = path.join(dirPath, childNames[i])
            treeHelper(childPath, indent+"\t");
        }
    }
}

module.exports = {
    helpKey: treeFunc
}