
// Detecting sound

var noButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i< noButtons ; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var clicked = this.innerHTML;
        makeSound(clicked);

        makeAnimation(clicked);
        
    
    });

}


// Making Sound



document.addEventListener("keypress", function(event){

    
    var keyPressed = event.key; 
    makeSound(keyPressed);
    makeAnimation(keyPressed);


});

function makeSound(key){

    switch (key) {
        case "w":
    
            
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
    
            break;
    
        case "a":
    
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
    
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
    
        case "d":
    
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
    
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
    
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
    
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
    
    
        default:
            console.log(key);
        
    }
}

function makeAnimation(currentKey){

 var activekey = document.querySelector("."+currentKey);
 activekey.classList.add("pressed");

setTimeout(function() {
    activekey.classList.remove("pressed");
}, 100);


}

