let catImage = document.querySelector('#cat');
let ramonaImage = document.querySelector('#ramona');
let maxineImage = document.querySelector('#maxine');
let pumpkinImage = document.querySelector('#pumpkin');
let marieImage = document.querySelector('#marie');

ramonaImage.style.display = 'none';

maxineImage.style.display = 'none';

marieImage.style.display = 'none';

catImage.onclick = () => {
    if(catImage.getAttribute('src') === 'images/cat_and_mouse_resized.jpg')
    {
        catImage.setAttribute('src', 'images/ramona_resized.jpg');

    } else if(catImage.getAttribute('src') === 'images/ramona_resized.jpg')
    {
        catImage.setAttribute('src','images/maxine_resized.jpg');
    } else {
        catImage.setAttribute('src','images/cat_and_mouse_resized.jpg');
    }
};

pumpkinImage.onmouseover = () => {
pumpkinImage.setAttribute('src', 'images/marie_kitty_resized2.jpg')
};

pumpkinImage.onmouseout = () => {
    pumpkinImage.setAttribute('src', 'images/pumpkin.svg')
};