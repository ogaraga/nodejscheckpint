//importing some modules
const http = require("http");

//creating server
http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type":"text/html"}) //indicates successful response.
    
    response.write("<h1>Hello Node!!!!</h1>\n");// render html index on local3000.
    response.end();//ends the server creation

}).listen(3000);//port listening at 3000

console.log("local Server creation was successful @ http://127.0.0.1.3000/");
console.log("program Ended!")