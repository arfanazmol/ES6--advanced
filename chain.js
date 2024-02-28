// data access

const data = [{ id: 1, name: 'shakib al hasan', adress:'magura'}]

// console.log(data [0].name)

const products = {
    count: 500000,
    data: [
        { id: 20, name:'fojle rabbi', adress:'chuadanga'},
        {id: 21, name: 'jinat moslim', adress:'jhenaidah'},

    ]

}
// console.log(products.data[1].adress)

const user = {
    id: 60003,
    name: 'sabbir hossen',
    adress: {
        street: {
            first:'chuadanga',
            secend:'bagan para',
            third:'rohim box vila',
        },
    }
}
console.log(user.adress.street?.secend)


const user2 ={
    id: 60004,
    name:'fakhar zaman',
    adress: {
        city: 'lahore',
        country: 'bangladesh',
    }
}


console.log(user2.adress.street?.secend)