// 파일을 불러오는 것까지만 하는 함수
const todoService = (() => {
  const findAll = async (callback) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();

    callback(todos);
  };

  return { findAll: findAll };
})();
