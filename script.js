function getTimer() {
  let d = new Date(),
      launchDay = new Date(2021,4,31,14,30,00);
      timer = launchDay - d,
      days,
      hours,
      minutes,
      seconds;

  function getDay (timer) {
    days = parseInt(timer / (1000 * 60 * 60 * 24));
    if (days < 10) {
     days = '0' + days;
    }
    days = days.toString();

    hours = parseInt(timer/(60*60*1000))%24;
    if(hours < 10) {
    hours = '0' + hours;
    }
    hours = hours.toString();

    minutes = parseInt(timer/(1000*60))%60;
    if(minutes < 10) {
    minutes = '0' + minutes;
    }
    minutes = minutes.toString();

    seconds = parseInt(timer/1000)%60;
    if(seconds < 10) {
    seconds = '0' + seconds;
    }
    seconds = seconds.toString();
  }

  if ( launchDay >= d ) {
    getDay(timer);
  } else {
    // to continue launcher preview
    timer = 1.0001*d - d;
    getDay(timer);
  }

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

getTimer();

setInterval(getTimer,1000);
