let express = require('express')
let mongoose = require('mongoose')
let tweet = require('./model/tweets')
let cors = require('cors')
//create express app
let app = express()

//configure cors
app.use(cors())

//configure express app to encode and decode json objects
app.use(express.json())

//connect to mongodb db
let dbstring = "mongodb+srv://melledzan:0DqQdBCqF6alwcNW@cluster0.vu9yeze.mongodb.net/tweetdb"
mongoose.connect(dbstring)
let db = mongoose.connection

//check if db connection is success
db.on('open',()=>{
    console.log("connection to mongodb in cloud!");
})

//create 1st api
app.get("/",(request,response)=>{
    console.log("api / called with GET")
    response.send("welcome to Express API GET")    
})

app.post("/",(request,response)=>{
    console.log("api / called with POST")
    response.send("welcome to Express API POST")    
})

//get  list from 
app.get("/1.0/tweet/all",(request, response)=>{
    console.log("GET /1.0/tweet/all");
    //use model to get all the tweets
    tweet.find({})
    .then((data)=>{
        console.log("query success for /1.0/tweet/all")
        response.json(data)
    })
    .catch((error)=>{
        console.log("query error for /1.0/tweet/all")
        response.json(error)
    })
})

//add document to mongodb
app.post("/1.0/tweet/add", (request, response)=>{
    console.log("POST /1.0/tweet/add")
    let rBody = request.body
    console.log(rBody)

    //create blank instance of tweet model
    let newTweet = new tweet({
        username:rBody.username,
        post:rBody.post,
        likes:rBody.likes,
        dislikes:rBody.dislikes,
        image:rBody.image,
        youtube:rBody.youtube
    })

    //save the model instance in db
    newTweet.save()
        .then((data)=>{
            console.log("query success for /1.0/tweet/add");
            response.json(data)
        })
        .catch((error)=>{
            console.log("query failed for /1.0/tweet/add");
            response.json(error)
        })
    

    //response.json({})
})

//update document : means value will change  PUT
app.put("/1.0/tweet/update/:id", (request, response)=>{
    console.log("POST /1.0/tweet/update/:id")
    let id = request.params.id
    
    let rBody = request.body
    console.log(rBody)
    //extract request body from incoming request
    //create blank instance of tweet model
    // let newTweet = new tweet({
    //     username:rBody.username,
    //     post:rBody.post,
    //     likes:rBody.likes,
    //     dislikes:rBody.dislikes,
    //     image:rBody.image,
    //     youtube:rBody.youtube
    // })
    // console.log(newTweet)

    tweet.findByIdAndUpdate(id,rBody, {new:true})
            .then((data)=>{
                console.log("query success for /1.0/tweet/update/:id");
                response.json(data)
            })
            .catch((error)=>{
                console.log("query failed for /1.0/tweet/update/:id");
                response.json(error)
            })

    //response.json({})


//delete tweet by id
app.delete("/1.0/tweet/delete/:id",(request,response)=>{
    let id = request.params.id
    console.log(id)
    tweet.findByIdAndDelete(id)
        .then((data)=>{
            console.log("query success for /1.0/tweet/delete/:id");
            response.status(200).json(data)
        })
        .catch((error)=>{
            console.log("query failed for /1.0/tweet/delete/:id");
            response.status(500).json(error)
    })
})


//find tweet by id
app.get("/1.0/tweet/:id",(request,response)=>{
    console.log("GET /1.0/tweet/:id")
    //extract id
    let id = request.params.id
    console.log(id)
    tweet.findById(id)
        .then((data)=>{
            console.log("query success for /1.0/tweet/:id");
            response.status(200).json(data)
        })
        .catch((error)=>{
            console.log("query failed for /1.0/tweet/:id");
            response.status(500).json(error)
        })

})


let PORT = 1234
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})