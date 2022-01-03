function forgetPassword(event){

    event.preventDefault();

    let email = document.getElementById("mail").value;
    let crtpassword = document.getElementById("createPassword").value;
    let contpassword = document.getElementById("cofrimPassword").value;
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
        if(crtpassword != contpassword){
            alert("Passwords are different.")
        }
        else if(crtpassword == contpassword){
            alert("Your password is succesfully been reset ");
            array[index].createpassWrd=crtpassword;
            
            localStorage.setItem("User Credentials", JSON.stringify(array));
            window.location.href = "userlogin.html"
        }
    }
    else if(!bool){
      alert("Email_ID Dose not Exsits")
    }
  
    
}