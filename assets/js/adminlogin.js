// check whether Admin ID and Cod is same or not 

function submitHandler(event){
    event.preventDefault();
    let worldTourAdminId="WT000ADMIN";
    let worldTourSecretCode="FWSA";

   let worldTourID=document.getElementById("admimID").value;
   let worldTourCode=document.getElementById("secretCode").value;
   if(worldTourAdminId == worldTourID && worldTourSecretCode == worldTourCode){
       alert("Welcome Admin!!!"); 
       window.location.href="./../pages/New Trip details.html"  
   }
   else{
       alert("Invalid Admin!!!")
   }
} 