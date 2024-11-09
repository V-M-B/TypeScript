// 2 types of typeScript
// using sqr bracket notaions -> indicates an array of specific type

const numbers: number[]=[1,2,3,4]
numbers.push(88)
// numbers.push(true)ERROR
console.log(numbers);

//Array<type> notation -> indicates an array of a specific type
const names:Array<string>=["a","b","c"]