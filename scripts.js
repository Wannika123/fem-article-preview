console.log('Hello');

const linksBox = document.getElementsByClassName('links-box')[0];

const shareIcon = document.getElementById('share-icon');

shareIcon.addEventListener('click', () => {
    shareIcon.style.color = 'hsl(210, 46%, 95%)';
    shareIcon.style.backgroundColor = 'hsl(214, 17%, 51%)';
    linksBox.style.visibility = 'visible';
})

document.addEventListener('click', event => {
    if (event.target != shareIcon) {
        shareIcon.style.color = 'hsl(214, 17%, 51%)';
        shareIcon.style.backgroundColor = 'hsl(210, 46%, 95%)';
        linksBox.style.visibility = 'hidden';
    } 
})

