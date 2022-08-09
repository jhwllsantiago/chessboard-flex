function swap() {
  var white = "rgb(255, 255, 255)";
  var black = "rgb(0, 0, 0)";
  var whichSide = document.getElementById("chess-color");
  var currentSide = window.getComputedStyle(whichSide, null).color;
  if (currentSide === white) {
    whichSide.style.color = black;

    document.getElementsByClassName("board")[0].style.flexDirection =
      "column-reverse";
    for (let i = 0; i < document.getElementsByClassName("row").length; i++) {
      document.getElementsByClassName("row")[i].style.flexDirection =
        "row-reverse";
    }
    document.getElementsByClassName("letters")[0].style.flexDirection =
      "row-reverse";
    document.getElementsByClassName("letters")[1].style.flexDirection =
      "row-reverse";
    document.getElementsByClassName("numbers")[0].style.flexDirection =
      "column-reverse";
    document.getElementsByClassName("numbers")[1].style.flexDirection =
      "column-reverse";
  } else {
    whichSide.style.color = white;

    document.getElementsByClassName("board")[0].style.flexDirection = "column";
    for (let i = 0; i < document.getElementsByClassName("row").length; i++) {
      document.getElementsByClassName("row")[i].style.flexDirection = "row";
    }
    document.getElementsByClassName("letters")[0].style.flexDirection = "row";
    document.getElementsByClassName("letters")[1].style.flexDirection = "row";
    document.getElementsByClassName("numbers")[0].style.flexDirection =
      "column";
    document.getElementsByClassName("numbers")[1].style.flexDirection =
      "column";
  }
}
