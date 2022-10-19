var counter = 0;
var counterButton = document.getElementById("counter");
document.getElementById("counter").addEventListener("click", increment);

counterButton.innerHTML = 0;

function increment() {
    counter++;
    counterButton.innerHTML = counter;
}

function decrement() {
    counter--;
    counterButton.innerHTML = counter;
}

const timeout = setTimeout(increment, 10000);