/**
 * 1. var let const 
 * 2. defult paremiter
 * 3. template string
 * 4. arrow function (এটা প্রচুর ব্যবহার করতে হবে)
 * 5. destructuring and spread operator
 * 6.Object.keys, Object.values Object.entries
 * 7. for of used in array and string
 * 8.for in loop used in object
 */

const a = 56;
const numbers = [56, 4, 98]
const person = {
    name: 'shakib al hasan'
}

const message = `Hi, ${person.name} has a: ${a} acces to ${numbers [2]}`


if(true){

}

const square = x => x * x;
const sum = (a, b) => a + b;

const { age, z, ...others } = { x: 32, y: 23, z: 3, name:'arfan azmol', age:23 }

const [first, secend, ...remaining] = ['jabeda', 'shobeda', 'maisha', 'ayesha'];