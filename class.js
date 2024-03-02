const products = [{
        id: 1,
        name: 'hp',
        price: 70000
    },
    {
        id: 2,
        name: 'lenevo',
        price: 60000
    },
    {
        id: 3,
        name: 'dell',
        price: 55000
    },
    {
        id: 4,
        name: 'asus',
        price: 200000
    },

]

//has some properties, method
class product {
    country = 'bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new product('le le lenovo')
// console.log(lenovo)
// lenovo.speak('oba kita kau')


class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching math')
    }
}

const tapan = new Teacher('tapan sir', 'physics')
console.log(tapan);

const rashid = new Teacher('rashid', 'english')
