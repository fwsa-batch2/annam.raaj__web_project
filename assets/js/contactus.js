function submitHandler(){
    event.preventDefault();
    let email_Id=document.getElementById("email").value;
    let suggestions=document.getElementById("Suggestion").value;
    
    console.log(email_Id);
    console.log(suggestions);
    alert("Recived Your Suggestion.");
    window.location.href= "./../index.html"

}