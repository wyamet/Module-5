// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  //grab dayjs current time and assign to variable

  var rightNow = dayjs().format("MMM:DD:YYYY ");
  $("#currentTime").text(rightNow);

  // setInterval(rightNow, 10000);
  // function hourUpdate(){
  // var currentHour = dayjs().hour();

  // change the color of the block to match the time display
  function blockColor() {
    var timeCurrent = dayjs().hour();

    // parse the id attribute into an integer that compares with the dayjs hour.
    $(".time-block").each(function () {
      var currentBlock = parseInt($(this).attr("id").split("-")[1]);
      if (currentBlock < timeCurrent) {
        // $(this).removeClass("present");
        // $(this).removeClass("future");
        $(this).addClass("past");
      } else if (currentBlock === timeCurrent) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  blockColor();

  // save to localStorage on the click of the save button
  $(function () {
    $(".saveBtn").on("click", function () {
      console.log($(this));
      var hour = $(this).parent().attr("id");
      var description = $(this).siblings(".description").val();
      localStorage.setItem(hour, description);
    });
  });
  //grab element data from local storage.
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
