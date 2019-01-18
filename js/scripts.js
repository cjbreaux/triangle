$(document).ready(function() {
  $("#formOne").submit(function() {
    var firstSide = $("#firstSide").val();
    firstSide = parseFloat(firstSide);
    var secondSide = $("#secondSide").val();
    secondSide = parseFloat(secondSide);
    var thirdSide = $("#thirdSide").val()
    thirdSide = parseFloat(thirdSide);

    alert(thirdSide);





  });
});
