const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');
const but = document.getElementById('but');

const lights = [redLight, yellowLight, greenLight];
let currentLightIndex = 0;
but.onclick = () =>{
    lights.forEach(light => light.classList.add('off'));

    currentLightIndex = (currentLightIndex + 1) % lights.length;
    lights[currentLightIndex].classList.remove('off');
}