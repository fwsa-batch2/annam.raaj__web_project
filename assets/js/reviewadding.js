let reviews = [];

function pageOnLoad() {
  const reviewListing = JSON.parse(localStorage.getItem("Customer_Reviews"));
  if (reviewListing != null) {
    reviews = reviewListing;
  }
}

// It will  store the Form fields in local storage and also see whether review containonly empty spaces
function reviewList(event) {
  event.preventDefault();
  
  let userName = document.getElementById("userName").value;
  let customerReview = document.getElementById("review").value;

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


