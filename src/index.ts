// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }
type Person={
    name?:  string;
    age: number;
    greet(): void;   
}

const Person1:Person={
    // name:"asd",
    age:78,
    greet:()=>{
        console.log("mrg");
        
    },
    // phone:78945613
}

console.log(Person1);
console.log(Person1.greet());
