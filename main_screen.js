let description = document.getElementById('description');
let centerImage = document.querySelector('img');
let aboutButton = document.getElementById('aboutbutton')
console.log(centerImage);
let typedCounter = 1;
let stringIndex = 0;
let images = ['images/main_screen_picture.jpg', 'images/main_screen_picture2.jpg', 'images/main_screen_picture3.jpg'];
let imageCounter = 0;
let buttonOpacity = 0;

function type() {
    if (typedCounter == 1) {
        let sentence1 = setInterval(function() {
            description.innerHTML += strings[stringIndex];
            if (stringIndex < strings.length - 1) {
                stringIndex++
            }
            else {
                stringIndex = 0;
                typedCounter++;
                console.log(typedCounter);
                aboutButton.style.display = 'block';
                let buttonFade = setInterval(function() {
                    buttonOpacity += '10';
                    aboutButton.style.opacity = `${buttonOpacity}%`;
                    if (buttonOpacity >= 100) {
                        clearInterval(buttonFade);
                    }
                }, 200)
                clearInterval(sentence1);
            }
        }, 100);
    }
}

function pictureSlideshow() {
    setInterval(function() {
        centerImage.src = images[imageCounter];
        console.log(centerImage.src);
        imageCounter++;
        if(imageCounter > 2) {
            imageCounter = 0;
        }
    }, 8000);    
}

type();
pictureSlideshow();