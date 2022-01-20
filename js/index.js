//Fibobacci sequence
const reset = document.querySelector('#reset');
const btn = document.querySelector('.btn');
const nums = document.querySelector('.nums');

let num1 = 0;
let num2 = 1;

const Fibonacci = (x, y) => {
    let z;
    for (let i=0; i<20; i++) {
        z=x+y;
        x=y;
        y=z;
        nums.append(' ' + z);
        //console.log(`${i+3}: ${z}`);
    }
    num1 = x;
    num2 = y;
}

reset.addEventListener('click', e => {
    location.reload()
});

btn.addEventListener('click', e => {
    e.target.textContent = 'see more';
    Fibonacci(num1, num2);
    nums.style.visibility = 'visible'
});

