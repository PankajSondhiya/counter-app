let Limit = 100;
let textel = document.getElementById("text");
let countel = document.getElementById("count");
document.getElementById("count").innerText = `${Limit} charactor left`;

textel.addEventListener("input", function (event) {
  let text = textel.value;
  let updatedcount = Limit - text.length;

  if (updatedcount <= 0) {
    textel.value = textel.value.substring(0, Limit);
    countel.innerHTML = `0 character left`;
    return;
  }

  countel.innerHTML = `${updatedcount} character left`;

  if (updatedcount > 70 && updatedcount <= 100) {
    countel.classList.add("green");
    countel.classList.remove("warn", "red");
  } else if (updatedcount > 50 && updatedcount <= 70) {
    countel.classList.remove("green", "red");
    countel.classList.add("warn");
  } else {
    countel.classList.remove("green", "warn");
    countel.classList.add("red");
  }
});
