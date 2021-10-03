var startbutton = document.getElementById('startButton');
        var stopbutton = document.getElementById('stopButton');
        stopbutton.disabled = true;
    
        var startTime;
        var stopTime;
        var timer;
    
        startbutton.onclick = start;
        stopbutton.onclick = stop;
    
    
        function timerClock(startTime){
                var currentTime = new Date();
                var elapsedTime = currentTime - startTime;
                var elapsedTimer = [ elapsedTimer.getHours(), String(elapsedTimer.getMinutes()).padStart(2,"0"), String(elapsedTimer.getSeconds()).padStart(2,"0")].join(":");
                document.getElementById('elapsedTimer');

        }
    
        // function to get start time
        function start(){
            startTime = new Date();
            //counter
            timer = setInterval(timerClock(startTime), 1000);
                
            disableStartButton();
            return startTime;
        }
    
    
        // function to get stop time
        function stop(){
            stopTime = new Date();
            
            //to clear the timer clock
            clearInterval(timer);
            
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
            var minutes = "0" + date.getMinutes();
            var seconds = "0" + date.getSeconds();

            //to show time in hh:mm:ss
            var formattedElapsedTime = [hours, String(minutes).padStart(2,"0"), String(seconds).padStart(2,"0")].join(:);
            return formattedElapsedTime;
        }

        function iterateHistory(times){
                var parent = document.getElementById('history');
                for (var time = 0; time < times.length; time++){
                        var p = document.createElement("p");
                        var br = document.createElement("br");
                        //calculate elapsed time
                        var elapsedT = times[time].stopTime - times[time].startTime;
                      
                        //convert time to hh:mm:ss and set it to variable
                        var text = document.createTextNode(timeConversion(elapsedT));
                        p.classList.add('history-text');
                        p.appendChild(text);
                        p.appendChild(br);
                        parent.appendChild(p);
                }
        }

