$(document).ready(function() {
  $("#formOne").submit(function() {
    var firstSide = $("#firstSide").val();
    firstSide = parseFloat(firstSide);
    var secondSide = $("#secondSide").val();
    secondSide = parseFloat(secondSide);
    var thirdSide = $("#thirdSide").val()
    thirdSide = parseFloat(thirdSide);

    if (firstSide + secondSide <= thirdSide || secondSide + thirdSide <= firstSide || firstSide + thirdSide <= secondSide) {
      alert("Not A Triangle");
    } else if (firstSide === secondSide && secondSide === thirdSide) {
      alert("This is a Equilateral Triangle");
    } else if(firstSide === secondSide || secondSide === thirdSide || thirdSide === firstSide) {
      alert("This is an Isosceles Triangle");
    } else if(firstSide !== secondSide && secondSide !== thirdSide && thirdSide !== firstSide) {
      alert("This is a Scalene Triangle");

    }
  });
});
