const table = document.querySelector('#main-table tbody');

const form = document.forms.cars;

const modelIn = form.elements.model;
const engineIn = form.elements.engine;
const dateIn = form.elements.date;
const inStock = form.elements.InStock;

let rowCount = 0;

function addCar(car){
    if(!modelIn.value)
    {
        alert("Wrong model!");
        throw new Error("Model is null");
    }
    if(!engineIn.value)
    {
        alert("Wrong engine!");
        throw new Error("Engine is null");
    }
    if(dateIn > Date.now() || !dateIn.value){
        alert("Take true date");
        throw new Error("Year is more then present");
    }
    car = {
        model:modelIn.value,
        engine:engineIn.value,
        year:dateIn.value,
        InStock:inStock.checked
    };
    table.innerHTML+=`<tr>
                <th scope="row">${++rowCount}</th>
                <td>${car.model}</td>
                <td>${car.engine}</td>
                <td>${car.year}</td>
                <td>
                    ${car.InStock?'<i class="bi bi-flag"></i></td>':''}
              </tr>`
}

form.onsubmit = (e)=>{
    e.preventDefault();
    try {
        let car = {};
        addCar(car);
    } catch (error) {
        console.log("Error name:", error.name);
        console.log("Error message:", error.message);
    }
    
}
const clear = document.querySelector(`form button[type = "button"]`);

clear.onclick = ()=>{
    table.innerHTML = '';
}
