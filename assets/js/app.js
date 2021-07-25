'use-strict'

// const cars = [
//     {
//         id: 0,
//         brand: 'AnyBrand1',
//         model: 'AnyModel1',
//         color: 'blue',
//         year: 2019,
//         price: '2000usd',
//         photo: 'https://motor.elpais.com/wp-content/uploads/2018/12/Bugatti-Chiron-2017-1600-1c-1800x728.jpg'
//     },
//     {
//         id: 1,
//         brand: 'AnyBrand2',
//         model: 'AnyModel2',
//         color: 'red',
//         year: 2020,
//         price: '2000usd',
//         photo: 'https://motor.elpais.com/wp-content/uploads/2018/12/Bugatti-Chiron-2017-1600-1c-1800x728.jpg'
//     }
// ];

cars = JSON.parse(localStorage.getItem("cars"))

const CREATE = "create" 
const EDIT = "edit" 
let CARID = 0;
let BUTTONSTATUS = 0;

const printCars = ((dataCars) =>{
    const tbody_content = document.getElementById('tbody-cars');
    let div_cardDeck = document.querySelector('div.card-deck');
    div_cardDeck.innerHTML = '';
    tbody_content.innerHTML = '';
    dataCars.forEach((car)=>{
        const car_HTML = `<tr>
                            <td><a href="#${car.id}"><img src="${car.photo}" alt="" style="max-width: 100%"></a></td>
                            <td>${car.model}</td>
                            <td>${car.price}</td>
                        </tr>`;
        let div_html = `
        <div id="${car.id}" class="card set-width">
            <img class="card-img-top" src="${car.photo}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${car.brand}</h5>
            <p class="card-text">${car.model}</p>
            <p class="card-text">${car.color}</p>
            <p class="card-text">${car.year}</p>
            <p class="card-text"><small class="text-muted">${car.price}</small></p>
            <td>
            <button class="btn btn-danger" onclick="deleteCar(${car.id})"><i class="bi bi-trash"></i> Eliminar</button>
            <button class="btn btn-warning" onclick="showFormEditCar(${car.id})"><i class="bi bi-arrow-repeat"></i> Editar</button>
            </td>
            </div>
        </div>
        `
        tbody_content.innerHTML += car_HTML;
        div_cardDeck.innerHTML += div_html;
        // 
        // let htmlFirstDiv = document.createElement('div');
        // let htmlImg = document.createElement('img');
        // let htmlSecondDiv = document.createElement('div');
        // let htmlh5 = document.createElement('h5');
        // let htmlFirstP = document.createElement('p');
        // let htmlSecondP = document.createElement('p');
        // let htmlSmall = document.createElement('small');

        // htmlFirstDiv.classList.add('card', 'set-width');

        // htmlImg.classList.add('card-img-top');

        // htmlImg.src = `${car.photo}`;
        // htmlImg.setAttribute('alt', 'Card image cap');

        // htmlSecondDiv.classList.add('card-body');

        // htmlh5.classList.add('card-title');
        // htmlh5.textContent = `${car.brand}`;

        // htmlFirstP.classList.add('card-text');
        // htmlFirstP.textContent = `${car.model}, ${car.color}, ${car.year}, ${car.price}`;

        // htmlSmall.classList.add('text-muted');
        // htmlSmall.textContent = `Footer`;
        // //   Aca uno todo

        // htmlSecondP.appendChild(htmlSmall);
        // htmlSecondDiv.appendChild(htmlh5);
        // htmlSecondDiv.appendChild(htmlFirstP);
        // htmlSecondDiv.appendChild(htmlSecondP);

        // htmlFirstDiv.appendChild(htmlImg);
        // htmlFirstDiv.appendChild(htmlSecondDiv);

        // div_cardDeck.appendChild(htmlFirstDiv)

    });
    for(let i = 0; i < dataCars.length; i++) {
        let numberImg = i;
        let imgSrc;
    
        dataCars[i]['photo'] === '' ? imgSrc = '' : imgSrc = dataCars[i]['photo'];
        
        let carrouselInner = document.querySelector('div.carousel-inner');
    
        let imG = document.createElement('img');
        imG.classList.add('d-block', 'w-100');
        imG.src = `${imgSrc}`;
        imG.setAttribute('alt', `${numberImg + 1} slide`);
    
        let carrouselItem = document.createElement('div');
        carrouselItem.classList.add("carousel-item");
        if(i === 0) {
            carrouselItem.classList.add("active")
        }
    
        carrouselItem.appendChild(imG);
        carrouselInner.appendChild(carrouselItem);
    }
});
// printCars(JSON.parse(localStorage.getItem("cars")));
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
    localStorage.clear();
    localStorage.setItem("cars", JSON.stringify(cars));
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
    localStorage.clear();
    localStorage.setItem("cars", JSON.stringify(cars));
    cars = JSON.parse(localStorage.getItem("cars"));
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
    cars = JSON.parse(localStorage.getItem("cars"));
    cars[CARID].brand = document.getElementById('brand').value;
    cars[CARID].model = document.getElementById('model').value;
    cars[CARID].color = document.getElementById('color').value;
    cars[CARID].year = document.getElementById('year').value;
    cars[CARID].price = document.getElementById('price').value;
    cars[CARID].photo = document.getElementById('photo').value;
    localStorage.clear();
    localStorage.setItem("cars", JSON.stringify(cars));
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

// Aca abajo esta el slider
// let numberImg = '4';
// let imgSrc = 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
// let carrouselInner = document.querySelector('div.carousel-inner');
// let listCarouselIndicators = `
// <li data-target="#carouselExampleIndicators" data-slide-to="${numberImg}"></li>
// `;

// let carrouselItem = `
// <div class="carousel-item">
// <img class="d-block w-100" src="${imgSrc}" alt="${numberImg} slide">
// </div>
// `;

// carrouselInner.innerHTML += carrouselItem;
// console.log(carrouselInner)