function abc(){
    console.log("outer function")
    var a = 5;
    function xyz(){
        console.log(a)
    }
    return xyz;
}
var x = abc();
x();

// closure : function bundled with its lexical environment is known as a closure.
//whenever function is returned, even if its vanished in execution context but still remembers the refrence it was pointing to .
// its not just that function alone it returns but the entire closure and thats where it becomes interesting
