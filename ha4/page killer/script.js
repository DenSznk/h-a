const button = document.getElementById("myButton");
const button2 = document.querySelector('.btn-2')

button.addEventListener("click", myFreeze);
button2.addEventListener('click', sayHello)
function myFreeze() {
    return new Promise(resolve => {
            console.log("Here we go!!!");
            myFreeze().then(resolve)
    })
}

function sayHello () {
    console.log("HEllo")
}

