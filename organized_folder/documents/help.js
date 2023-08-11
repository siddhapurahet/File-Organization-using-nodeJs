function helpFunc(){
    console.log(`list of Help commands : 
    node main.js tree "directoryPath"
    node main.js organize "directoryPath"
    node main.js help`);
}

module.exports = {
    helpKey: helpFunc
}