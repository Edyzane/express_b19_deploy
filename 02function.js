console.log("working with functions")

function welcomeClassic() {
    console.log("i am class function");
}

function welcomeClassicParameter(name) {
    console.log(`${name}, welcome to classic function `);
    console.log(name + ", welcome to classic function");    
}

//rewrite as arrow func
let welcomeArrow = ()=> {
    console.log("i am class function");
}

let welcomeArrowParameter = (name)=> {
    console.log(`${name}, welcome to classic function `);
    console.log(name + ", welcome to classic function");    
}

welcomeClassic()
welcomeClassicParameter("ayo")
welcomeArrow()
welcomeArrowParameter("ayo2")