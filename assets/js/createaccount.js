
let list = [];
function recoverDetails() {
    let details = localStorage.getItem("User Credentials");
    let detailsToArray = JSON.parse(details);
    if (detailsToArray) {
        list = detailsToArray
    }
}
recoverDetails();

function myPassword(){
    event.preventDefault();

    let uName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let createpass = document.getElementById("createPassword").value;
    let confrimpass = document.getElementById("confrimPassword").value;
    let date = document.getElementById("dob").value;
    let moblienum = document.getElementById("mobile").value;
    let userDetails = {
        "userName": uName,
        "email_id": email,
        "createpassWrd": createpass,
        "confrimpassWrd": confrimpass,
        "dateOfBrith": date,
        "mobileNum": moblienum
    }
    let isEmailAleadyExists=false;
    let array=JSON.parse(localStorage.getItem("User Credentials"));
    for(i=0;i< list.length ;i++){
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
        window.location.href = "userlogin.html"
    }
    else {
        document.getElementById("pass").innerHTML = ("Passwords are different.");
    }
   
     
   
     
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
    let confrimpass = document.getElementById("confrimPassword").value;

    if (createpass == confrimpass) {
        console.log(" Your Password matched")


        return true;
    }
    else {

        document.getElementById("pass").innerHTML = ("Passwords are different.");

        return false;
    }
}





