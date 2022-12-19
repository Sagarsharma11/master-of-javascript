// It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single
//  argument in sequence.

const outer=(a)=>{
    return function inner(b){
        return function mostinner(c){
            return(a+b+c)
        }
    }
}

let val = outer(12)(12)(12)
console.log(val)