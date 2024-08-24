// actual code
var songtoggle = false
window.onmousemove = function() {
    music = document.getElementById("bgm");
}

window.onblur = function() {
    music = document.getElementById("bgm");
    music.volume = 0.2
}

window.onfocus = function() {
    music = document.getElementById("bgm");
    music.volume = 0.5
}


function bgmcheck() {
    var music = document.getElementById("bgm");
    var mbutton = document.getElementById("mbutton");
    music.volume = 0.5
    console.log(":>")
    songtoggle = !songtoggle; // Toggles the value (true -> false or false -> true)
    if (songtoggle) {
        music.play().catch(error => {
            console.log("(-_-') " + error);
        });
        mbutton.src = "Play2.svg";
    } else {
        music.pause();
        mbutton.src = "NoPlay2.svg";
    }
}