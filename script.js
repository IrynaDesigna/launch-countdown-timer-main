function getTimer(launchDay) {
  let time = launchDay - new Date();
  return  {
    'days': parseInt( time/(1000*60*60*24) ),
    'hours': parseInt( (time/(1000*60*60)) % 24 ),
    'minutes': parseInt( (time/1000/60) % 60 ),
    'seconds': parseInt( (time/1000) % 60 ),
    'total' : time
  };
}

function flipDownCard(card) {
  card.parentNode.classList.toggle("flipped");
  setTimeout(function(){
    card.parentNode.classList.toggle("flipped");
  }, 700)
}


function startTimer(id, launchDay) {
  let timerInterval = setInterval(function(){
      let timer = getTimer(launchDay),
          days = timer.days,
          hours = timer.hours,
          minutes = timer.minutes,
          seconds = timer.seconds;

      //start check for > 10 timers *******************
          if (days < 10) { days = '0' + days; }
          days = days.toString();

          if(hours < 10) { hours = '0' + hours; }
          hours = hours.toString();

          if(minutes < 10) { minutes = '0' + minutes; }
          minutes = minutes.toString();

          if(seconds < 10) { seconds = '0' + seconds; }
          seconds = seconds.toString();
      //end check for > 10 timers *********************

      // DAYS START ***********************************
          let daysCard = document.getElementsByClassName("days");
          for (key in daysCard) {
            daysCard[key].innerHTML = days;
          }
      //   // DAYS END ********************************

      // HOURS START **********************************
           let hoursCard = document.getElementsByClassName("hours");
           for (key in hoursCard) {
             hoursCard[key].innerHTML = hours;
           }
      // HOURS END ************************************

      // MINUTES START ********************************
           let minutesCard = document.getElementsByClassName("minutes");
           for (key in minutesCard) {
             minutesCard[key].innerHTML = minutes;
           }
      // MINUTES END **********************************

      // SECONDS START ********************************
           let secondsCard = document.getElementsByClassName("seconds");
           for (key in secondsCard) {
               secondsCard[key].innerHTML = seconds;
           }
      // SECONDS END **********************************

      // ANIMATION START ******************************
          flipDownCard(secondsCard[1]);
          if(seconds == 59) flipDownCard(minutesCard[1]);
          if(minutes == 59 && seconds == 59) flipDownCard(hoursCard[1]);
          if(hours == 23 && minutes == 59 && seconds == 59) flipDownCard(daysCard[1]);
      // ANIMATION END ********************************

  }, 1000);
}



// Getting launchDay **************** today + 3days
window.onload = function() {
//   let launchDay = new Date(2021,4,31,14,30,00);
  let launchDay = new Date();
  launchDay.setDate(launchDay.getDate() + 3);
  startTimer('timer', launchDay);
}
