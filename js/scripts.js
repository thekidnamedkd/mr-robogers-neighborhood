$(document).ready(function() {
  $("form#robogers").submit(function(event) {
    event.preventDefault();
      const numInput = parseInt($("input#numInput").val());
      console.log(numInput);

        if (numInput === numInput) {
          alert("boop")
        }
  });
});