// public,private,Protected
class People1 {
    private first:string;
    public last:string;
    constructor(first:string,last:string) {
        this.first=first;
        this.last=last;
    }
    getrname():string{
        return `${this.first}`
    }
}

let p1=new People1("Kim","Jon")
// console.log(p1);
// console.log(p1.first);error becz the first is " private "
console.log(p1.getrname());



