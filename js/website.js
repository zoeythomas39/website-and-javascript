let catImage = document.querySelector('#cat');
let ramonaImage = document.querySelector('#ramona');
let maxineImage = document.querySelector('#maxine');

ramonaImage.style.display = 'none';

maxineImage.style.display = 'none';

catImage.onclick = () => {
    if(catImage.getAttribute('src') === 'images/cat_and_mouse.jpeg')
    {
        catImage.setAttribute('src', 'images/ramona.jpeg');

    } else if(catImage.getAttribute('src') === 'images/ramona.jpeg')
    {
        catImage.setAttribute('src','images/maxine.jpeg');
    } else {
        catImage.setAttribute('src','images/cat_and_mouse.jpeg');
    }
}