var startbutton = document.getElementById('startButton');
        var stopbutton = document.getElementById('stopButton');
        stopbutton.disabled = true;
    
        var startTime;
        var stopTime;
    
        startbutton.onclick = start;
        stopbutton.onclick = stop;
    
    
    
    
        // function to get start time
        function start(){
            startTime = new Date();
    
            // To get time in hh:mm formate
            var stime = [ startTime.getHours(), String(startTime.getMinutes()).padStart(2,"0"), String(startTime.getSeconds()).padStart(2,"0")].join(":");
            document.getElementById("stime").innerHTML = stime;
            
            disableStartButton();
    
            //save to DB 
            return startTime;
    
        }
    
    
        // function to get stop time
        function stop(){
            stopTime = new Date();
            
            
            // To get time in hh:mm formate
            var sptime = [ stopTime.getHours(), String(stopTime.getMinutes()).padStart(2,"0"), String(stopTime.getSeconds()).padStart(2,"0")].join(":");
            document.getElementById("sptime").innerHTML = sptime;    
    
            disableStopButton()
            elapsedTime(stopTime, startTime);
            let x = Date(1632783668042);
            x.getHours();
            
            //Post to DB
            JSON.stringify({startTime: startTime, stopTime: stopTime}); 
            return stopTime;
        }
    
    
        //function to calculate elapsed time
        function elapsedTime(stopTime, startTime){
    
            var deltaTime = stopTime.getTime() - startTime.getTime();
            document.getElementById("deltaTime").innerHTML = Math.abs(Math.round(deltaTime/1000));
        }
    

        //To insure Start button can't be clicked more than once without clicking the stop button
        function disableStartButton(){
            document.getElementById('startButton').disabled = true;
            document.getElementById('stopButton').disabled = false;
            
            //Will not display the previous elapsed time and the stop time
            document.getElementById('sptime').style.display = "none";
            document.getElementById('deltaTime').style.display = "none";
        }
        

        //To insure Stop button can't be clicked more than once without clicking the Start button
        function disableStopButton(){
            document.getElementById('startButton').disabled = false;
            document.getElementById('stopButton').disabled = true;
            
            //Will display the elapsed time and the stop time
            document.getElementById('sptime').style.display = "block";
            document.getElementById('deltaTime').style.display = "block";
    
        }