'use-strict'

const cars = [
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

localStorage.setItem("cars", JSON.stringify(cars));

const CREATE = "create" 
const EDIT = "edit" 
let CARID = 0;
let BUTTONSTATUS = 0;

const printCars = ((dataCars) =>{
    const tbody_content = document.getElementById('tbody-cars');
    tbody_content.innerHTML = '';
    dataCars.forEach((car)=>{
        const car_HTML = `<tr>
                            <td>${car.brand}</td>
                            <td>${car.model}</td>
                            <td>${car.color}</td>
                            <td>${car.year}</td>
                            <td>${car.price}</td>
                            <td><img src="${car.photo}" alt="" width="120px"></td>
                            <td>
                                <button class="btn btn-danger" onclick="deleteCar(${car.id})"><i class="bi bi-trash"></i> Eliminar</button>
                                <button class="btn btn-warning" onclick="showFormEditCar(${car.id})"><i class="bi bi-arrow-repeat"></i> Editar</button>
                            </td>
                        </tr>`;
        tbody_content.innerHTML += car_HTML; 
    });
});
printCars(cars);

const openForm = ()=> {document.getElementById('form-create-cars').classList.remove('d-none'), btnCreate(), BUTTONSTATUS = 1;};

const hidenForm = ()=> document.getElementById('form-create-cars').classList.add('d-none');

const resetForm = ()=> document.getElementById('cars-form').reset();

const getIdSubmmitButton = () => document.getElementById('btn-submmit-form');

const createCar = (()=>{
    const carBrand = document.getElementById('brand').value;
    const carModel = document.getElementById('model').value;
    const carColor = document.getElementById('color').value;
    const carYear = document.getElementById('year').value;
    const carPrice = document.getElementById('price').value;
    const carPhoto = document.getElementById('photo').value;

    const newCar =
    {
        id: generateId(),
        brand : carBrand,
        model : carModel,
        color : carColor,
        year : carYear,
        price : carPrice,
        photo : carPhoto
    }

    cars.push(newCar);
    printCars(cars);
    resetForm();
    hidenForm();
});

const generateId = (()=>{
    let biggerID = 0;
    cars.forEach((car)=>{
        if(car.id > biggerID){
            biggerID = car.id;
        }
    });
    return biggerID += 1;
});

const deleteCar = ((carID)=>{
    const i = cars.findIndex((car) => car.id === carID);
    cars.splice(i, 1);
    printCars(cars);
});

const showFormEditCar = ((carID) =>{
    const i = cars.findIndex((car) => car.id === carID);
    const car = cars[i]; 
    document.getElementById('brand').value = car.brand;
    document.getElementById('model').value = car.model;
    document.getElementById('color').value = car.color;
    document.getElementById('year').value = car.year;
    document.getElementById('price').value = car.price;
    document.getElementById('photo').value = car.photo;
    CARID = i;
    openForm();
    btnEdit();
});

const editCar = ()=>{
    cars[CARID].brand = document.getElementById('brand').value;
    cars[CARID].model = document.getElementById('model').value;
    cars[CARID].color = document.getElementById('color').value;
    cars[CARID].year = document.getElementById('year').value;
    cars[CARID].price = document.getElementById('price').value;
    resetForm();
    hidenForm();
    printCars(cars);
}

const btnEdit = (()=>{
    const button = getIdSubmmitButton();
    button.innerHTML = 'Editar';
    button.classList.remove('btn-primary');
    button.classList.add('btn-warning');
    button.value = EDIT;
});

const btnCreate = (()=>{
    const button = getIdSubmmitButton();
    button.innerHTML = 'Guardar';
    button.classList.add('btn-primary');
    button.classList.remove('btn-warning');
    button.value = CREATE;
});

const messageAction = (()=>{
    const touchBtn = getIdSubmmitButton().value;
    if (touchBtn === EDIT){
        editCar();
    }else{
        createCar();
    }
});
