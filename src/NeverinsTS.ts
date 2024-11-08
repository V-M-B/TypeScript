//never
//used in :
// 1>a fun that always throws an error 
// 2>A function that has an ifinite loop
// 3>A variable that can never have a value

// 1>a fun that always throws an error 
function throwError(msg:string):never{
    throw new Error(msg)
}

// 2>A function that has an ifinite loop
function infiniteloop():never{
    while(true)
    {}
}


// 3>A variable that can never have a value
//compile time error
let x:never

function neverReturn():never{
    while(true)
    {}
}
x=neverReturn()