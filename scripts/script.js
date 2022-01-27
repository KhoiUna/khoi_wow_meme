// $ = jQuery's way of naming its stuff
// $(...) = what's inside () is the "object" we are messing with
// .ready() = method of $jQ
// .ready(...) = argument/parameter passed to that method
$(document).ready(function () {
  $("button").click(function () {
    let userGreeting = "Hello there, ";

    userGreeting += $("#fname").val();
    $("#greetingOutput").text(userGreeting);
  });

  $("#dogeDiv").draggable({
    containment: "#dogeHouse",
    scroll: false,
  });

  let dragCounter = 0;

  $("#dogePic").draggable({
    containment: "#dogeHouse2",
    scroll: false,
    drag: function () {
      dragCounter++;
      if (dragCounter < 200) {
        return $("#reminder").text(
          `You need more wow! Drag till you reach 200 WOW (
          ${200 - dragCounter}
          left)`
        );
      }

      return $("#reminder").text(
        "Congrats! You have reached a good level of WOW!"
      );
    },
  });
});
