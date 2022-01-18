
function holidayTrip(event){
    event.preventDefault();

    let trips=localStorage.getItem("LoginDetails");

    if(trips){
        window.open("./pages/holidaytrip.html");
    }
    else{
        alert("Login to View the trips");
        window.location.href = "./../pages/userlogin.html"
    }
}

function summerTrip(event){
    event.preventDefault();

    let trips2=localStorage.getItem("LoginDetails");

    if(trips2){
        window.open("./pages/summertrip.html");
    }

    else{
        alert("Login to View the trips");
        window.location.href = "./../pages/userlogin.html"
    }

}

function pilgrimageTrip(event){
    event.preventDefault();

    let trips3=localStorage.getItem("LoginDetails");

    if(trips3){
        window.open("./pages/Pilgrimagetrip.html");
    }

    else{
        alert("Login to View the trips");
        window.location.href = "./../pages/userlogin.html"
    }
}   