const numbers = [2, 3, 6, 8, 4, 9];

const doubled = [];
for (const num of numbers) {
    const double = num * 2;
    doubled.push(double)
}

// console.log(doubled);


//* map ==> loops through each element of the array 
// and do the operation that you passed in the call back function 
// and hold the result from each operation in an array and finally returns you the aray *//


//----------------step-1-------------------
const number = [1, 7, 9, 8, 4, 5];

function doubleIt(num) {
    // console.log('num now', num)
    return num * 3;
}
const result = number.map(doubleIt)
// console.log(result)

//------------------step-2------------------
const numberAll = [1, 7, 9, 8, 4, 5];

function doubleIt(num) {
    // console.log('num now', num)
    return num * 3;
}
//------------------step-3------------------
const double2 = n => n*3;
const output = numberAll.map(double2)
// console.log(output)

//------------------step-4------------------
const output2 = numberAll.map(n => n * 3);
console.log(output2)