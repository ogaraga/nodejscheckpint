// importing some modules

var fs = require("fs");

// read into file asynchroniously
fs.readFile("welcome.txt", (err, data)=>{
    if(err){
        throw err;
    }
    else{
        console.log(data.toString());
    }
});
console.log("Program terminated!");