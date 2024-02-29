let fs = require('fs')

let message = `
good morning
ssss
aaaa
yyyy

#@$@E@@!@
asd?
`

fs.writeFile("target.txt", message,(error)=>{
    if(error){
        throw error
    }
    console.log("file write successful");
})