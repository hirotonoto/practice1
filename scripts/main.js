const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myVariable;
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc ==='images/firefox-24921__340.png' ) {
      myImage.setAttribute ('src','images/fox.png');
    } else {
      myImage.setAttribute ('src','images/firefox-24921__340.png');
    }
}