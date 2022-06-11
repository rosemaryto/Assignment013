//GET ELEMENTS FROM DOM
const $ = (id) => document.getElementById(id);

let name = $('name').onclick = () => {
    prompt('What is your name?')
}

let deposit = $('deposit').onclick = () => {
    prompt('How much money do you want to deposit?')
}

let withdrawal = $('withdrawal').onclick = () => {
    prompt('How much money do you want to deposit?')
}
let display = $('display')