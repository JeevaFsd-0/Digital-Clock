
function digitalClock () {
    let date = new Date ();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";
    
    if(hours > 12){
    hours = hours - 12; 
    session = "PM";
    }
    
    hours = hours <= 9 ? "0" + hours : hours ; 
    minutes = minutes <= 9 ? "0" + minutes : minutes ;
    seconds = seconds <= 9 ? "0" + seconds : seconds ;
    
    let time = `${hours}:${minutes}:${seconds} ${session}`;
    
    let clock = document.getElementById("time");
    clock.innerHTML =  time;
    
}
    
 setInterval (function(){
    digitalClock();
 },1000);

digitalClock ();

    