function setOutput(text) {
    document.getElementById("output").innerHTML = text;
}

function getKeys() {
    var text = "";
    for(var i = 0; i < window.localStorage.length; i++) {
        var key = window.localStorage.key(i);
        var value = window.localStorage.getItem(key);
        text += key + ": " + value + "<br>";
    }
    setOutput(text);
}


document.getElementById("button-get-keys").onclick = function() {
    getKeys();
}

document.getElementById("button-set-item").onclick = function() {
    var key = prompt("Key", "");
    if(key == null)
        return;
    var oldValue = window.localStorage.getItem(key);
    var newValue = prompt(oldValue + "\n\nNew value", "");
    if(newValue == null)
        return;
    window.localStorage.setItem(key, newValue);
    getKeys();
}

document.getElementById("button-remove-item").onclick = function() {
    var key = prompt("Key", "");
    if(key == null)
        return;
    var oldValue = window.localStorage.getItem(key);
    if(oldValue == null) {
        alert(key + " doesn't exist!");
        return;
    }
    window.localStorage.removeItem(key);
    getKeys();
}

document.getElementById("button-reset").onclick = function() {
    window.localStorage.clear();
    setOutput("Reset.");
}
