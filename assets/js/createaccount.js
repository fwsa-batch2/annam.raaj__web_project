
let list = [];


function recoverDetails() {
    let details = localStorage.getItem("User Credentials");
    let detailsToArray = JSON.parse(details);
    if (detailsToArray) {
        list = detailsToArray
    }
}
recoverDetails();

// Will store in local storage 
function submitHandler(event){
    
    event.preventDefault();
    console.group("details")

    let userName = document.getElementById("userName").value;
    let email = document.getElementById("emailId").value;
    let createPassword = document.getElementById("createPassword").value;
    let mobileNumber = document.getElementById("mobileNumber").value;

    if(createPassword.trim() == ""){
        alert("Password Cannot Have only Spaces!");
        return null;
    }
    
    let userDetails = {
        "userName": userName,
        "email_id": email,
        "createPassWord": createPassword,
        "Mobile_Number": mobileNumber,
       
        
    }
    let isEmailAleadyExists=false;
    let array=JSON.parse(localStorage.getItem("User Credentials"));
    console.table(array);
    for(let i=0;i< list.length ;i++){
        if(array[i].email_id==email){
            isEmailAleadyExists=true;
            
            break;
         }
        }
        if(isEmailAleadyExists){
            alert("Email-id already exsits.");
            return;
        }

    let mismatch = passwordValidation();

    if (mismatch) {
        list.push(userDetails);
        const accountDetails = JSON.stringify(list);
        localStorage.setItem("User Credentials", accountDetails);
        alert("successfully Registered")
        window.location.href = "userlogin.html"
    }
    else {
        console.error("Passwords are different.")
        
    }
   
    console.groupEnd("details") 
   
     
}


// Will check whether passwords are same

function passwordValidation() {
    
    let createPasswordCheck = document.getElementById("createPassword").value; 
    let confirmPasswordCheck = document.getElementById("confirmPassword").value;

    if (createPasswordCheck == confirmPasswordCheck) {
        console.log(" Your Password matched")


        return true;
    }
    else {

        document.getElementById("password_Error_Message").innerHTML = ("Passwords are Not Same!!!");

        return false;
    }
}

// will show the password when box is checked

function showPasswordWhenChecked() {
    let showConfirmPassword = document.getElementById("confirmPassword");
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
