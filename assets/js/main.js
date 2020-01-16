"use strict";

window.addEventListener("resize", resizeContent);

// Resizing content
function resizeContent() {
    console.log(`The page is resizing ${ screen.width }`)
    console.log(`The window inner width ${ window.innerWidth }`)
}

function createButton() {
    const button = document.createElement('button');
    button.innerHTML = 'Go to About';
    button.onclick = onButtonClick;
    return button;
}

function createA() {
    const link = document.createElement('a');
    link.title = 'Go to About';
    link.innerHTML = 'Go to About';
    link.href = "/about/";
    link.classList.add('button');
    return link;
}

function onButtonClick() {
    window.location = /about/;
}

// document.body.appendChild(createButton());
// document.body.appendChild(createA());