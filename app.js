
var submitButton = document.getElementById("btn-submit");
var list = document.getElementById("list");


submitButton.addEventListener("click" , addItem);
list.addEventListener("click" , removeItem);





function addItem(e){
  e.preventDefault();
  var value = document.getElementById("input-val").value;


  console.log(value);

  var li = document.createElement("li");
  var liText = document.createTextNode(value);
  var button = document.createElement("a");
  button.appendChild(document.createTextNode("Delete"));
  button.className="delete";

  li.appendChild(button);
  li.appendChild(liText);
  list.appendChild(li);
}

function removeItem(e){
  if(e.target.classList.contains("delete")){
    if(confirm("Are you sure want to delte"));
    var li = e.target.parentElement;
    list.removeChild(li);

  }

}