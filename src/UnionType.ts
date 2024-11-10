// Union 
// used to allow a variable or parameter to multiple "types @ a time"

// variable

//  example-1


let password: number | string
password=12
password="qwe"
console.log(password);



//  example-2
type Account={
    acc:number,
    place:string,

}

type details={
 accType:string,

}
let user44: Account | details={
    acc:321231,
    place:"indo",
    accType:"savings",
};


//  example-3

const items:(number|string)[]=[1,2,3,'hello']
console.log(items);

//function
