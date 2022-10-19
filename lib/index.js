var counter = 0;
var counterButton = document.getElementById("counter");
document.getElementById("counter").addEventListener("click", increment);

counterButton.innerHTML = counter;

hotkeys("ctrl+shift+s,ctrl+shift+o,", function (event, handler){
    switch (handler.key) {
      case 'ctrl+s': save();
        break;
      case 'ctrl+o': open();
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
    counterButton.innerHTML = localStorage.getItem("score");
}