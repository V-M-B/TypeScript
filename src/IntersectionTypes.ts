// intersectionTypes
// combining more than one type @ once (type1 and type2)

type UserInfo={
    first:string;
    last:string;
    age:number;
}

type AccountDetails={
    email:string;
    password:string;
}

type  user2=UserInfo & AccountDetails

const infoo:user2={
    first:"Ninja",
    last:"chan",
    age:25,
    email:"nunja@gmail.com",
    password:"jacky",

}

console.log(`Name: ${infoo.first}`);
