const container = document.querySelector('#grid-container');
const aside = document.querySelector('#aside');

window.addEventListener('load', () => {
    container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, 1fr);');
    let squared = 256;
    for (let i = 0; i < 256; i++){
        const div = document.createElement('div');
        div.setAttribute('style', 'border: 1px solid red; width: 50px; height: 50px;')
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
    squarePerSide = prompt('How many squares per side?(Maximum: 100)',0);
    const squareDivs = parseInt(squarePerSide) * parseInt(squarePerSide);
    for (let j = 0; j < squareDivs; j++){
        const gridDivs = document.createElement('div');
        gridDivs.setAttribute('style', 'border: 1px solid black; margin: 5px;');
        container.replaceChildren();
        container.appendChild(gridDivs);
    }
})

const colorButton = document.createElement('button');
colorButton.textContent = 'COLOR MODE';
colorButton.classList.add('button');
aside.appendChild(colorButton);

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

