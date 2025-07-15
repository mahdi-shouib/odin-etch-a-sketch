const body = document.querySelector('body');
const container = document.getElementById('container');

body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.height = '100vh';
body.style.margin = '0';

for(let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.style.display = 'flex';
    for(let j = 0; j < 16; j++){
        const cell = document.createElement('div');
        cell.style.width = '20px';
        cell.style.height = '20px';
        cell.style.border = '1px solid black';
        row.appendChild(cell);
    }
    container.appendChild(row);
}