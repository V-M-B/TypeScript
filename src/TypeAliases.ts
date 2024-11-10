// Type Aliases
// create new name for existing type
// using type reserved keyword

// Define a new type alias 'User' for a user object
type User = {
    name: string;
    age: number;
    location: string;
};

// Function that accepts a single 'User' object and returns a string
const printUserInfo = (user: User) => {
    return `Name:( ${user.name}) Age:( ${user.age})`;
};

// Create a user object that matches the 'User' type
const user: User = {
    name: "Varun",
    age: 23,
    location: "India"
};

// Call the function with a single object argument
const opvalue = printUserInfo(user);
console.log(opvalue);





// Optional Type
//read-only

type User1={
    name:string;
    age?:number;
}

const user1:User1={
    name:"abc",
}

console.log(`Nmae:${user1.name}`);
