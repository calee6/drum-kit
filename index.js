var number0fDrums = document.getElementsByClassName("drum").length;

for (i = 0; i < number0fDrums; i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", (event) => {
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound (musicKey) {
    switch (musicKey) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        default:
            var tom1 = new Audio('sounds/buzzer.mp3');
            tom1.play();
    }


}
function buttonAnimation (pressedKey) {
    document.querySelector("." + pressedKey).classList.add("pressed");

    setTimeout(() => {
        document.querySelector("." + pressedKey).classList.remove("pressed");
    }, 100);
}
