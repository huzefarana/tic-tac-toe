
var myName = "bilal"
var input = (document.getElementById("name").innerText)
function validate(){
  if(( input == myName) &&
  // (document.getElementById("password").innerText === credentials.password1) ||
  // (document.getElementById("name").innnerText === credentials.Name2) &&
  // (document.getElementById("password").innerText === credentials.password2) || 
  // (document.getElementById("name").innerText === credentials.Name3) && 
  // (document.getElementById("password").innerText === credentials.password3) &&
  (input !== "")){
    alert("login Successfully")
    
    }
 else{
  alert("Login failed ")
 }
}




