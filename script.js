const btn = document.getElementById('changeColor');
let RandomNum = () =>{
    
    return Math.floor(Math.random() * 256);
}
let changeColor = () =>{
    let randomColor = `rgb(${RandomNum()},${RandomNum()},${RandomNum()})`;
    document.body.style.backgroundColor = randomColor;

    
}
btn.addEventListener('click',changeColor);
window.addEventListener('load',changeColor);
