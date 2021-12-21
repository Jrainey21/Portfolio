$(function () {
  $("#sortable").sortable();
});

var list = document.getElementById("sortable");
var entry = document.getElementById("entry");
entry.addEventListener("keydown", deleteText);

function deleteText(e) {
  if (e.keyCode === 13) {
    addElement();
    entry.value = "";
  }
}

function addElement() {
  var lis = document.getElementsByClassName("liStyle");
  /* var ul = document.getElementById("list"); */
  var ul = document.getElementById("sortable");
  var li = document.createElement("li");
  var span = document.createElement("span");
  var spans = document.getElementsByClassName("X");
  var content = document.createTextNode(entry.value);
  var itemsLeft = document.getElementById("itemsLeft");

  span.textContent = "X";
  span.classList.add("X");
  li.classList.add("liStyle");

  if (entry.value) {
    if (lis.length <= 7) {
      ul.appendChild(li);
    }
    li.appendChild(span);
    li.appendChild(content);
    itemsLeft.textContent = lis.length;
  }

  for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = deleteItem;
  }

  function deleteItem(e) {
    var target = e.target;
    var li = target.parentElement;
    li.remove();
    itemsLeft.textContent = lis.length;
  }
}
