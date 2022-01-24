
let list = [];
function recoverDetails() {
    let details = localStorage.getItem("User Credentials");
    let detailsToArray = JSON.parse(details);
    if (detailsToArray) {
        list = detailsToArray
    }
}
recoverDetails();

function myPassword(event){
    
    event.preventDefault();
    console.group("details")

    let uName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let createpass = document.getElementById("createPassword").value;
    if(uName.trim() == ""){
        alert("User Name Cannot Have only Spaces!");
        return null;
    }

    if(createpass.trim() == ""){
        alert("Password Cannot Have only Spaces!");
        return null;
    }
    
    let userDetails = {
        "userName": uName,
        "email_id": email,
        "createpassWrd": createpass,
       
        
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
        document.getElementById("pass").innerHTML = ("Passwords are different.");
    }
   
    console.groupEnd("details") 
   
     
}

   

//[{},{}]
//let isEmailAleadyExists=false;
//for(i=0;i<array.length;i++){
   // if(email==array[i].email_id){
  //isEmailAlre=true;
 // break
 //if(isEmailAr==true)
 // new Date()
 //error
  // get id
  // assign a vairble
  // if var.length != 10 {error}
  // .min=new Date()


function passwordValidation() {
    
    let createpass = document.getElementById("createPassword").value; 
    let confrimpass = document.getElementById("confirmPassword").value;

    if (createpass == confrimpass) {
        console.log(" Your Password matched")


        return true;
    }
    else {

        document.getElementById("pass").innerHTML = ("Passwords are different.");

        return false;
    }
}


function show() {
    let showPassword = document.getElementById("confirmPassword");
    let showCreatePassword = document.getElementById("createPassword");

    if(showCreatePassword.type === "password"){
        showCreatePassword.type = "text";
    }
    else{
        showCreatePassword.type = "password"
    }
   
    if (showPassword.type === "password") {
        showPassword.type = "text";
    }
    else {
        showPassword.type = "password";
    }
}



