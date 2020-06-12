// function robogerOutput(output)
//   let inputStr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

$(document).ready(function() {
  $("form#robogers").submit(function(event) {
    event.preventDefault();
      const numInput = parseInt($("input#numInput").val());

      if (Number.isNaN(numInput)) {
        alert("Please enter a numeric value.")
      }

      else if (numInput === 1) {
        alert("beep")
      }

      else if (numInput === 2) {
        alert("boop")
      }

      else if (numInput === 3) {
        alert("NEIGHBOR")
      }
      else if (Number.isInteger(numInput)) {
        alert("Thank you for the number.")
      }
  });
});