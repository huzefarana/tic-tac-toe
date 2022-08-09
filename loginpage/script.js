
var myName = "bilal"
var input = (document.getElementById("name").innerText)
function validate(){
  if(( input == myName) &&
  (input !== "")){
    alert("login Successfully")
   }
 else{
  alert("Login failed")
 }
}
