const button = document.querySelector('.my-button');

function returnTrueOrFalse () {
    let random = Math.random();
    if (random < 0.5) {
        return true
    } else {
        return false
    }
}

function moveButtonOnHover () {
    if (returnTrueOrFalse) {
        let randomX = Math.floor(Math.random() * window.innerWidth);
        let randomY = Math.floor(Math.random() * window.innerHeight);
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
    }
}

