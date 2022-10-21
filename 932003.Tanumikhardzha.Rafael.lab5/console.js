const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const modalContainer = document.getElementById("modalContainer");
let text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis! \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.";
let modhead = document.getElementById("modhead");
let modnews = document.getElementById("modnews");

btn1.addEventListener("click", () => {
  let newH = "Новость 1";
  modhead.innerText = newH;
  modnews.innerText = newH + ": " + text;
  modalContainer.classList.add("show");
});
btn2.addEventListener("click", () => {
  let newH = "Новость 2";
  modhead.innerText = newH;
  modnews.innerText = newH + ": " + text;
  modalContainer.classList.add("show");
});
btn3.addEventListener("click", () => {
  let newH = "Новость 3";
  modhead.innerText = newH;
  modnews.innerText = newH + ": " + text;
  modalContainer.classList.add("show");
});

window.onclick = function (event) {
  var modalMain = document.getElementById("modalContainer");
  if (event.target == modalMain) {
    modalMain.style.display = "none";
  }
};
