let storage = []
function loginStorage(event) {

    event.preventDefault();
    let email = document.getElementById("input2").value;
    let password = document.getElementById("input3").value;
    let bool = false;

    let array = JSON.parse(localStorage.getItem("User Credentials"));

let object={}

    for (let i of array) {
        console.log(i);
        console.log(email);
        console.log(i.email_id);
        console.log(password);
        console.log(i.createpassWrd);

        if (i.email_id == email && i.createpassWrd == password) {
            bool = true;
            object=i
            break;
        }
    }

    console.log(bool)



    if (bool) {
        localStorage.setItem("LoginDetails", JSON.stringify(object))
        alert("successfully Logged In.")
        window.location.href = "../pages/MyAccount.html";
    }
    else {
        alert("Invalid Email_ID or Password.");
    }


}


function show() {
    let showPassword = document.getElementById("input3");
   
    if (showPassword.type === "password") {
        showPassword.type = "text";
    }
    else {
        showPassword.type = "password";
    }
}

