let roboOut = function(toCount) {
  let range = []
  for (i = 0; i <= toCount; i++)
    range.push(toCount)
    let countStr = toCount.toString();
    if (countStr.includes("1")) { 
      range.splice(i, 1, "Beep!");
    } else if (countStr.includes("2")) { 
      range.splice(i, 1, "Boop!");
    } else if (countStr.includes("3")) { 
      range.splice(i, 1, "Won't you be my neighbor?");
    }
  console.log(range)
}

$(document).ready(function() {
  $("form#robogers").submit(function(event) {
    event.preventDefault();
      const toCount = parseInt($("input#numInput").val());
      const newRobo = roboOut(toCount)
  //     if (Number.isNaN(numInput)) {
  //       alert("Please enter a numeric value.")
  //     }

  //     else if (numInput === 1) {
  //       alert("beep")
  //     }

  //     else if (numInput === 2) {
  //       alert("boop")
  //     }

  //     else if (numInput === 3) {
  //       alert("NEIGHBOR")
  //     }
  //     else if (Number.isInteger(numInput)) {
  //       alert("Thank you for the number.")
  //     }
  });
});