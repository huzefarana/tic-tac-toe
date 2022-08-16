
let credentials = [
  {Name1:"bilal" , password1:"markcoders"},
  {Name2:"huzefa", password2:"abc123"},
  {Name3:"sarang",  password3:"sarang90"} 
]

function validate(){
  var input1 = (document.getElementById("name").value)
  var input2 = (document.getElementById("password").value)

  if((input1 == credentials[0].Name1) &&
     (input2 == credentials[0].password1) ||
     (input1 == credentials[1].Name2) &&
     (input2 == credentials[1].password2) ||
     (input1 == credentials[2].Name3) &&
     (input2 == credentials[2].password3) &&
     (input1 && input2 !== "")
){
    alert("login Successfully")   
    }
 else{
  alert("Login failed")
 }
}









