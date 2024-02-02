// 각 user 별 post를 가져오려면, post의 데이터도 가져와야 한다
const postService = (() => {
  const findAll = async (callback) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    callback(posts);
  };

  return { findAll: findAll };
})();
