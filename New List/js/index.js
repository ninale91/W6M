$(document).ready(start);

function start() {
 var list = ["Milk", "Eggs", "Peanut Butter", "Bread", "Chocolate"]
 $(list).each(addToUl);
 updateCount(list);
}

function addToUl(index, element) {
  var li= "<li>" + element + "</li>";
  $("ul").append(li);
}

function updateCount(list){
  $("#amount").text(list.length);
}
