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
    container.setAttribute('style',`display: grid; grid-template-columns: repeat(${perSide}, 1fr);`)
    if (perSide <= 0 || isNaN(perSide)){
        alert('ENTER A POSITIVE NUMBER!');
        createDiv();
    }else if (perSide > 100){
        alert('MAXIMUM NUMBER ALLOWED IS 100');
        createDiv();
    }else{
        let squareDiv = (perSide * perSide);
        for (let j = 0; j < squareDiv; j++){
            const gridDiv = document.createElement('div');
            gridDiv.setAttribute('style', 'border: 0.5px dotted white; width: 100%; height: 100%;');
            container.appendChild(gridDiv);
            gridDiv.addEventListener('click', () => {
                gridDiv.style.background = 'aqua';
            })
        }
    }
});

const colorButton = document.createElement('button');
colorButton.textContent = 'COLOR';
colorButton.classList.add('button');
aside.appendChild(colorButton);
//colorButton.addEventListener('click', )


const rainbowButton = document.createElement('button');
rainbowButton.textContent = 'RAINBOW';
rainbowButton.classList.add('button');
aside.appendChild(rainbowButton);

const eraserButton = document.createElement('button');
eraserButton.textContent = 'ERASER';
eraserButton.classList.add('button');
aside.appendChild(eraserButton);

const clearButton = document.createElement('button');
clearButton.textContent = 'CLEAR';
clearButton.classList.add('button');
aside.appendChild(clearButton);

