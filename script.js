var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");

function removeItem() {
  ul.removeChild(li);
}


for (let li of ul.children) {
  var remove = li.lastChild
  remove.addEventListener("click", function() {
    ul.removeChild(li);
  })
}

for (let li of ul.children) {
  li.addEventListener("click", function() {
    li.classList.toggle("done");
  })
}

function inputLength() {
  return input.value.length
  }

function createListElement() {
  var li = document.createElement("li");
  var button = document.createElement("button");
  button.appendChild(document.createTextNode("Delete"));
  li.appendChild(document.createTextNode(input.value + " "));
  li.appendChild(button);
  button.addEventListener("click", function() {
    ul.removeChild(li);
  })
  li.addEventListener("click", function() {
    li.classList.toggle("done");
  })
  ul.appendChild(li);
  input.value = "";
}

function addItemAfterClick() {
    if (inputLength() > 0) {
      createListElement();
    }
}

function addItemAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

input.addEventListener("keypress", addItemAfterKeypress)

button.addEventListener("click", addItemAfterClick)
