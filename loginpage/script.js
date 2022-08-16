
// let credentials = [
//   {Name1:"bilal" , password1:"markcoders"},
//   {Name2:"huzefa", password2:"abc123"},
//   {Name3:"saram",  password3:"saram90"} 
// ]

  var myName = "bilal"  
  var input = (document.getElementById("name").innerText)
  

function validate(){
  if((input == myName) 
  // (document.getElementById("password").innerText == credentials[0].password1) 
  // (document.getElementById("name").innnerText == credentials[1].Name2) &&
  // (document.getElementById("password").innerText == credentials[1].password2) || 
  // (document.getElementById("name").innerText == credentials[2].Name3) && 
  // (document.getElementById("password").innerText == credentials[2].password3) &&
  &&(input !== "")){
    alert("login Successfully")   
    }
 else{
  alert("Login failed ")
 }
}









