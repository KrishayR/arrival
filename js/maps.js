var start;
var end;

function getInput(input) {
    start = document.getElementById('start').value;
    start = start.replace(/ /g,"+");
    end = document.getElementById('end').value;
    end = end.replace(/ /g, "+");
    window.open('maps.html', '_blank');
    console.log(start);
    console.log(end);
}

var finalStart = JSON.stringify(start);
var finalEnd = JSON.stringify(end);
var apiKey = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + finalStart + "&destinations="+ finalEnd +"&key=AIzaSyBSlzBIzOb80D8vHfZw93mBnZt5Vv2NFRQ";

function sendRequest(){
    $.ajax({
        url:apiKey,
        success:getTraffic
    })
}
sendRequest();
function getTraffic(response){
    console.log(response);
    $("#duration").html(response.rows.elements.duration.text);
    $("#distance").html(response.rows.elements.duration.text);


}

