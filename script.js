const body = document.querySelector('body');
const container = document.getElementById('container');
const newButton = document.getElementById('new');
const clearButton = document.getElementById('clear');

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color += 'cc';
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
                if (cell.style.backgroundColor === '') {
                    cell.style.backgroundColor = randomColor();
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