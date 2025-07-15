const body = document.querySelector('body');
const container = document.getElementById('container');

for(let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    for(let j = 0; j < 16; j++){
        const cell = document.createElement('div');
        cell.classList.toggle('cell');
        cell.addEventListener('mouseover', () => {
            cell.classList.add('hover');
        });
        row.appendChild(cell);
    }
    container.appendChild(row);
}