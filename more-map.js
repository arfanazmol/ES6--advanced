//------------------------step-1-------------------------------//
const numbers = [23, 45, 67, 89, 78];

const doubled = numbers.map(num => num * 2);
// console.log(doubled)

//------------------------step-2-------------------------------//
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus)

//------------------------step-3-------------------------------//
const friends = ['Digonto', 'Sayed Hasan', 'Mustakim', 'Abir Hasan', 'Saad' ];

const lengths = friends.map(frnd => frnd.length)
// console.log(lengths)

const first = friends.map(friend => friend[0]);
console.log(first)
