let storage = []
function loginStorage() {

    event.preventDefault();
    let email = document.getElementById("input2").value;
    let password = document.getElementById("input3").value;
    let bool = false;

    let array = JSON.parse(localStorage.getItem("User Credentials"));
   

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        console.log(email);
        console.log(array[i].email_id);
        console.log(password);
        console.log(array[i].createpassWrd);

        if (array[i].email_id == email && array[i].createpassWrd == password) {
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




