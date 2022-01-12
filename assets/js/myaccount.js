let user = "";
let customerDetails = JSON.parse(localStorage.getItem("LoginDetails"));

    console.log(customerDetails);
    
    
    user += 
  "<div class='container' id=\"userdetails\"><h1>Your Profile: </h1><br><img src='./../assets/image/boy.png' alt='boy' class='profile'><p>Name:" + customerDetails.userName +
    "</p> <p>Email:" + customerDetails.email_id +
    "</p> <p>Moblie no.:9493170308</p></div>"

    


let div = document.getElementById("userdetails");
div.innerHTML = user;