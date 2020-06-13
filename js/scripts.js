// business logic
let roboOut = function(toCount) {
  let range = [] 
  for (i = 0; i <= toCount; i++) {
    range.push(" " + i )
    let countStr = i.toString();
    if  (countStr.includes("3")) { 
      range.splice(i, 1, " Won't you be my neighbor?");
    } else if  (countStr.includes("2")) { 
      range.splice(i, 1, " Boop!");
    } else if (countStr.includes("1")) { 
      range.splice(i, 1, " Beep!");
    } 
    } 
  return range
}

// user interface logic
$(document).ready(function() {
  $("form#robogers").submit(function(event) {
    event.preventDefault();
      const toCount = parseInt($("input#numInput").val());
      const newRobo = roboOut(toCount)
      if (Number.isNaN(toCount)) {
        alert("Please enter a numeric value.")
      } 
        $("#roboResult").show();
        $("#finalStr").text(newRobo);
  });
});