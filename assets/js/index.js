
function holidayTrip(event){
    event.preventDefault();

    let trips=localStorage.getItem("LoginDetails");

    if(trips){
        window.open("./pages/holidaytrip.html");
    }
    else{
        alert("Login to View the trips");
        window.location.href = "./pages/userlogin.html"
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
        window.location.href = "./pages/userlogin.html"
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
        window.location.href = "./pages/userlogin.html"
    }
}  

function myProfile(event){
    event.preventDefault();

    let profile=localStorage.getItem("LoginDetails");

    if(profile){
        window.open("./pages/MyAccount.html");
    }

    else{
        alert("Login To view Your Profile!");
        window.location.href = "./pages/userlogin.html"
    }

}

function searchBar(event){
    event.preventDefault();

let tripSearched=document.getElementById("searchBox").value;


 if ("Newyork trip" == tripSearched){
    window.open("./pages/NewYork.html")
}

else if ("Paris trip" == tripSearched){
    window.open("./pages/Paris.html")
}

else if ("Singapore trip" == tripSearched){
    window.open("./pages/Singapore.html")
}

else if ("Delhi trip" == tripSearched){
    window.open("./pages/Delhi.html")
}

else if ("Agra trip" == tripSearched){
    window.open("./pages/Agra.html")
}

else if ("Ooty trip" == tripSearched){
    window.open("./pages/Ooty.html")
}

else if ("Darjeeling trip" == tripSearched){
    window.open("./pages/Darjeeling.html")
}

else if ("Araku trip" == tripSearched){
    window.open("./pages/Arakuvalley.html")
}

else if ("Varanasi trip" == tripSearched){
    window.open("./pages/Varanasi.html")
}

else if ("Tirumala trip" == tripSearched){
    window.open("./pages/Tirumala.html")
}

else if ("Hajj trip" == tripSearched){
    window.open("./pages/Macca.html")
}

else if ("Jerusaleum trip" == tripSearched){
    window.open("./pages/jerusaleum.html")
}
else{
    alert("Page Not Found!")
    console.error("Page Not Found")
}
    
}