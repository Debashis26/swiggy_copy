
const textElement = document.querySelector('.hero-text').children;
let textLength = textElement.length;
let index=0;

function changeText() {
    for(let i=0; i<textLength-1; i++) {
        textElement[i].classList.remove('text-in');
    }
    if(index == textLength-1 ) {
        index=0;
    } else {
        index ++;
    }
    
    // console.log(index);
    textElement[index].classList.add('text-in');
    setTimeout(changeText, 3000);

}
window.onload = changeText;