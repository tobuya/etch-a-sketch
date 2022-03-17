const container = document.querySelector('#grid-container');
const aside = document.querySelector('#aside');

window.addEventListener('load', () => {
    container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, minmax(0,1fr)); grid-column-gap: 2px;');
    let squared = 256;
    for (let i = 0; i < 256; i++){
        const div = document.createElement('div');
        div.setAttribute('style', 'border: 1px solid red;')
        container.appendChild(div);
        div.addEventListener('click', () => {
            div.style.backgroundColor= 'aqua';
        });
    }
});

/*const divNumber = 256;
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-items');
    div.innerHTML= i + 1;
    container.appendChild(div);

    div.addEventListener("click", () => {
        div.style.backgroundColor= "aqua";
    })
}*/

const resetButton = document.createElement('button');
resetButton.textContent = 'RESET';
resetButton.classList.add('button');
aside.appendChild(resetButton);
resetButton.addEventListener('click', () => {
    container.replaceChildren();
    let squarePerSide = prompt('How many squares per side?(Maximum: 100)',0);
    let perSide = Number(squarePerSide);
    container.setAttribute('style',`display: grid; grid-template-columns: repeat(${perSide}, 1fr);`)
    if (perSide <= 0 || isNaN(perSide)){
        alert('ENTER A POSITIVE NUMBER!');
    }else if (perSide > 100){
        alert('MAXIMUM NUMBER ALLOWED IS 100');
    }else{
        let squareDiv = (perSide * perSide);
        for (let j = 0; j < squareDiv; j++){
            const gridDiv = document.createElement('div');
            gridDiv.setAttribute('style', 'border: 1px solid black; margin: 5px;');
            container.appendChild(gridDiv);
        }
    }
});

const colorButton = document.createElement('button');
colorButton.textContent = 'COLOR MODE';
colorButton.classList.add('button');
aside.appendChild(colorButton);
//colorButton.addEventListener('click', )


const rainbowButton = document.createElement('button');
rainbowButton.textContent = 'RAINBOW MODE';
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

