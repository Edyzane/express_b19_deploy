let fs = require("fs")

let arguments = process.argv

if(arguments.length < 3){
    console.log("error in arguments")
    process.exit()
}

let source = arguments[2]
let target = arguments[3]

fs.readFile(source, (error, data)=>{
    if(error){
        console.log(error)
        process.exit()
    }
    console.log("file read success")
    // console.log(data);
    // console.log(data.toString);

    fs.writeFile(()=>{
        if(error){
            console.log(error);
            process.exit()
        }
        console.log("writing from source to target")
        console.log("file copy success")
    })
})

//fix this
