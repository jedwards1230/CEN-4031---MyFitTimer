var startbutton = document.getElementById('startButton');
var stopbutton = document.getElementById('stopButton');
stopbutton.disabled = true;

var startTime;
var stopTime;
var timer;

startbutton.onclick = start;
stopbutton.onclick = stop;

function logHistoric(data) {
    var times = data;
    iterateHistory();
}

/*function timerClock(startTime){
        var currentTime = new Date();
        var elapsedTime = new Date((currentTime - startTime)*1000);
        var elapsedTimer = [ elapsedTime.getHours(), String(elapsedTime.getMinutes()).padStart(2,"0"), String(elapsedTime.getSeconds()).padStart(2,"0")].join(":");
        document.getElementById('elapsedTimer').innerHTML = elapsedTimer;

}*/



function timeFormat(time) {
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);

    return hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) 
    + ":" + minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) 
    + ":" + seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}

// function to get start time
function start(){
    startTime = new Date();
    //counter
    //timer = setInterval(timerClock(startTime), 1000);
        
    disableStartButton();
    return startTime;
}


// function to get stop time
function stop(){
    stopTime = new Date();
    
    // To get time in hh:mm formate
    //var sptime = [ stopTime.getHours(), String(stopTime.getMinutes()).padStart(2,"0"), String(stopTime.getSeconds()).padStart(2,"0")].join(":");
    //document.getElementById("sptime").innerHTML = sptime;    

    disableStopButton()
    
    
    //Post to DB 
    $.ajax({
    type: "POST",
    url: "/postmethod",
    data: JSON.stringify({startTime: startTime.getTime(), stopTime: stopTime.getTime()}),
    contentType: "application/json",
    dataType: 'json',
    success: function(result) {
        numRows.innerHTML = result.rows; 
    } 
    });
        
    return stopTime;
}


//To insure Start button can't be clicked more than once without clicking the stop button
function disableStartButton(){
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
}


//To insure Stop button can't be clicked more than once without clicking the Start button
function disableStopButton(){
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
}

function timeConversion(elapsedT){

    // make it in milliseconds by *1000 since js takes milliseconds
    var date = new Date(elapsedT  * 1000);
    var hours = date.getHours();

    // Minutes part from the timestamp
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    //to show time in hh:mm:ss
    var formattedElapsedTime = [hours, String(minutes).padStart(2,"0"), String(seconds).padStart(2,"0")].join(":");
    return formattedElapsedTime;
}

function iterateHistory(){
    var parent = document.getElementById('history');
    for (var time = times.length; time >= 0; time--){
            var p = document.createElement("p");
            var br = document.createElement("br");
            //calculate elapsed time
            var elapsedT = times[time].stopTime - times[time].startTime;
            
            //convert time to hh:mm:ss and set it to variable
            var text = document.createTextNode(timeFormat(elapsedT));
            p.classList.add('history-text');
            p.appendChild(text);
            p.appendChild(br);
            parent.appendChild(p);
    }
}



var delta;
var elapsedT
var hours; 
var minutes;
var seconds; 
var t;

//For the time to continue to count up when start is clicked
$("#startButton").click( function(){
    delta = setInterval(function() {
        
        let t = new Date();
        let elapsed = t - startTime;
        let elapsedT = new Date(elapsed);
        //var elapsedTimer = [ String(Math.floor(elapsedT/36000)).padStart(2, "0"), String(elapsedT.getMinutes()).padStart(2,"0"), String(elapsedT.getSeconds()).padStart(2,"0")].join(":");

        document.getElementById("elapsedTimer").innerHTML = timeFormat(elapsedT);
        }, 10);
    });

//For the time to continue to count up when stop is clicked
$("#stopButton").click( function(){
    clearInterval(delta);
    var finalElapsedTime = stopTime - startTime;
    //var elapsedTimed = [ String(finalElapsedTime.getHours()), String(finalElapsedTime.getMinutes()).padStart(2,"0"), String(finalElapsedTime.getSeconds()).padStart(2,"0")].join(":");
    document.getElementById("elapsedTimer").innerHTML = timeFormat(finalElapsedTime);
});

