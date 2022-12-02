x=5; // global variable, we can create without var, let, const
demo()
function demo(){  
    // x = undefined
    console.log(this.x)// global variable access
    console.log(x) //local varivale , output=> undefined
    var x=7;
    console.log(x) // 7 will be the out put 
}

