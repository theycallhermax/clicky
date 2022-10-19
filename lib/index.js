var counter = 0;
var counterButton = document.getElementById("counter");
document.getElementById("counter").addEventListener("click", increment);

counterButton.innerHTML = counter;

hotkeys("s,o,", function (event, handler){
    switch (handler.key) {
      case 's': save();
        break;
      case 'o': open();
        break;
      default: return;
    }
  });

function increment() {
    counter++;
    counterButton.innerHTML = counter;
}

function save() {
    localStorage.setItem("score", counter);
}

function open() {
    var restoredScore = localStorage.getItem("score");
    counterButton.innerHTML = restoredScore;
}