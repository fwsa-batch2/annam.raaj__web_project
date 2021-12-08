

function passwordValidation(){
    event.preventDefault();
    let password1 = document.getElementById("createPassword").value;
    let password2 = document.getElementById("confrimPassword").value;
    if (password1 == password2){
        console.log(" Your Password matched")
        window.location.replace("userlogin.html")
    }
    else {
       document.getElementById("pass").innerHTML=("Paswords are different.")
           }
  
 
}


