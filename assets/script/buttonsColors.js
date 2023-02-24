/* Referência da tag Body */
let bodyId = document.getElementById('BodyId');

/* Referência as tags span */
let nameColor = document.getElementsByClassName('nameColor');

/* Referência as cores */
let blueGreen = document.getElementById('blueGreen');
let brightBlue = document.getElementById('brightBlue');
let blue = document.getElementById('blue');
let darkBlue = document.getElementById('darkBlue');
let brightGreen = document.getElementById('brightGreen');
let green = document.getElementById('green');
let orange = document.getElementById('orange');
let darkPurple = document.getElementById('darkPurple');
let purple = document.getElementById('purple');
let magenta = document.getElementById('magenta');
let teal = document.getElementById('teal');
let darkRed = document.getElementById('darkRed');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let brown = document.getElementById('brown');
let gray = document.getElementById('gray');

/* Variaveis armazenadas em arrays */
let corCollection = [blueGreen, brightBlue, blue, darkBlue, brightGreen, green, orange, darkPurple, purple, magenta, teal, darkRed, red, yellow, brown, gray];
let classes = ['BlueGreen','BrightBlue','Blue','DarkBlue','BrightGreen','Green', 'Orange','DarkPurple','Purple','Magenta','Teal','DarkRed','Red','Yellow','Brown',"Gray"];

/* Função para resetar as cores */
const resertCores = () => {
    for(let i = 0; i < classes.length; i++){
        bodyId.classList.remove(classes[i]);
    }
}

for(let i = 0; i < classes.length; i++){
    corCollection[i].addEventListener('click' , () => { 
        resertCores();

        bodyId.classList.add(classes[i]);

        for (let j = 0; j < nameColor.length; j++){
            
            nameColor[j].innerHTML = classes[i];
        }
    })
}



