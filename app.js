
var submitButton = document.getElementById("btn-submit");
submitButton.addEventListener("click" , addItem )

function addItem(e){
  e.preventDefault();

  var value = document.getElementById("input-val").value;
  if(value==""){
    console.log("please enter to search ")
  }
  else
  console.log(value);


}