//filter selects element based on a condition and returns an array with the elements that fulfilled the condition.

//filter হচ্ছে শর্ত যারা পূরণ করবে তাদের সবাইকে দিবে || আর যদি কারো সাথে না মেলে তাহলে [] দিবে || আর যদি একাধিক ভাবে সবার সাথে মিলে যায় তাহলে array বানিয়ে দিবে।

//----------------------step-1---------------------------------------
const players = [76, 34, 678, 65, 87, 97, 56, 85, 67, 77, 86, ]
// const selected = players.filter(p => p > 80)
// const selected = players.filter(p => p > 70)
// const selected = players.filter(p => p > 50)
// const selected = players.filter(p => p > 90)
const selected = players.filter(p => p %2 === 1 )
console.log(selected)

//----------------------step-2---------------------------------------

const friends = ['Digonto', 'Sayed Hasan', 'Mustakim', 'Abir Hasan', 'Saad' ];

const result = friends.filter(friend => friend.length > 4)
// console.log(result)