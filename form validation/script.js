const name = document.getElementById("name")
const password = document.getElementById("password")
const submit = document.getElementById("submit")
const errorElement = document.getElementById("error")

form.addEventlistner("submit", (e) =>{
    let messages = []
    if(name.value === "" || name.value === null){
        messages.push("name is required")
    }
    if (password.value === ""){
        messages.push("password required")
    }
    if(password.value.length >= 6 ){
        messages.push("password must contain 6 characters")
    }
    if (password.value.length <= 20){
        messages.push("password must not be greater than 20 ")
    }    
    if(messages.length > 0 ){
        e.preventDefault()
        errorElement.innerText = messages.join(",")
    }
    
})  
 