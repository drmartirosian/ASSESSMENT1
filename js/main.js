var input, result;
var num = 0; //remove once init function setup

function myFunction (){
  input = Number(document.getElementById('input').value);
};

function sumFun() {
  myFunction();
  result = num+input;
  // render();
  display.textContent = result; //remove afterwards
}
function minusFun() {
  myFunction();
  result = num-input;
  // render();
  display.textContent = result; //remove afterwards...
}

function init(){
  var num = 0;
  render();
};
function render() {
  
  display.style.color = sum >= 0 ? 'green' : 'red';
};
init();
