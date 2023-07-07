var btn = document.querySelector('.start-button');

var count = 0;

btn.addEventListener('click', startCounter);

var current = document.querySelector('.current');
var next = document.querySelector('.next');
var maxVal = document.getElementById('cnt-input').value;

current.innerHTML = count;

function startCounter() {
    current.innerHTML = count;
    var id = setInterval(animate, 1000);
}

function animate() {
    if (maxVal == count) {
        clearInterval(id);
        count = 0;
        current.innerHTML = count;
        alert("The timer has stopped.");
        return;
    }
    next.innerHTML = ++count;
    next.classList.add('animate');
    setTimeout(function () {
        current.innerHTML = count;
        next.classList.remove('animate');
    }, 500);
}
