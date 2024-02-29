let http = require('http')
let url = require('url')

//function  chaining
let server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html'})
    console.log(request.url)
    let myQuery = request.url
   // console.log(url.parse(request.url,true).query)
    let parameter = url.parse(myQuery, true).query
    console.log(parameter);
    
    let id = parameter.vid1
    let id2 = parameter.vid2
    response.write(`<h1>ID: ${id} </h1>`)  //also use backtick
    response.write("<h2>Player</h2>")
    response.write(`<h1>ID: ${id2} </h1>`)  //also use backtick
    response.write("<h2>Player</h2>")
    response.write(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
    response.write(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${id2}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
    //y2jYeFCIpRY
    response.end()

}).listen(1234,()=>{
    console.log("listening on port 1234");
})

