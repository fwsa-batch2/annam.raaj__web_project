function submitHandler(event){
    event.preventDefault();
    let userId="WT000ADMIN";
    let code="FWSA";

   let id=document.getElementById("idNum").value;
   let passcode=document.getElementById("code").value;
   if(userId == id && code == passcode){
       alert("Welcome Admin!!!"); 
       window.location.href="./../pages/New Trip details.html"  
   }
   else{
       alert("Invalid Admin")
   }
}