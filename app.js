var numClicks = 0;

$(document).ready(function()
{
  $("#generatorButton").on("click", function()
  {
    buttonClicked();
  });

  $("body").on("click", ".swapButton", swapFunction);

  $("body").on("click", ".deleteButton", deleteFunction);

});

function buttonClicked()
{
  numClicks++;
  $("body").append("<div class='generated'></div>");
  $("body").children().last().append("<p>" + numClicks + "</p>");
  $("body").children().last().append("<button class='swapButton'>Swap</button>");
  $("body").children().last().append("<button class='deleteButton'>Delete</button>");
}

function swapFunction()
{
  $(this).parent().css("background-color", "yellow");
}

function deleteFunction()
{
  $(this).parent().remove();
}
