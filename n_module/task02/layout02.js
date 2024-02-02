const todoLayout = (() => {
  const showList = (todos) => {
    const table = document.querySelector("table.todos");
    let text = "";

    // 완료, 미완료 클래스를 저장할 문자열
    let stat = "";

    todos = todos.slice(0, 10);

    todos.forEach((todo) => {
      if (!todo.completed) {
        stat = "uncompleted";
      } else {
        stat = "";
      }

      text += `<tr class=${stat}><td>${todo.id}</td><td>${todo.title}</td></tr>`;
    });

    table.innerHTML = text;
  };

  return { showList: showList };
})();
