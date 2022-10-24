var counter = 0;
var counterButton = document.getElementById("counter");
counterButton.addEventListener("click", increment);
counterButton.focus();

counterButton.innerHTML = counter;

function increment() {
    counter++;
    counterButton.innerHTML = counter;
}
