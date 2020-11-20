const btn = document.querySelector('button');
btn.addEventListener('click', onOf);   
function onOf() {
    if(btn.innerText == 'On') {
        btn.innerText = 'Off'
    } else {
        btn.innerText = 'On'
    }
}


const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', () => h1.style.color='red');
h1.addEventListener('mouseout', () => h1.style.color='black');


const pic = document.querySelector('img');
pic.addEventListener('mouseenter', () => pic.setAttribute('src', 'https://picsum.photos/200/300'));

let anotheVar = 'git diff 2'
let let2know = 214;