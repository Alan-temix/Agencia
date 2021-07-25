const printCars = ((dataCars) =>{
    const tbody_content = document.getElementById('tbody-cars');
    let div_cardDeck = document.querySelector('div.card-deck');
    let div_carrousel = document.querySelector('div.carousel-inner');
    let index = 0;
    div_cardDeck.innerHTML = '';
    tbody_content.innerHTML = '';
    div_carrousel.innerHTML = '';
    dataCars.forEach((car)=>{
        let status = '';
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
        index === 0 ? status = ' active' : status = '';
        const carrousel_html = `
        <div class="carousel-item ${status}"><img class="d-block w-100" src="${car.photo}" alt="${index} slide"></div>
        `
        tbody_content.innerHTML += car_HTML;
        div_cardDeck.innerHTML += div_html;
        div_carrousel.innerHTML += carrousel_html;

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