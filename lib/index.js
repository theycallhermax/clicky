var counter = 0;
var counterButton = document.getElementById("counter");
document.getElementById("counter").addEventListener("click", increment);

counterButton.innerHTML = counter;
console.log("Counter set to 0");

function increment() {
    console.log("Counter button clicked");
    counter++;
    counterButton.innerHTML = counter;
    console.log(`Incremented counter to ${counter}`);
}
