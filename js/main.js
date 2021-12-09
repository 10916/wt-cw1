// variables
let documentForm = document.getElementById('form')
let userName = document.getElementById('name')
let userEmail = document.getElementById('email')
let num = [0-9];
let mail = "@"

// function to validate and accept input
documentForm.addEventListener("submit", function(event){
    // prevent refreshing the page
    event.preventDefault();

    // console format
    let persData = {
        name: userName.value,
        email: userEmail.value
    };

    // validate name, then email
    if(persData.name === ""){
        alert("Name can't be blank.")
    } else if(persData.name == num){
        alert("Name can't be a number.")
    } else if(persData.email.includes(mail)) {
        console.log(persData)
    } else {
        alert("Wrong email format.")
    }
          
});



