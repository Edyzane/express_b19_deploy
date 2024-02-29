let fs = require("fs")
const {log} = require("console")

fs.readFile("hello.txt", (error, data)=>{
    if(error){
        throw error
    }
    console.log("file read success")
    console.log(data);
    console.log(data.toString);
})