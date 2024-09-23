let score = 0;
const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const clickSound = document.getElementById('clickSound');
const difficultyRadios = document.getElementsByName('difficulty');
let gameDuration = 20000; 
let pointsPerClick = 1;
let timer;


function startGame() {
    console.log('start');
    
    score = 0;
    scoreDisplay.innerText = `Points: ${score}`;

    clearTimeout(timer); // Очистити попередній таймер
    timer = setTimeout(() => {
        alert(`Time is up! Your final score: ${score}`);
        score = 0;
        scoreDisplay.innerText = `Points: ${score}`;
    }, gameDuration);
}

for (const radio of difficultyRadios) {
    radio.addEventListener('change', () => {
        pointsPerClick = parseInt(radio.value);
        switch (pointsPerClick) {
            case 1: 
                gameDuration = 20000;
                break;
            case 2: 
                gameDuration = 15000;
                break;
            case 3: 
                gameDuration = 10000;
                break;
        }
        startGame();
    });
}


clickButton.addEventListener('click', () => {
    score++;
    scoreDisplay.innerText = `Points: ${score}`;
    clickSound.currentTime = 0;
    clickSound.play();
});

startGame();