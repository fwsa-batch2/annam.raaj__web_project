// function used to check whether query is empty if empty show error And show the query in console.log


function submitHandler(event){
    event.preventDefault();

    let email_Id=document.getElementById("email").value;
    let queries=document.getElementById("Query").value;

    if(queries.trim() == ""){
        alert("Query Cannot Have Only Spaces!");
        return null;
    }


    console.log(email_Id);
    console.log(queries);
    
    alert("Recived Your Query.");
}