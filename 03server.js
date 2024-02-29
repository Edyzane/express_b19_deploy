//import http package from node runtime
const { log } = require('console')
let http = require('http')

let firstServer = http.createServer((request,response)=>{
    console.log("creating server....")
    console.log("-----------------------------------------------")
    console.log(Request);
    console.log("-----------------------------------------------")
    response.writeHead(200, {'Content-Type':'text/plaintext'})  //content can be adjusted default is text/html
    response.write("<h1>Hello from node server</h1>")   
    response.write("another statement")
    response.end()
})


//expose firstserver on port
//netstat to check port that is occupied
//if port is not free it wont run
firstServer.listen(1234, ()=>{
    console.log("listening on port 1234");
})
