let light = document.querySelector('#light');
let dark = document.querySelector('#dark');

dark.style.display = "none"

function lightPage() {
  document.body.style.backgroundColor = "white"
  light.style.display = "none"
  dark.style.display = "block"
}
function darkPage() {
  document.body.style.backgroundColor = "black"
  dark.style.display = "none"
  light.style.display = "block"
}
const rate1 = document.querySelector('#rate1');
const rate2 = document.querySelector('#rate2');
const rate3 = document.querySelector('#rate3');
const rate4 = document.querySelector('#rate4');
const rate5 = document.querySelector('#rate5');
const p = document.querySelector("#my-work");

rate1.addEventListener('click', updateButton1);
rate2.addEventListener('click', updateButton2);
rate3.addEventListener('click', updateButton3);
rate4.addEventListener('click', updateButton4);
rate5.addEventListener('click', updateButton5);

function updateButton1() {
  if (rate1.value === '1') {
    rate1.value = '1';
    p.textContent = 'You selected 1 out of 5';
  } 
else {
    p.textContent = "You haven't selected anything";
  }
}  
function updateButton2() {
    if (rate2.value === '2') {  
      rate2.value = '2';
      p.textContent = 'You selected 2 out of 5';
    } else {
      p.textContent = "You haven't selected anything";
    }
}  
function updateButton3() {
     if (rate3.value === '3') {
      rate3.value = '3';
      p.textContent = 'You selected 3 out of 5';
    } else {
      p.textContent = "You haven't selected anything";
    }
  }  
  function updateButton4() {
    if (rate4.value === '4') {
      rate4.value = '4';
      p.textContent = 'You selected 4 out of 5';
    } else {
      p.textContent = "You haven't selected anything";
    }
  }  
  function updateButton5() {
    if (rate5.value === '5') {
      rate5.value = '5';
      p.textContent = 'You selected 5 out of 5';
    } else {
      p.textContent = "You haven't selected anything";
    }
  }


let firstPage = document.querySelector('#firstPage');
let secondPAge = document.querySelector('#secondPage');

function changePage() {
  firstPage.style.display = "none"
  secondPAge.style.display = "flex"
}