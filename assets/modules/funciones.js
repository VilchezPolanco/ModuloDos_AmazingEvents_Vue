//FILTROS EVENTOS PASADO Y FUTUROS
    export function filterPastEvents(eventos, fechaRefefencia){
        let pastEvents = []
        for(const event of eventos){
            if(event.date < fechaRefefencia){
                pastEvents.push(event)
            }
        }
        return pastEvents;
    }

    export function filterUpcomingEvents(eventos, fechaRefefencia){
        let upcomingEvents = []
        for(const event of eventos){
            if(event.date > fechaRefefencia){
                upcomingEvents.push(event)
            }
        }
        return upcomingEvents;
    }

// CODIGO DE TARJETAS DINAMICAS Y CHECKBOX DINAMICOS

    export function createCheckbox(categoria){
        return categoria.reduce( ( acc, act ) =>{
            return acc += `
            <div class="form-check m-2">
                <input class="form-check-input" type="checkbox" value="${act}" id="${act}">
                <label class="form-check-label" for="${act}">
                    ${act}
                </label>
            </div>
            `
        }, '')
    }

    export function createCard(arrayObj){
        if (arrayObj.length !== 0) {
            return arrayObj.reduce( ( acc, act ) =>{
                return acc += `
                    <div class="card colorUno" style="width: 18rem;">
                        <img src="${act.image}" class="card-img-top p-2 cardImg" alt="food fair">
                        <div class="card-body d-flex flex-column align-items-center">
                            <h5 class="card-title">${act.name}</h5>
                            <p class="card-text text-center description">${act.description}</p>
                            <div class="d-flex justify-content-around w-100">
                                <p>$${act.price}</p>
                                <a href="${location.href.includes("index.html")? `./assets/pages/details.html` : `../pages/details.html`}?_id=${act._id}" class="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                `
            }, '')
        } else {
            return  `
            <div class="text-center w-50">
                <img class="w-100" src="https://previews.123rf.com/images/manopjk/manopjk1711/manopjk171100023/90019226-ilustrador-de-oops-p%C3%A1gina-de-error-404-no-encontrado-fondo-de-vector.jpg" alt="image no fount">
            </div>
        `
        }        
    }

    export function createDetail(Event){
        return `
        <div class="card mb-3" style="max-width: 440px; margin-top: 1rem;">
            <div class="row g-0 colorUno detail">
                <div class="col-md-4">
                    <img src="${Event.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${Event.name}</h5>
                        <p class="card-text">${Event.description}</p>
                        <p class="card-text">Date: ${Event.date}</p>
                        <p class="card-text">Category: ${Event.category}</p>
                        <p class="card-text">Place: ${Event.place}</p>
                        <p class="card-text">${Event.assistance ? `Assistance: ${Event.assistance} people` : `Estimate: ${Event.estimate} people`}</p>
                        <p class="card-text">price: $${Event.price}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }

// FILTROS SEARCH Y CHECKBOX

    export function filterSearch(arrayEvents, inputValue){  /* filtra lo que viene del input(usa el array de objetos events y lo filtra con el atributo value que viene del imput)*/
        return arrayEvents.filter( event => event.name.toLowerCase().includes(inputValue.toLowerCase()))
    }

    export function filtercheckbox( array, arrayCategory ) {  /*filtra si arrayCategory tiene obj guardados */
    if( arrayCategory.length == 0 ){
            return array
        } else {
            return array.filter( obj => arrayCategory.includes( obj.category ))
        }
    }

// FUNCIONES STATS


  