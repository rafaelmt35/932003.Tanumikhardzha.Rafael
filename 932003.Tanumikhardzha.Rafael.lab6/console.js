const leftimg = document.getElementById("cat");
const rightimg = document.getElementById("dog");

function imageSize(buttonId) {
  if (buttonId == "left") {
    leftimg.style.width = "97%";
    leftimg.querySelector("img").style.width = "70%";
    leftimg.querySelector("img").style.height = "70%";
    leftimg.querySelector("img").style.visibility = "visible";

    rightimg.style.width = "3%";
    rightimg.querySelector("img").style.visibility = "collapse";
  } else if (buttonId == "middle") {
    leftimg.style.width = "50%";
    leftimg.querySelector("img").style.visibility = "visible";
    leftimg.querySelector("img").style.width = "90%";
    leftimg.querySelector("img").style.height = "75%";

    rightimg.style.width = "50%";
    rightimg.querySelector("img").style.visibility = "visible";
    rightimg.querySelector("img").style.width = "90%";
    rightimg.querySelector("img").style.height = "75%";
  } else if (buttonId == "right") {
    leftimg.style.width = "3%";
    leftimg.querySelector("img").style.visibility = "collapse";

    rightimg.style.width = "97%";
    rightimg.querySelector("img").style.width = "70%";
    rightimg.querySelector("img").style.height = "70%";
    rightimg.querySelector("img").style.visibility = "visible";
  }
}
