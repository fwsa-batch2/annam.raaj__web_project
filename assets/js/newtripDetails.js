let newTripDetails = [];

function pageOnLoad() {
  const tripListing = JSON.parse(localStorage.getItem("Trip_Details"));
  if (tripListing != null) {
    newTripDetails = tripListing;
  }
}

// it will store the form fields in local sorage and also check whether trip alredy exists 

function newTrip(event) {
  event.preventDefault(); 
  
  let tripName = document.getElementById("tripName").value;
  let startingPrice = document.getElementById("tripPrice").value;
  let guideName = document.getElementById("guideName").value;
  let pickUpPoint = document.getElementById("pickUpPoint").value;

  
  const tripAddingdetails = {
    "placeName": tripName,
    "startingPrice": startingPrice,
    "guideName": guideName,
    "pickUpPoint": pickUpPoint,
    
  };
  let isPlaceALreadyExists=false;
  let array = JSON.parse(localStorage.getItem("Trip_Details"));
  for(let i=0; i<newTripDetails.length; i++){
    if(array[i].placeName === tripName){
      isPlaceALreadyExists=true;

      break;
    }
  }

  if(isPlaceALreadyExists){
    alert("Please Do Not Enter Place That Already Exists!!!");
    return;
  }

  newTripDetails.push(tripAddingdetails);
  localStorage.setItem("Trip_Details", JSON.stringify(newTripDetails));

  window.location.href="./../pages/new trip list.html";

  
}

pageOnLoad()