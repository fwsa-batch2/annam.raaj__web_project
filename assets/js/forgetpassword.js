// will check if email is same in local storae then it will change the password and put it local storage

function forgetPassword(event){

    event.preventDefault();

    let email = document.getElementById("Mail_Id").value;
    let createpassword = document.getElementById("createPassword").value;
    let confirmpassword = document.getElementById("cofirmPassword").value;
    if(createpassword.trim() == ""){
        alert("Password Cannot Have only Spaces!");
        return null;
    }
    let bool = false;
    let index=0;
    let array = JSON.parse(localStorage.getItem("User Credentials"));
   

    for (let i of array) {
        if (i.email_id == email) {
            index = array.indexOf(i);
            bool = true;
            break;
          }
    }

    if (bool) {
        if(createpassword != confirmpassword){
            alert("Passwords are different.")
        }
        else if(createpassword == confirmpassword){
            alert("Your password is succesfully been reset ");
            array[index].createPassWord=createpassword;
            
            localStorage.setItem("User Credentials", JSON.stringify(array));
            window.location.href = "userlogin.html"
        }
    }
    else if(!bool){
      alert("Email_ID Dose not Exsits")
    }
  
     
}


// will show the password when box is checked

function showPasswordWhenChecked() {
    let showConfirmPassword = document.getElementById("cofirmPassword");
    let showCreatePassword = document.getElementById("createPassword");

    if(showCreatePassword.type === "password"){
        showCreatePassword.type = "text";
    }
    else{
        showCreatePassword.type = "password"
    }
   
    if (showConfirmPassword.type === "password") {
        showConfirmPassword.type = "text";
    }
    else {
        showConfirmPassword.type = "password";
    }
}
