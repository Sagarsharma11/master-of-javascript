// higher order function or first class function

// when a function treated as a variable like passing an argument and receves a parameter to function called 
// higher order function or first class function

function abc(xyz){
    xyz();
    var myfunwithlexicalscope = () =>{
        console.log("myfunwithlexicalscope")
    }
    return myfunwithlexicalscope;
}

function xyz(){
    console.log("xyz")
}
var x = abc(xyz)
x()

// arrow function 
const myvar = ()=>{
    console.log("Arrow function")
}

// annonymous function 
//fetch(url,function (){ function body })