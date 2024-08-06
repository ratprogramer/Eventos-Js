
//-------------------------------------------------------------------- EVENTOS MOUSE ----------------------------------------------------------
{
const mouseContainer = document.getElementById('mouse');



// CLICK
let mouseDiv1 = document.createElement('DIV');
mouseDiv1.textContent = 'click';
mouseDiv1.classList.add('div')
mouseContainer.appendChild(mouseDiv1)

mouseDiv1.addEventListener('click', (e) => {
    let r = Math.floor(Math.random() * 250);
    let g = Math.floor(Math.random() * 250);
    let b = Math.floor(Math.random() * 250);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`
})



// DBLCLICK
let mouseDiv2 = document.createElement('DIV');
mouseDiv2.innerHTML = 'dblclick </br> <p class="explicacion">Hay que mover el mouse para que se pueda volver a activar </p> '
mouseDiv2.classList.add('div');
mouseContainer.appendChild(mouseDiv2)

mouseDiv2.addEventListener('dblclick', (e) => {
    if(e.target == mouseDiv2){
        let r = Math.floor(Math.random() * 250);
        let g = Math.floor(Math.random() * 250);
        let b = Math.floor(Math.random() * 250);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
    };
})



//MOUSEDOWN
let mouseDiv3 = document.createElement('DIV');
mouseDiv3.innerHTML = 'mousedown'
mouseDiv3.classList.add('div');
mouseContainer.appendChild(mouseDiv3)

mouseDiv3.addEventListener('mousedown', (e) => {
        let r = Math.floor(Math.random() * 250);
        let g = Math.floor(Math.random() * 250);
        let b = Math.floor(Math.random() * 250);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
})



//MOUSEUP
let mouseDiv4 = document.createElement('DIV');
mouseDiv4.innerHTML = 'mouseup'
mouseDiv4.classList.add('div');
mouseContainer.appendChild(mouseDiv4)

mouseDiv4.addEventListener('mouseup', (e) => {
        let r = Math.floor(Math.random() * 250);
        let g = Math.floor(Math.random() * 250);
        let b = Math.floor(Math.random() * 250);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
})



//MOUSEOVER
let mouseDiv5 = document.createElement('DIV');
mouseDiv5.innerHTML = 'mouseover'
mouseDiv5.classList.add('div');
mouseContainer.appendChild(mouseDiv5)

mouseDiv5.addEventListener('mouseover', (e) => {
        let r = Math.floor(Math.random() * 250);
        let g = Math.floor(Math.random() * 250);
        let b = Math.floor(Math.random() * 250);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
})



//MOUSEMOVE
let mouseDiv6 = document.createElement('DIV');
mouseDiv6.innerHTML = 'mousemove'
mouseDiv6.classList.add('div');
mouseContainer.appendChild(mouseDiv6)

mouseDiv6.addEventListener('mousemove', (e) => {
        let r = Math.floor(Math.random() * 250);
        let g = Math.floor(Math.random() * 250);
        let b = Math.floor(Math.random() * 250);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
})



//MOUSEOUT
let mouseDiv7 = document.createElement('DIV');
mouseDiv7.innerHTML = 'mouseout <p class="explicacion"> El evento se propaga a los hijos </p>'
mouseDiv7.classList.add('div');
mouseContainer.appendChild(mouseDiv7)

mouseDiv7.addEventListener('mouseout', (e) => {
        let r = Math.floor(Math.random() * 250);
        let g = Math.floor(Math.random() * 250);
        let b = Math.floor(Math.random() * 250);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
})



//MOUSELEAVE
let mouseDiv8 = document.createElement('DIV');
mouseDiv8.innerHTML = 'mouseleave <p class="explicacion"> El evento NO se propaga a los hijos </p>'
mouseDiv8.classList.add('div');
mouseContainer.appendChild(mouseDiv8)

mouseDiv8.addEventListener('mouseleave', (e) => {
        let r = Math.floor(Math.random() * 250);
        let g = Math.floor(Math.random() * 250);
        let b = Math.floor(Math.random() * 250);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
})



//MOUSEENTER
let mouseDiv9 = document.createElement('DIV');
mouseDiv9.innerHTML = 'mouseenter'
mouseDiv9.classList.add('div');
mouseContainer.appendChild(mouseDiv9)

mouseDiv9.addEventListener('mouseenter', (e) => {
        let r = Math.floor(Math.random() * 250);
        let g = Math.floor(Math.random() * 250);
        let b = Math.floor(Math.random() * 250);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
})



//CONTEXTMENU
let mouseDiv10 = document.createElement('DIV');
mouseDiv10.innerHTML = 'contextmenu'
mouseDiv10.classList.add('div');
mouseContainer.appendChild(mouseDiv10)

mouseDiv10.addEventListener('contextmenu', (e) => {
        let r = Math.floor(Math.random() * 250);
        let g = Math.floor(Math.random() * 250);
        let b = Math.floor(Math.random() * 250);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
})



//WHEEL
let mouseDiv11 = document.createElement('DIV');
mouseDiv11.innerHTML = 'wheel'
mouseDiv11.classList.add('div');
mouseContainer.appendChild(mouseDiv11)

mouseDiv11.addEventListener('wheel', (e) => {
        let r = Math.floor(Math.random() * 250);
        let g = Math.floor(Math.random() * 250);
        let b = Math.floor(Math.random() * 250);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
})
}
//-------------------------------------------------------------------- EVENTOS TECLADO ----------------------------------------------------------
{
const p = document.getElementById('p')
const tecladoContainer = document.getElementById('teclado');

// KEYPRESS
let tecladoDiv1 = document.createElement('DIV');
tecladoDiv1.classList.add('div2')
let tecladoInput1 = document.createElement('INPUT');
let tecladoParrafo1 = document.createElement('P');
let tecladoExplicacion = document.createElement('P');
tecladoExplicacion.classList.add('explicacion')
tecladoExplicacion.textContent = 'No funciona con teclas que no tengan valor  '
tecladoInput1.placeholder = 'keypress';
tecladoInput1.classList.add('input')
tecladoDiv1.appendChild(tecladoInput1)
tecladoDiv1.appendChild(tecladoExplicacion)
tecladoDiv1.appendChild(tecladoParrafo1)
tecladoContainer.appendChild(tecladoDiv1)

tecladoInput1.addEventListener('keypress', (e) => {
    tecladoParrafo1.innerHTML = `Presionaste: ${e.key}`;
    let r = Math.floor(Math.random() * 250);
    let g = Math.floor(Math.random() * 250);
    let b = Math.floor(Math.random() * 250);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`
})



// KEYDOWN
let tecladoDiv2 = document.createElement('DIV');
tecladoDiv2.classList.add('div2')
let tecladoInput2 = document.createElement('INPUT');
let tecladoParrafo2 = document.createElement('P');
tecladoInput2.placeholder = 'keydown';
tecladoInput2.classList.add('input')
tecladoDiv2.appendChild(tecladoInput2)
tecladoDiv2.appendChild(tecladoParrafo2)
tecladoContainer.appendChild(tecladoDiv2)

tecladoInput2.addEventListener('keydown', (e) => {
    tecladoParrafo2.textContent = 'Presionaste: ' +  e.key;
    let r = Math.floor(Math.random() * 250);
    let g = Math.floor(Math.random() * 250);
    let b = Math.floor(Math.random() * 250);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`
})



// KEYUP
let tecladoDiv3 = document.createElement('DIV');
tecladoDiv3.classList.add('div2')
let tecladoInput3 = document.createElement('INPUT');
let tecladoParrafo3 = document.createElement('P');
tecladoInput3.placeholder = 'keyup';
tecladoInput3.classList.add('input')
tecladoDiv3.appendChild(tecladoInput3)
tecladoDiv3.appendChild(tecladoParrafo3)
tecladoContainer.appendChild(tecladoDiv3)

tecladoInput3.addEventListener('keyup', (e) => {
    tecladoParrafo3.textContent = 'Presionaste: ' +  e.key;
    let r = Math.floor(Math.random() * 250);
    let g = Math.floor(Math.random() * 250);
    let b = Math.floor(Math.random() * 250);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`
})
}