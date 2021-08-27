let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/light1.jpg') {
        myImage.setAttribute('src', 'images/light2.jpg');
    } else {
        myImage.setAttribute('src', 'images/light1.jpg');
    }
}