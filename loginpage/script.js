
let credentials = [
    {Name1:"bilal" , password1:"markcoders"},
    {Name2:"huzefa", password2:"abc123"},
    {Name3:"saram",  password3:"saram90"}
]

if((document.getElementById("name").innerText === credentials.Name1) &&
  (document.getElementById("password").innerText === credentials.password1) ||
  (document.getElementById("name").innnerText === credentials.Name2) &&
  (document.getElementById("name").innerText === credentials.password2) || 
  (document.getElementById("name").innerText === credentials.Name3) && 
  (document.getElementById("name").innerText === credentials.password2) &&
  (document.getElementById("input").innerText !== "")){
    console.log(hello)
}
