const container = document.querySelector('#grid-container');
const aside = document.querySelector('#aside');

window.addEventListener('load', createDiv);
function createDiv(event) {
    container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, minmax(0, 1fr));');
    let squared = 256;
    for (let i = 0; i < 256; i++){
        const div = document.createElement('div');
        div.setAttribute('style', 'border: 0.5px dotted white; width: 100%; height: 100%;');
        container.appendChild(div);
        div.classList.add('sketch-pad');
        div.addEventListener('click', () => {
            div.style.backgroundColor = 'aqua';
        });
    }
}


const resetButton = document.createElement('button');
resetButton.textContent = 'RESET';
resetButton.classList.add('button');
aside.appendChild(resetButton);
resetButton.addEventListener('click', () => {
    container.replaceChildren();
    let squarePerSide = prompt('How many squares per side?(Maximum: 100)',16);
    let perSide = Number(squarePerSide);
    container.setAttribute('style',`display: grid; grid-template-columns: repeat(${perSide}, 1fr); grid-gap: 0px;`)
    if (perSide <= 0 || isNaN(perSide)){
        alert('ENTER A POSITIVE NUMBER!');
        createDiv();
    }else if (perSide > 100){
        alert('MAXIMUM NUMBER ALLOWED IS 100');
        createDiv();
    }else{
        let squareDiv = (perSide * perSide);
        for (let j = 0; j < squareDiv; j++){
            let gridDiv = document.createElement('div');
            gridDiv.setAttribute('style', 'border: 0.5px dotted white; width: 100%; height: 100%;');
            container.appendChild(gridDiv);
            gridDiv.classList.add('sketch-pad');
            gridDiv.addEventListener('click', () => {
                gridDiv.style.background = 'aqua';
            });
        }
    }
});


const colorButton = document.createElement('button');
colorButton.textContent = 'COLOR';
colorButton.classList.add('button');
aside.appendChild(colorButton);
colorButton.addEventListener('click',colorPicker);

function colorPicker(event){
    let colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = '#0000ff';
    colorButton.appendChild(colorInput);
    colorButton.removeEventListener('click', colorPicker);
    colorInput.addEventListener('input', () => {
        let color = colorInput.value;
        let grids = container.querySelectorAll('.sketch-pad');
        grids.forEach(function(grid) {
            grid.addEventListener('click', () => {
                grid.style.backgroundColor = color;
            });
        });
    });
    colorInput.select();
}


const rainbowButton = document.createElement('button');
rainbowButton.textContent = 'RAINBOW';
rainbowButton.classList.add('button');
aside.appendChild(rainbowButton);
rainbowButton.addEventListener('click', rainbowArray);

function rainbowArray() {
    const rainbowColors = ['#9400D3','#4B0082','#0000FF','#00FF00','#FFFF00','#FF7F00','#FF0000'];
    function rainbowColor(){
        return rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
    }
    let grids = container.querySelectorAll('.sketch-pad');
    grids.forEach(function(grid) {
        grid.addEventListener('click', () => {
            grid.style.backgroundColor = rainbowColor();
        });
    });
}


const eraserButton = document.createElement('button');
eraserButton.textContent = 'ERASER';
eraserButton.classList.add('button');
aside.appendChild(eraserButton);
eraserButton.addEventListener('click', eraser);

function eraser() {
    let grids = document.querySelectorAll('.sketch-pad');
    grids.forEach(function(grid) {
        grid.addEventListener('click', () => {
            grid.style.backgroundColor = 'grey';
        });
    });
}

const clearButton = document.createElement('button');
clearButton.textContent = 'CLEAR';
clearButton.classList.add('button');
aside.appendChild(clearButton);
clearButton.addEventListener('click', clear);

function clear() {
    let grids = document.querySelectorAll('.sketch-pad');
    grids.forEach(function(grid) {
        clearButton.addEventListener('click', () => {
            grid.style.backgroundColor = 'grey';
        });
    });
}

