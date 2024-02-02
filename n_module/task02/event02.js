const button = document.getElementById("get-todos");

button.addEventListener("click", () => {
  todoService.findAll(todoLayout.showList);
});
