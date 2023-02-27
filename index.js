var number0fDrums = document.getElementsByClassName("drum").length;

for (i = 0; i < number0fDrums; i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", function () {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    
    });
    
}