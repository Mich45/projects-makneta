const countries = ["Poland", ,"Ukraine", "Germany", "Sweden", "Austria", "France", "Lithuania", "Hungary", "Chech Republic"]

const countryPhotos = {
    "Poland" : "./img/countries/polandGdansk.jpg",
    "Germany": "img/countries/germany.jpg", 
    "Sweden" : "img/countries/sweden.jpeg",
    "Austria" : "img/countries/austria.jpg",
    "France" : "img/countries/france.jpg",
    "Lithuania" : "img/countries/trakai.jpg", 
    "Hungary" : "img/countries/hungary.jpg", 
    "Czech Republic": "img/countries/praga_0.jpg",
    "Ukraine" : "img/countries/ukraine.jpg"
}

const cardName = document.getElementById("card-name");
const cardPlace = document.getElementById("card-place")

cardPlace.style.display = "none";

function greetings() {
    let yourName = document.getElementById("your-name").value;
       
    document.getElementById("answer-name").innerHTML = `Hello, ${yourName}! Nice to meet you.`;
    cardName.style.display = "none";
    cardPlace.style.display = "block";
    }

function place() {
    let country = document.getElementById("place").value;
    if (countries.includes(country)){
        document.getElementById("answer-country").innerHTML = `${country} is the most beautiful place I've ever visited.`
        cardPlace.style.display = "none";
        let newItem = document.getElementById("photo");
        let photoAddress = countryPhotos[country];
        
        newItem.innerHTML = `<img src='${photoAddress}' width=\"550px\" height=\"400px\">`;    
    
    } else {
        document.getElementById("answer-country").innerHTML = `I have never been to ${country}. It's on my travel bucket list.`
        cardPlace.style.display = "none";
        let newItem = document.getElementById("photo");
        newItem.innerHTML = "<img src='img/countries/traveler.jpeg' width=\"550px\">";
    }   
}