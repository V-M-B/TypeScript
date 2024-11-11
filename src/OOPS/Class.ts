// Class
class People{
    readonly name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
const people=new People("Bill gates",99)
console.log(people);
