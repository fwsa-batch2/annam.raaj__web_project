let reviews = "";
let customerReviews = JSON.parse(localStorage.getItem("Customer Reviews"));
for(let i of customerReviews){
    let nameOfUser = i.userName;
    let customersReview = i.customerReview;
    
    
    
    reviews += 
    
    

     `<div class="container4" id="review">
        <img src="./../assets/image/admin.png" alt="user" class="profile">
        <p class="name">${nameOfUser}</p>
        <p><strong> Comment:</strong> ${customersReview} </p>
        <p class="star"> <strong> Rating:- </strong> &#9733; &#9733; &#9733; &#9733; &#9733; </p>
    </div>`
}

let div = document.getElementById("MainBox");
div.innerHTML += reviews;