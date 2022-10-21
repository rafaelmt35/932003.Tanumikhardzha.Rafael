let text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis! \n \n  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.";

function openMod(num) {
  let modhead = document.getElementById("modhead");
  let modnews = document.getElementById("modnews");
  let modalContainer = document.getElementById("modalContainer");
  modhead.textContent = `Новость ${num}`;
  modnews.textContent = `Новость ${num}:  ${text}`;
  modalContainer.style.display = "block";
}

window.onclick = function (event) {
  var modalMain = document.getElementById("modalContainer");
  if (event.target == modalMain) {
    modalMain.style.display = "none";
  }
};
