window.onload = () => {
    load();
}

 const addBlockBtn = document.getElementById('addBlockBtn');
 const container = document.getElementById('container');

function addBlockToCont(block) {
    container.innerHTML += `<div class="color-block" style="background-color: rgb(${block.r}, ${block.g}, ${block.b});"></div>`
}

let blocks = [];

 addBlockBtn.onclick = (e) => {
     e.preventDefault();
     let block = {
         r: Math.floor(Math.random() * 256),
         g: Math.floor(Math.random() * 255),
         b: Math.floor(Math.random() * 255)
     }
     blocks.push(block);
     save();


     addBlockToCont(block);
 }

 function save() {

    localStorage.setItem("block-list", JSON.stringify(blocks));
}

function load() {
    blocks = JSON.parse(localStorage.getItem("block-list"));
console.log(blocks);

    for (const b of blocks) {
        addBlockToCont(b);
    }
}


