let [milliseconds,seconds,minutes,hours] = [0,0,0,0]
let timerRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click",()=>{
    if(int !== null){
        clearInterval(int); //clearInterval will stop the iteration
    }
    int = setInterval(displayTimer,10); //setInterval will start the iteration, must need to allocate timer value
});

function displayTimer() {
    milliseconds += 10;
    console.log(milliseconds + "milliseconds")
    
    seconds = milliseconds == 1000 ? (seconds + 1) % 60 :seconds;
    console.log(seconds + "seconds")
    
    minutes = seconds == 0 && milliseconds == 0 ? (minutes +1) % 60 : minutes;
    console.log(minutes + "minutes")

    hours = minutes == 0 && seconds == 0 && milliseconds == 0 ?  (hours + 1) : hours;
    console.log(hours + "hours")
    
    milliseconds = milliseconds == 1000 ? 0 : milliseconds;
    console.log(milliseconds + "milliseconds")


    // padStart will add values before those String

    let h = String(hours).padStart(2,"0");
    let m = String(minutes).padStart(2,"0");
    let s = String(seconds).padStart(2,"0");
    let ms = String(milliseconds).padStart(3,"0");

    timerRef.innerHTML = `${h}:${m}:${s}:${ms}`;

}

document.getElementById("pause-timer").addEventListener("click",()=>{
    clearInterval(int);
})

document.getElementById("reset-timer").addEventListener("click",()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours]= [0,0,0,0];
    timerRef.innerHTML = "00:00:00:000";
});