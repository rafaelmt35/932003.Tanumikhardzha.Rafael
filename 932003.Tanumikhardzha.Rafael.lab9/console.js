function clearInput() {
  document.getElementById("inputNum").value = "";
}

function input(val) {
  let operator = ["+", "*", ".", "/", "-"];

  let input = document.getElementById("inputNum").value;
  if (operator.includes(val) && operator.includes(input.slice(-1))) {
    alert("Wrong input");
  } else {
    document.getElementById("inputNum").value =
      document.getElementById("inputNum").value + val;
  }
}

function del() {
  let val = document.getElementById("inputNum").value;
  val = val.slice(0, -1);
  document.getElementById("inputNum").value = val;
}

function SolveCalc() {
  let str = document.getElementById("inputNum").value;
  let result = "";
  try {
    result = eval(str);
    document.getElementById("inputNum").value = result;
  } catch (error) {
    alert("Wrong input");
  }
}
