
var myName = "bilal"
var input = (document.getElementById("name").innerText)
function validate(){
  if(( input == myName) &&

  (input !== "")){
    alert("login Successfully")
  }
}
let credentials = [
  {name:"bilal" , password:"markcoders"},
  {name:"huzefa", password:"abc123"},
  {name:"sarang", password:"sarang90"} 
]


//   var input1 = (document.getElementById("name").value)
//   var input2 = (document.getElementById("password").value)

//   if((input1 == credentials[0].Name1) &&
//      (input2 == credentials[0].password1) ||
//      (input1 == credentials[1].Name2) &&
//      (input2 == credentials[1].password2) ||
//      (input1 == credentials[2].Name3) &&
//      (input2 == credentials[2].password3) &&
//      (input1 && input2 !== "")
// ){
//     alert("login Successfully")   
//     }
//  else{
//   alert("Login failed")
//  }
// }

check();
function check()
{

  var input1 = (document.getElementById("name").value)
  var input2 = (document.getElementById("password").value)


  
  for (let i = 0; i < credentials.length; i++) {
    let current_user=credentials[i];

    if((current_user.name == input1) &&
      (current_user.password == input2))
    {
      localStorage.setItem('name',current_user.name);
       // window. location. href = "https://www.markcoders.com"
       window.location = "dashboard.html" 
  }
}
}
