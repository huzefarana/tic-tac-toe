
let credentials = [
  {Name1:"bilal" , password1:"markcoders"},
  {Name2:"huzefa", password2:"abc123"},
  {Name3:"saram",  password3:"saram90"}
]

function validate(){
  if((document.getElementById("name").innerText === credentials.Name1) &&
  (document.getElementById("password").innerText === credentials.password1) ||
  (document.getElementById("name").innnerText === credentials.Name2) &&
  (document.getElementById("password").innerText === credentials.password2) || 
  (document.getElementById("name").innerText === credentials.Name3) && 
  (document.getElementById("password").innerText === credentials.password3) &&
  (document.getElementById("input").innerText !== "")){
    alert("login Successfully")
    document.getElementById("myButton").onclick = function (){
      location. href = "dashboard.html"
     }
    
    }
 else{
  alert("Login failed ")
 }
}




