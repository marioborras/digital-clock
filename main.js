document.querySelector("body").onload = ()=> {
    startTime()
    getLocation()
    showPosition()
}

const checkTime =(i) => {
    if (i < 10) { 
        i = 0 + i
     }  // add zero in front of numbers < 10
    return i;
}

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}



const site = document.querySelector("html")
const greetElement = document.querySelector("#greeting")

const startTime = () => {
    const today = new Date()
    const hour = today.getHours()
    let minute = today.getMinutes()
    let seconds = today.getSeconds()
    minute = checkTime(minute)

    seconds = checkTime(seconds)
        document.querySelector("#center").textContent = `${hour} : ${minute} : ${seconds}`

        //This script says make today the new date 



    if (hour < 12) { //if the current hour is less then 12, say good morning
        site.style.backgroundImage = "url('philly.jpg')";
        // document.body.background = "philly.jpg";
        greetElement.textContent ="Good Morning";
    } else if (hour < 18) { //else if the current hours is less than 18 say good afternoon
        site.style.backgroundImage = "url('nyc.jpg')";
       
        greetElement.textContent ="Good Afteroon";
    } else { //else after 24 hours say good evening.
        site.style.backgroundImage = "url('miami.jpg')";
        greetElement.textContent ="Good Evening";
    }

}
window.setInterval(()=> {
    startTime()
},500)



