
var submitButton = document.getElementById("btn-submit");
var list = document.getElementById("list");
var searchValue = document.getElementById("searchValue");

submitButton.addEventListener("click" , addItem);
list.addEventListener("click" , removeItem);
searchValue.addEventListener('keyup' ,filterList);


function addItem(e){
  e.preventDefault();
  var value = document.getElementById("input-val").value;
  console.log(value);

  var li = document.createElement("li");
  var liText = document.createTextNode(value);
  var button = document.createElement("a");
  li.appendChild(liText);
  list.appendChild(li);
  button.appendChild(document.createTextNode("Delete"));
  button.className="delete";
  li.appendChild(button);
  document.getElementById("input-val").value = " ";

}

function removeItem(e){
  if(e.target.classList.contains("delete")){
    if(confirm("Are you sure want to delte"));
    var li = e.target.parentElement;
    list.removeChild(li);
  }
}

function filterList(e){
  var text = e.target.value.toLowerCase();
  var items = list.getElementsByTagName("li");
  var itemsArray = Array.from(items);

  itemsArray.forEach(function(item){
    var content = item.firstChild.textContent;

    if(content.toLocaleLowerCase().indexOf(text)!= -1){
      item.style.display="block";
    }
    else{
      item.style.display="none";
    }
  });
}