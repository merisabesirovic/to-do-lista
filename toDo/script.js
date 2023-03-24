let button = document.getElementsByClassName("button")[0];
let container = document.getElementById("toDoContainer");
let input = document.getElementById("input");
let completedTasks = [];
let unCompleted = [];
let all = [];

button.addEventListener("click", function () {
  let text = document.createElement("li");
  text.textContent = input.value;
  all.push(text.textContent);
  input.value = "";
  text.className = "lista";
  let deleteButton = document.createElement("button");
  deleteButton.className = "deletebtn";
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  text.appendChild(deleteButton);
  container.appendChild(text);
  deleteButton.addEventListener("click", brisi);
  function brisi() {
    deleteButton.parentElement.remove();
    let index = all.indexOf(text.textContent);
    all.splice(index, 1);
    if (completedTasks.includes(text.textContent)) {
      let completedIndex = completedTasks.indexOf(text.textContent);
      completedTasks.splice(completedIndex, 1);
    } else {
      let uncompletedIndex = unCompleted.indexOf(text.textContent);
      unCompleted.splice(uncompletedIndex, 1);
    }
  }
  text.addEventListener("dblclick", zavrseno);
  function zavrseno() {
    text.style.textDecoration = "line-through";
    let index = all.indexOf(text.textContent);
    completedTasks.push(all[index]);
    unCompleted.splice(index, 1);
  }
  unCompleted = all.filter((x) => !completedTasks.includes(x));

  console.log(completedTasks);
  console.log(all);
  console.log(unCompleted);
});
const select = document.querySelector(".options");
console.log(select);
const options = select.children;
console.log(options);
Array.from(options).forEach((option) => console.log(option.value));

var buttonElement = document.querySelector(".options");

buttonElement.addEventListener("click", function () {
  var selectElement = document.querySelector("select.options");
  var selectedValue = selectElement.value;
  console.log("Selektovana vrijednost je: " + selectedValue);
  console.log(container.children);
  const allItems = Array.from(container.children);
  if (selectedValue === "completed") {
    allItems.forEach((item) => {
      if (!completedTasks.includes(item.textContent)) {
        item.style.display = "none";
      } else item.style.display = "flex";
    });
  } else if (selectedValue === "uncompleted") {
    allItems.forEach((item) => {
      if (completedTasks.includes(item.textContent)) {
        item.style.display = "none";
      } else {
        item.style.display = "flex";
      }
    });
  } else {
    allItems.forEach((item) => {
      item.style.display = "flex";
    });
  }
});
