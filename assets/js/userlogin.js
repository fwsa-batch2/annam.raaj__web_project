let storage = []

// will check whether Email ID and Psswords are same and store the logged In user details in local storage

function loginStorage(event) {
    event.preventDefault();

    let email = document.getElementById("mailId").value;
    let password = document.getElementById("password").value;
    let bool = false;

    let array = JSON.parse(localStorage.getItem("User Credentials"));

let object={}

    for (let i of array) {
        

        if (i.email_id == email && i.createPassWord == password) {
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

// will show the password wen box is checked

function showPasswordWhenChecked() {
    let showPassword = document.getElementById("password");
   
    if (showPassword.type === "password") {
        showPassword.type = "text";
    }
    else {
        showPassword.type = "password";
    }
}

