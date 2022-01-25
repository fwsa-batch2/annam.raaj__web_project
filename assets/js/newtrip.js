let newTripDetails = [];

function pageOnLoad() {
  const tripListing = JSON.parse(localStorage.getItem("details"));
  if (tripListing != null) {
    newTripDetails = tripListing;
  }
}


function newTripList(event) {
  event.preventDefault();
  
  let tripName = document.getElementById("newPlace").value;
  let startingPrice = document.getElementById("price").value;
  let guideName = document.getElementById("guideName").value;
  let pickUpPoint = document.getElementById("pickUp").value;
// if(tripName.trim() == ""){
//   alert("Place Name Cannot Have only Spaces!");
//   return null;
// }

// if(guideName.trim() == ""){
//   alert("Guide Name Cannot Have only Spaces!");
//   return null;
// }

// if(pickUpPoint.trim() == ""){
//   alert("Pick Up Point Cannot Have only Spaces!");
//   return null;
// }

     

  const tripAddingdetails = {
    "placeName": tripName,
    "startingPrice": startingPrice,
    "guideName": guideName,
    "pickUpPoint": pickUpPoint,
    
  };
  let isPlaceALreadyExists=false;
  let array = JSON.parse(localStorage.getItem("details"));
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
  localStorage.setItem("details", JSON.stringify(newTripDetails));

  window.location.href="./../pages/new trip list.html";

  
}

pageOnLoad()