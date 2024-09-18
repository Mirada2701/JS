 const addBlockBtn = document.getElementById('addBlockBtn');
 const container = document.getElementById('container');

 addBlockBtn.onclick = () => {
    const block = document.createElement('div');
     block.className = 'color-block';

     const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
     block.style.backgroundColor = randomColor;

     
     block.addEventListener('dblclick', function() {
         container.removeChild(block);
     });

     container.appendChild(block);
 }


