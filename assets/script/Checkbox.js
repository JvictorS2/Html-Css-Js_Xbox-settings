let dark = document.getElementById('DarkTheme');
let sectionMain = document.getElementById('sectionMain')
let checkbox = document.getElementsByClassName('checkbox-style');
let transition = document.getElementsByClassName('transition');
let transitionsValue = ['UpDown', 'SeeYou','LeftRight']

/* Dark Theme */
dark.addEventListener('change', () => {
    sectionMain.classList.toggle('dark');
    document.getElementById('DarkBox').classList.toggle('checkboxOn');
})

const resertCheckbox = () => {
    for (let i = 1; i < checkbox.length; i++){
        j = i - 1;
        if (sectionMain.classList.contains(transitionsValue[j])) {
            sectionMain.classList.toggle(transitionsValue[j]);
        }
        if (transition[j].classList.contains('checkboxOn')) {
            transition[j].classList.toggle('checkboxOn');
        }
        
    }
}

for (let i = 1; i < checkbox.length; i++){
    checkbox[i].addEventListener('change', () => {
        resertCheckbox(); 

        j = i - 1;
        transition[j].classList.toggle('checkboxOn');
        sectionMain.classList.toggle(transitionsValue[j]);
    })
}