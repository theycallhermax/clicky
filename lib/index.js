var counter = 0;
var counterButton = document.getElementById("counter");
document.getElementById("counter").addEventListener("click", increment);

counterButton.innerHTML = counter;

function increment() {
    counter++;
    counterButton.innerHTML = counter;
}
