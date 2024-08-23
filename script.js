// definitions
var songtoggle = false
window.onmousemove = function() {
    music = document.getElementById("bgm");
}


function bgmcheck() {
    var music = document.getElementById("bgm");
    var mbutton = document.getElementById("mbutton");
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

// actual code