function randomNumber(){
    return Math.floor(Math.random()*256);
}
const bt1=document.getElementById('b1');
function repeater(){
let r1 = randomNumber();
let r2 = randomNumber();
let r3 = randomNumber();
console.log(r1);
console.log(r2);
console.log(r3);
function changeColor(){
 let randomColor ='rgb('+r1+','+r2+','+r3+')';
 document.body.style.backgroundColor=randomColor;
}
bt1.addEventListener('click',changeColor);}
bt1.addEventListener('click',repeater);