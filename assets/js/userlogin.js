let storage = []
function loginStorage(event) {

    event.preventDefault();
    let email = document.getElementById("input2").value;
    let password = document.getElementById("input3").value;
    let bool = false;

    let array = JSON.parse(localStorage.getItem("User Credentials"));
   

    for (let i of array) {
        console.log(i);
        console.log(email);
        console.log(i.email_id);
        console.log(password);
        console.log(i.createpassWrd);

        if (i.email_id == email && i.createpassWrd == password) {
            bool = true;
            break;
        }
    }

    console.log(bool)


    if (bool) {
        localStorage.setItem("LoginDetails", email )
        alert("successfully Logged In.")
        window.location.href = "../pages/MyAccount.html";
    }
    else {
        alert("Invalid Email_ID or Password.");
    }


}




