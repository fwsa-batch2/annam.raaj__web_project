// This will get the items stored in local storage and display in this page

let reviews = "";
let customerReviews = JSON.parse(localStorage.getItem("Customer_Reviews"));
for(let i of customerReviews){
    let nameOfUser = i.userName;
    let customersReview = i.customerReview;
    
    
    
    reviews += 
    
    

     `<div class="container4" id="review">
        <img src="./../assets/image/admin.png" alt="user" class="profile">
        <p class="User_name">${nameOfUser}</p>
        <p><strong> Comment:</strong> ${customersReview} </p>
        <p class="Rating"> <strong> Rating:- </strong> &#9733; &#9733; &#9733; &#9733; &#9733; </p>
    </div>`
}

let div = document.getElementById("MainBox");
div.innerHTML += reviews;