let text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.";

function click(num) {
  let modhead = document.getElementById("modhead");
  let modalert = document.getElementById("modalert");
  var mainmod = document.getElementById("modalContainer");
  let news = "Новость " + num;
  modhead.innerText = news;
  modalert.innerText = news + ": " + text;
  mainmod.style.display = "block";
}

window.onclick = function (event) {
  var mainmod = document.getElementById("modalContainer");
  if (event.target == mainmod) {
    mainmod.style.display = "none";
  }
};
