// 파일을 불러오는 것까지만 하는 함수
const userService = (() => {
  const findAll = async (callback) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    callback(users);
  };

  return { findAll: findAll };
})();
