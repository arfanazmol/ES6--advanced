const numbers = [32, 4, 45, 65, 56, 7, 8,]
const total = numbers.reduce((previous, current) => previous + current, 0)
console.log(total)

const sum = numbers.reduce((p, c) => p + c, 0)
console.log(sum)