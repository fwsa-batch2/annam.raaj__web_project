let trips = "";
let tripDetails = JSON.parse(localStorage.getItem("details"));
for(let i of tripDetails){
    let nameOfPlace = i.placeName;
    let startingPrice = i.startingPrice;
    
    let nameOfGuide = i.guideName;
    
    trips += 
    "<div class='tripInfo' id='tripInfo'><p > Place:- <span class='place'>"+ nameOfPlace 
    + "</span></p><p> Starting Price in INR :- <span class='price'>"
    + startingPrice + "</span></p><p> Guide Name:-<span class='guide'>"
    + nameOfGuide + "</span></p></div>"
}

let div = document.getElementById("tripList");
div.innerHTML = trips;