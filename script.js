let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;



function start(){
    timer = true;
    stopWatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;

    hr = 0;
    min = 0;
    sec = 0; 
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";

}

function stopWatch(){
    if(timer == true){
        count = count+1;

         if(count == 100){
            sec = sec+1;
            count = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;

            showMessage(min + " minute complete.");
        }
        if(min == 60){
            hr = hr+1;
            min = 0;
            sec = 0;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;

        if(hr < 10){
            hrString = "0" + hrString;
        }
        if(min < 10){
            minString = "0" + minString;
        }
        if(sec < 10){
            secString = "0" + secString;
        }
        if(count < 10){
            countString = "0" + countString;
        }

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

        setTimeout( "stopWatch()", 10);
    }
}
function showMessage(message) {
    alert(message);
}