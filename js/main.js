var input, result;
var num = 0; 
function myFunction (){
  input = Number(document.getElementById('input').value);
};
function sumFun() {
  myFunction();
  num = result = num+input;
  display.textContent = result;
  if (num < 0) {
    document.getElementById('display').style.color = 'red';
  }
    if (num > 0) {
    document.getElementById('display').style.color = 'black';
  }
}
function minusFun() {
  myFunction();
  num = result = num-input;
  display.textContent = result; 
  if (num < 0) {
    document.getElementById('display').style.color = 'red';
  }
    if (num > 0) {
    document.getElementById('display').style.color = 'black';
  }
}
function init(){
  var num = 0;
  render();
};
function render() {
};
init();
