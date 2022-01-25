// This will get the items stored in local storage and display in this page
let user = "";
let customerDetails = JSON.parse(localStorage.getItem("LoginDetails"));

    console.log(customerDetails);
    
    
    user += 
  "<div class='My_Profile_Container' id=\"userdetails\"><h1>Your Profile: </h1><br><img src='./../assets/image/User_Profile.png' alt='User_Profile' class='profile'><p>Name:" + customerDetails.userName +
    "</p> <p>Email:" + customerDetails.email_id +
    "</p> <p>Moblie no.:" + customerDetails.Mobile_Number + "</p></div>"

    


let div = document.getElementById("userdetails");
div.innerHTML = user;


// it will clear the local storage og loginDetails

function logOut(){
  
  alert("By Clicking this you will logout From your Account!!");

  localStorage.removeItem("LoginDetails");
  window.location.href = "./../index.html";


}