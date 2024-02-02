// 파일을 불러오는 것까지만 하는 함수
const postService = (() => {
  const findAll = async (callback) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    callback(posts);
  };

  return { findAll: findAll };
})();
