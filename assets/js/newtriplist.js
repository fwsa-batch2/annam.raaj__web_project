// will get trp details from local sorage and display in this page

let trips = "";
let tripDetails = JSON.parse(localStorage.getItem("Trip_Details"));
for(let i of tripDetails){
    let nameOfPlace = i.placeName;
    let startingPrice = i.startingPrice;
    
    let nameOfGuide = i.guideName;
    
    trips += 
    "<div class='tripInfo' id='tripInfo'><p > Place:- <span>"+ nameOfPlace 
    + "</span></p><p> Starting Price in INR :- <span>"
    + startingPrice + "</span></p><p> Guide Name:-<span>"
    + nameOfGuide + "</span></p></div>"
}

let div = document.getElementById("tripList");
div.innerHTML = trips;