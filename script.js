let arrColores = [];
let square = document.querySelectorAll('.square');
let header = document.querySelector('header')
let pickedColor = document.querySelector('.colorDisplay');
let message = document.querySelector('#message');
let btnReset = document.getElementById('reset');
let btnEasy = document.getElementById('easyButton');
let btnHard = document.getElementById('hardButton');
let selectDif = document.querySelectorAll('#dificul');
let largoArr = 6;

function randomColor() {
    let posUno = Math.floor(Math.random() * 255);
    let posDos = Math.floor(Math.random() * 255);
    let posTres = Math.floor(Math.random() * 255);
    return "rgb(" + posUno + ", " + posDos + ", " + posTres + ")";
}

function generateRandomColors() {
    while (arrColores.length < largoArr) {
        arrColores.push(randomColor());
    }
}

function pickedColorF() {
    pickedColor.innerHTML = arrColores[Math.floor(Math.random() * largoArr)];
}

function rellenoArreglo() {
    window.addEventListener("load", () => {
        for (let i = 0; i < largoArr; i++) {
            square[i].style.backgroundColor = arrColores[i];
        }
    })
}
   
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("click", function () {
            if (square[i].style.backgroundColor === pickedColor.textContent) {
                message.innerHTML = "ACERTASTE!";
                btnReset.innerHTML = "JUGAR DE NUEVO"
                header.style.backgroundColor = pickedColor.textContent;
                for (let i = 0; i < square.length; i++) {
                    square[i].style.backgroundColor = pickedColor.textContent;
                }
            }
            else {
                square[i].style.backgroundColor = "RGB(35, 35, 35)";
                message.innerHTML = "Intentalo nuevamente!";
            }
    
        })
    }



generateRandomColors();
pickedColorF();
rellenoArreglo();



function newGame() {
    location.reload();
}







