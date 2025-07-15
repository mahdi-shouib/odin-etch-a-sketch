const body = document.querySelector('body');
const container = document.getElementById('container');
const newButton = document.getElementById('new');
const clearButton = document.getElementById('clear');

function randomColor() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function createGrid(side) {
    const width = container.offsetWidth - 8;
    container.innerHTML = '';
    for (let i = 0; i < side; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < side; j++) {
            const cell = document.createElement('div');
            cell.classList.toggle('cell');
            cell.style.width = `${(width / side)}px`;
            cell.style.height = `${(width / side)}px`;
            cell.addEventListener('mouseover', () => {
                const color = cell.style.backgroundColor;
                if (color === '') {
                    cell.style.backgroundColor = randomColor();
                    cell.style.opacity = 0.2;
                } else if (color.startsWith('rgb')) {
                    cell.style.opacity = parseFloat(cell.style.opacity) + 0.2;
                }
            });
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

newButton.addEventListener('click', () => {
    const sideLength = prompt("Enter the new side length (1-100):");
    if (sideLength < 1 || sideLength > 100 || isNaN(sideLength)) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    createGrid(sideLength);
});

clearButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '';
    });
});

createGrid(16);