const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");


// Get Hour,minutes and seconds using date methods
const date = new Date ();
  console.log(date);
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  //Moving the clock hands using javascript
  let hrPosition = (hr*360/12)+(min*(360/60)/12);
  let minPosition = (min*360/60)+(sec*(360/60)/60);
  let secPosition = sec*360/60;


function runTheClock() { 
  hrPosition = hrPosition+(30/3600);
  minPosition = minPosition + (6/60);
  secPosition = secPosition+6;

  hourHand.style.transform =   'rotate(' + hrPosition  + 'deg)';
  minuteHand.style.transform = 'rotate(' + minPosition + 'deg)';
  secondHand.style.transform = 'rotate(' + secPosition + 'deg)';

}

const interval = setInterval(runTheClock, 1000);