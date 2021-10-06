var startbutton = document.getElementById('startButton');
var stopbutton = document.getElementById('stopButton');
stopbutton.disabled = true;

var startTime;
var stopTime;
var timer;

//Function to get the hours min and sec and format as hh:mm:ss
function timeFormat(time) {
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);

    return hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) 
    + ":" + minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) 
    + ":" + seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
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

//pulls data, loops through history, and sets them to html elements 
async function iterateHistory(){
    var parent = document.getElementById('history');
    
    // clear previous entries
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    // pull historic data 
    var times = await $.ajax({
        type: "GET",
        url: '/data',
        contentType: "application/json",
        dataType: 'json',
        success: function(data) {
            return data;
        }
    });

    for (var i = times.length - 1; i >= 0; i--){
        var p = document.createElement("p");
        var br = document.createElement("br");
        //calculate elapsed time
        var elapsedT = times[i].stopTime - times[i].startTime;
        
        //convert time to hh:mm:ss and set it to variable
        var text = document.createTextNode(timeFormat(elapsedT));
        p.classList.add('history-text');
        p.appendChild(text);
        p.appendChild(br);
        parent.appendChild(p);
    }
}

iterateHistory();

var delta;
var elapsedT
var hours; 
var minutes;
var seconds; 
var t;

//For the time to continue to count up when start is clicked
$("#startButton").click( function(){
    startTime = new Date();
    
    //To insure Start button can't be clicked more than once without clicking the stop button
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
    
    delta = setInterval(function() {
        
        let t = new Date();
        let elapsed = t - startTime;
        let elapsedT = new Date(elapsed);
        //var elapsedTimer = [ String(Math.floor(elapsedT/36000)).padStart(2, "0"), String(elapsedT.getMinutes()).padStart(2,"0"), String(elapsedT.getSeconds()).padStart(2,"0")].join(":");

        document.getElementById("elapsedTimer").innerHTML = timeFormat(elapsedT);
        }, 10);
    });

//For the time to continue to count up when stop is clicked
$("#stopButton").click( async function(){
    clearInterval(delta);
    
    stopTime = new Date();

    //To insure Stop button can't be clicked more than once without clicking the Start button
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;

    //Post to DB 
    await $.ajax({
        type: "POST",
        url: "/data",
        data: JSON.stringify({startTime: startTime.getTime(), stopTime: stopTime.getTime()}),
        contentType: "application/json",
        dataType: 'json'
    });

    iterateHistory();
        
    var finalElapsedTime = stopTime - startTime;
    //var elapsedTimed = [ String(finalElapsedTime.getHours()), String(finalElapsedTime.getMinutes()).padStart(2,"0"), String(finalElapsedTime.getSeconds()).padStart(2,"0")].join(":");
    document.getElementById("elapsedTimer").innerHTML = timeFormat(finalElapsedTime);
});

