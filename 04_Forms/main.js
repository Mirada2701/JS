const mainDiv = document.getElementById('main');
console.log(mainDiv);

const form = document.forms.products;
const name = form.elements.title;
const select = form.elements.type;

form.onsubmit = (event) => {
    event.preventDefault();
    const path = `./images/${select.value}`;
    const title = select.value.split('.')[0];
    
    mainDiv.innerHTML += ` <div class="item">
    mainDiv.innerHTML += ` <div class="item">
    mainDiv.innerHTML += ` <div class="item">
            <img src="${path}">
            <p>${title}</p>
        </div>;`
    
}



