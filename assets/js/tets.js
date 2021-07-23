const carros = [
    {
        id: 0,
        brand: 'AnyBrand1',
        model: 'AnyModel1',
        color: 'blue',
        year: 2019,
        price: '2000usd',
        photo: 'https://motor.elpais.com/wp-content/uploads/2018/12/Bugatti-Chiron-2017-1600-1c-1800x728.jpg'
    },
    {
        id: 1,
        brand: 'AnyBrand2',
        model: 'AnyModel2',
        color: 'red',
        year: 2020,
        price: '2000usd',
        photo: 'https://motor.elpais.com/wp-content/uploads/2018/12/Bugatti-Chiron-2017-1600-1c-1800x728.jpg'
    }
];

localStorage.setItem("carros", JSON.stringify(carros));

const arreglos = JSON.parse(localStorage.getItem("carros"));

let data3 = {
    id: 2,
    brand: 'AnyBrand3',
    model: 'AnyModel3',
    color: 'Blue',
    year: 2022,
    price: '4000 usd',
    photo: 'https://motor.elpais.com/wp-content/uploads/2018/12/Bugatti-Chiron-2017-1600-1c-1800x728.jpg'
}
arreglos.push(data3);
localStorage.clear();
localStorage.setItem("carros", JSON.stringify(arreglos));

let data4 = {
    id: 3,
    brand: 'AnyBrand4',
    model: 'AnyModel4',
    color: 'Blue4',
    year: 4444,
    price: '4000 usd',
    photo: 'https://motor.elpais.com/wp-content/uploads/2018/12/Bugatti-Chiron-2017-1600-1c-1800x728.jpg'
}

arreglos.push(data4);
localStorage.clear();
localStorage.setItem("carros", JSON.stringify(arreglos));

console.log(arreglos[1]);

// Objeto
// [{"id":0,"brand":"AnyBrand1","model":"AnyModel1","color":"blue","year":2019,"price":"2000usd","photo":"https://motor.elpais.com/wp-content/uploads/2018/12/Bugatti-Chiron-2017-1600-1c-1800x728.jpg"},{"id":1,"brand":"AnyBrand2","model":"AnyModel2","color":"red","year":2020,"price":"2000usd","photo":"https://motor.elpais.com/wp-content/uploads/2018/12/Bugatti-Chiron-2017-1600-1c-1800x728.jpg"}]