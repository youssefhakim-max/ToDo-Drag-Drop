const allBoxes = document.querySelectorAll(".box");
const allTasks = document.querySelectorAll(".task");

//todo: هنا بلوب ع العنصر
allTasks.forEach(task => {
  //todo: dragstart اما اضغط ع العنصر يتغيرلونه
  task.addEventListener("dragstart", () => {
    //todo: ادد هناهبضيف
    task.classList.add("is-dragging");
  });
  //todo: dragend دراج اند هنا العنصرلونه هيرجع للاصل بعد مسيب الموس
  task.addEventListener("dragend", () => {
    //todo: ريموف بيرجع اللون تاني
    task.classList.remove("is-dragging");
  });
});

//todo: هنا هضيف التاسك ع التاسك
allBoxes.forEach(box => {
  //todo: (e) دي ال سي اف
  box.addEventListener("dragover", (e) => {
    e.preventDefault();

    const curTask = document.querySelector(".is-dragging");
    //todo: ضفت ابن للكلاس ال فوق
    box.appendChild(curTask);
  });
});

// Adding new task
const form = document.querySelector("#add-form");
const input = document.querySelector("#todo-input");
const todoBox = document.querySelector("#to-do");

//todo: طريقه اما اعمل ريفرش للصفحه مفيش حاجه تتمسح
form.addEventListener("submit", e => {
  e.preventDefault();

  const newTaskText = input.value;

  //todo: هنا بقوله لوكان النص فاضي اعمل ريترن
  if (!newTaskText) return;

  // <p class="task" draggable="true">playing playstation</p>
  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerHTML = newTaskText;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoBox.appendChild(newTask);

  input.value = "";
});
