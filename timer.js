var workTimerValue = [33, 33];
var breakTimerValue = [33, 33];
var onBreak = false;
var isRunning = false;

function setTimer(timerDef){
    var timerToChange = document.getElementById(timerDef + "TimerUpdate");
    var min = timerToChange.children[2].children[2];
    var sec = timerToChange.children[3].children[2];
    var fail = false;
    if(Number.isNaN(parseInt(min.value)) || parseInt(min.value) < 0){
        min.style.background = "red";
        fail = true;
    }
    
    if(Number.isNaN(parseInt(sec.value)) || parseInt(sec.value) > 59 || parseInt(sec.value) < 0){
        sec.style.background = "red";
        fail = true;
    }

    if(!fail){
        if(timerDef == "work"){
            workTimerValue = [parseInt(min.value), parseInt(sec.value)];
            if(!onBreak){
                document.getElementById("timer").innerHTML = "Next Break In:<br>" + toMMSS(workTimerValue[0], workTimerValue[1]);
                isRunning = false;
                //stop and reset the timer with the new values later
            }
        } else {
            breakTimerValue = [parseInt(min.value), parseInt(sec.value)];
            if(onBreak){
                document.getElementById("timer").innerHTML = "Next Break In:<br>" + toMMSS(workTimerValue[0], workTimerValue[1]);
                isRunning = false;
                //stop and reset the timer with the new values later
            }
        }
    }
}

function toMMSS(minutes, seconds) {
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return minutes + ':' + seconds;
}

