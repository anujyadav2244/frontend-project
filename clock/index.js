// in 1 rotation => 360 deg
// in 12 hours(1 day) 360 deg => in 1 hour 30 deg
// in 60 min(1 hour) 360 deg => in 1 min 6 deg
// in 60 sec(1 min) 360 deg => in 1 sec 6 deg

function clock() {
  let hour = document.querySelector(".hour");
  let minute = document.querySelector(".minute");
  let second = document.querySelector(".second");
  let date = new Date();
  //console.log(date); 
  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour.style.transform = `rotateZ(${hrs * 30 + min / 12}deg)`;
  minute.style.transform = `rotateZ(${min * 6}deg)`;
  second.style.transform = `rotateZ(${sec * 6}deg)`;
}
setInterval(clock, 1000);
