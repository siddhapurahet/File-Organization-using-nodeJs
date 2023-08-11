let fs = require("fs");
let path = require("path");

let types = {
    media : ["mp4", "mkv"],
    archieve : ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents : ['html', 'css', 'docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex', 'js'],
    app : ['exe', 'dmg', 'pkg', "deb"]
}

function organizeFunc(dirPath){
    //1. input -> directory path given
    if(dirPath == undefined){
        let destPath = process.cwd();
        //console.log("Kindly Enter the path");
        return;
    }
    else{
        let doesPathExists = fs.existsSync(dirPath);
        if(doesPathExists){
            //2. create -> organized files -> directory
            destPath = path.join(dirPath, "organized_folder");
            if(fs.existsSync(destPath)){
                console.log("directory already exists.");
                return;
            }
            fs.mkdirSync(destPath);
            organizeHelper(dirPath, destPath);
            return;
        }
        else{
            console.log("No such directory found");
            return;
        }
    }
}


function organizeHelper(source, destination){
    
    let files = fs.readdirSync(source);
    //console.log(files);
    for(let i=0; i<files.length; i++){
        let filePath = path.join(source, files[i]);

        let isFile = fs.lstatSync(filePath).isFile();
        if(isFile){
            //console.log(`it is file ${isFile} with name ${files[i]} and has path ${filePath}`);

            //3. identify category of all files present in the directory
            let category = getCategory(files[i]);
            //console.log(`${files[i]} belongs to category of ${category}`);

            //4. copy/cut the file to the organized directory inside of category folder to which it belongs.
            putFiletoDestination(filePath, destination, category);
        }
    }
    return;
}

function getCategory(file){
    let fileExtension = path.extname(file);
    fileExtension = fileExtension.slice(1);
    for(let type in types){
        let extType = types[type];
        for(let i=0; i<extType.length; i++){
            if(extType[i] == fileExtension){
                return type;
            }
        }
    }
    return "others";
}

function putFiletoDestination(sourcefile, destFolder, fileCategory){
    let categoryPath = path.join(destFolder, fileCategory);
    if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath);
    }
    let newFileName = path.basename(sourcefile);
    let newfileAddress = path.join(categoryPath, newFileName);
    fs.copyFileSync(sourcefile, newfileAddress);
}

module.exports = {
    helpKey: organizeFunc
}