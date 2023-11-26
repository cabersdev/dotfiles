function getCurrentTime() {

  var currentDate = new Date();
  var hrs = currentDate.getHours();
  var mins = currentDate.getMinutes();
  var amOrPm = (hrs < 12) ? "AM" : "PM";

  
  hrs = (hrs > 12) ? hrs - 12 : hrs;
  hrs = ("0" + hrs).slice(-2);
  mins = ("0" + mins).slice(-2);

  document.getElementById('clock').innerHTML = hrs + ":" + mins + " " + amOrPm;
  var t = setTimeout(getCurrentTime, 500);

}
