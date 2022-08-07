
// var myName = "bilal"
// var input = (document.getElementById("name").innerHTML)
// function validate(){
//   if(( input == myName) &&
//   // (document.getElementById("password").innerText === credentials.password1) ||
//   // (document.getElementById("name").innnerText === credentials.Name2) &&
//   // (document.getElementById("password").innerText === credentials.password2) || 
//   // (document.getElementById("name").innerText === credentials.Name3) && 
//   // (document.getElementById("password").innerText === credentials.password3) &&
//   (input !== "")){
//     alert("login Successfully")
    
//     }
//  else{
//   alert("Login failed")
//  }
// }

let num1 = 8
let num2 = 2

let sum = document.getElementById("sum-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


function add() {
  let result = num1 + num2
  sum.innerText = "output:" + result
}
function subtract() {
  let result = num1 - num2
  sum.innerText = "output:" + result
}
function multiply() {
  let result = num1 * num2
  sum.innerText = "output:" + result
}
function divide() {
  let result = num1 / num2
  sum.innerText = "output:" + result
}

function reset() {
  sum.textContent = ""
}