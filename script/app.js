let counterBox = document.getElementById('counter-number');
let tabBtn = document.getElementById('tap');
let resetBtn = document.getElementById('reset');
let images = document.getElementById('images');
console.log(counterBox.textContent);

let count = 0;
function add() {
  count = count + 1;
  counterBox.innerText = count;

  if (counterBox.textContent >= 100) {
    images.src = 'images/2.svg';
    counterBox.innerText = 0;
  }
  if (counterBox.textContent >= 200) {
    images.src = 'images/3.svg';
    counterBox.innerText = 0;
  }
  if (counterBox.textContent >= 300) {
    images.src = 'images/4.svg';
    counterBox.innerText = 0;
  }
}

resetBtn.addEventListener('click', function () {
  counterBox.innerText = 0;
});
