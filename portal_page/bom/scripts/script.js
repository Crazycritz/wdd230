const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const ul = document.querySelector("#list");

button.addEventListener("click", function () {
  if (input.value == "") {
    alert("There is no input");
    return false;
  }
  let li = document.createElement("li");
  li.innerHTML = input.value;
  let buttonDel = document.createElement("button");
  buttonDel.innerHTML = "❌";
  li.setAttribute("id", input.value);
  buttonDel.addEventListener( "click", function () {
    element = li.getAttribute('id')
    document.getElementById(element).remove()
    document.getElementById("favchap").focus();
    input.value = '';
  });

  li.appendChild(buttonDel);
  ul.appendChild(li);
  input.value = '';
  document.getElementById("favchap").focus();
});
