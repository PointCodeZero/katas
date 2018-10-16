var talkingCalendar = function(date) {
  var months = ["January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"];
  var newDate = new Date(date);
  var monthIndex = newDate.getMonth();
  var year = newDate.getFullYear();
  var day = newDate.getDate();
  return months[monthIndex] + " " + day + dateOrdinal(date) + ", " + year;
};

var dateOrdinal = function(date) {
  var newDate = new Date(date);
  var d = newDate.getDate();
  if (d > 3 & d < 21) return "th";
  switch (d % 10) {
    case 1: return "st"; break;
    case 2: return "nd"; break;
    case 3: return "rd"; break;
    default: return "th";
  }
};

console.log(talkingCalendar("2017/12/02")); //December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); //November 11th, 2007
console.log(talkingCalendar("1987/08/24")); //August 24th, 1987



