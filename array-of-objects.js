const products = [
    {id:1, name:'hp', price: 70000},
    {id:2, name:'lenevo', price: 60000},
    {id:3, name:'dell', price: 55000},
    {id:4, name:'asus', price: 200000},
    {id:4, name:'mac', price: 300000},
    {id:4, name:'i pad', price: 150000},
    {id:4, name:'micro soft', price: 56000},
]

//map
const allprice = products.map(product => product.name)
// console.log(allprice)
const prices = products.map(p => p.price)
// console.log(prices)

//forEach
products.forEach(p => console.log(p.id))
console.log(products)

//filter
const expensive = products.filter(p => p.price > 70000)
// console.log(expensive)

//find
const cost = products.find(p => p.price > 100000)
// console.log(cost)


//reduce
const total = products.reduce((acum, current) => acum + current.price , 0)
console.log(total)