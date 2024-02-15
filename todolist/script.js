const inputBox = document.getElementById("input-box");
const itemContainer = document.getElementById("item-container");
function addTask() {
  if (inputBox.value === "") {
    alert("enter the task")
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    itemContainer.appendChild(li)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)

  }
  inputBox.value = "";
  savaData()
}

itemContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savaData()
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savaData()
  }

})
function savaData() {
  localStorage.setItem("data", itemContainer.innerHTML);

}
function showTask() {
  itemContainer.innerHTML = localStorage.getItem("data")

}
showTask()