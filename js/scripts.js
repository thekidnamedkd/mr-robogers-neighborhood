const numArray = numInput.split("")
      console.log(numArray)

$(document).ready(function() {
  $("form#robogers").submit(function(event) {
    event.preventDefault();
      const numInput = parseInt($("input#numInput").val());

      if (Number.isNaN(numInput)) {
        alert("Please enter a numeric value.")
      }

      else if (Number.isInteger(numInput)) {
        alert("boop")
      }

      else if (numArray[0] === 3)
        alert("beep")
  });
});