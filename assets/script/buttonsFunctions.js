
/* Declaração dos botões (opition) */
let buttonG = document.getElementById('buttonG');
let buttonA = document.getElementById('buttonA');
let buttonS = document.getElementById('buttonS');
let buttonDs = document.getElementById('buttonDs');
let buttonP = document.getElementById('buttonP');
let buttonAc = document.getElementById('buttonAc');

/* Declaração das div.indicator */
let id8 = document.getElementById('ola')
let id7 = document.getElementById('oi');
let id1 = document.getElementById('id1');
let id2 = document.getElementById('id2');
let id3 = document.getElementById('id3');
let id4 = document.getElementById('id4');
let id5 = document.getElementById('id5');
let id6 = document.getElementById('id6');

/* Declaração das div.settings */
let settingsG = document.getElementById('settingsG');
let settingsA = document.getElementById('settingsA');
let settingsS = document.getElementById('settingsS');
let settingsDs = document.getElementById('settingsDs');
let settingsP = document.getElementById('settingsP');
let settingsAc = document.getElementById('settingsAc');

let buttonChangeColor = document.getElementById('buttonChangeColor');
let ColorsBox = document.getElementById('colorsBox');

let buttonsCollection = [buttonG, buttonA, buttonS, buttonDs, buttonP, buttonAc];
let idsCollection = [id1, id2, id3, id4, id5, id6];
let settingsCollection = [settingsG, settingsA,settingsS, settingsDs, settingsP, settingsAc, ColorsBox];

/* Função para resertar a classes nas divs corretas */
const resertClasses = () => {

    for (let i = 0; i < buttonsCollection.length; i++) {
        idsCollection[i].removeAttribute('class');
        buttonsCollection[i].classList.remove('clicked');
    }

    for (let i = 0; i < settingsCollection.length; i++) {
        settingsCollection[i].classList.remove('show');
        settingsCollection[i].classList.add('hidden');
    
    }
}


/* ////////////////////////button/////////////////////// */

buttonG.addEventListener('click', function () {
    resertClasses();
    
    id1.className = 'indicator'
    buttonG.classList.add('clicked');
    
    if (settingsG.classList.contains('hidden')) {
        settingsG.classList.add('show');
        settingsG.classList.remove('hidden')
    } 
    
});

buttonA.addEventListener('click', function () {
    resertClasses();

    id2.className = 'indicator';
    buttonA.classList.add('clicked');
   
    if (settingsA.classList.contains('hidden')) {
        settingsA.classList.add('show');
        settingsA.classList.remove('hidden');
    } 
});

buttonS.addEventListener('click', function () {
    resertClasses();

    id3.className = 'indicator';
    buttonS.classList.add('clicked');

    if (settingsS.classList.contains('hidden')) {
        settingsS.classList.add('show');
        settingsS.classList.remove('hidden');
    } 

});

buttonDs.addEventListener('click', function () {
    resertClasses();


    id4.className = 'indicator';
    buttonDs.classList.add('clicked');

    if (settingsDs.classList.contains('hidden')) {
        settingsDs.classList.add('show');
        settingsDs.classList.remove('hidden');
    } 
});

buttonP.addEventListener('click', function () {
    resertClasses();

    id5.className = 'indicator';
    buttonP.classList.add('clicked');

    if (settingsP.classList.contains('hidden')) {
        settingsP.classList.add('show');
        settingsP.classList.remove('hidden');
    } 
});

buttonAc.addEventListener('click', function () {
    resertClasses();


    id6.className = 'indicator';
    buttonAc.classList.add('clicked');

    if (settingsAc.classList.contains('hidden')) {
        settingsAc.classList.add('show');
        settingsAc.classList.remove('hidden');
    } 

});

buttonChangeColor.addEventListener('click', () => {
    resertClasses();
    
    if (ColorsBox.classList.contains('hidden')) {
        ColorsBox.classList.add('show');
        ColorsBox.classList.remove('hidden');
    }
})

