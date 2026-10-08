const bttn = document.getElementById('btn');
const boxes = document.getElementById('boxes');

const rows = 4;
const cols = 4;
const boxSize = 125;

function createBoxes(){
    for (let i = 0; i < rows * cols; i++){
        const box = document.createElement('div');

        box.classList.add('box');

        const x = i % cols;
        const y = Math.floor(i / cols);

        box.style.backgroundPosition = `-${x * boxSize}px -${y * boxSize}px`;
        box.style.backgroundSize = '500px 500px';

        boxes.appendChild(box);
    }
}

bttn.addEventListener('click', () => {
    boxes.classList.toggle('big');
});

createBoxes();

