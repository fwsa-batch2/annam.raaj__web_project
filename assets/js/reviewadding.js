let reviews = [];

function pageOnLoad() {
  const reviewListing = JSON.parse(localStorage.getItem("Customer Reviews"));
  if (reviewListing != null) {
    reviews = reviewListing;
  }
}

// It will create local storage and  store the Form fields in local storage
function reviewList(event) {
  event.preventDefault();
  
  let userName = document.getElementById("userName").value;
  let customerReview = document.getElementById("review").value;
  if(userName.trim() == ""){
    alert("User Name Cannot Have only Spaces!")
    return null;
  }
  if(customerReview.trim() == "" ){
    alert("Review Cannot Have Only Spaces!")
    return null;
  }
  

     

  const reviewAddingdetails = {
    "userName": userName,
    "customerReview": customerReview,
    
    
  };

  reviews.push(reviewAddingdetails);
  localStorage.setItem("Customer_Reviews", JSON.stringify(reviews));

  window.location.href="./../pages/Review.html";

  
}

pageOnLoad()


