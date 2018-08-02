//this function targets the #center and changes the text to the current time.
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m =checkTime(m);
    s =checkTime(s);
    document.getElementById("center");
    document.getElementById("center").innerHTML = h +":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i ="0" + i }  // add zero in front of numbers < 10
    return i;
}

var today = new Date()   //This script says make today the new date 
var curHr = today.getHours() //this says get the hourse of the new date

if (curHr < 12) { //if the current hour is less then 12, say good morning
    document.body.background = "philly.jpg";
    document.getElementById("greeting").innerHTML ="Good Morning";
} else if (curHr < 18) { //else if the current hours is less than 18 say good afternoon
    document.body.background = "nyc.jpg";
    document.getElementById("greeting").innerHTML ="Good Afteroon";
} else { //else after 24 hours say good evening.
    document.body.background = "miami.jpg";
    document.getElementById("greeting").innerHTML ="Good Evening";
}

