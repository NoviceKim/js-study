// 파일을 불러오는 것까지만 하는 함수
const userService = (() => {
  const findAll = async (callback) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.forEach((user) => {
      postService.findByUserId(user.Id, (posts) => {
        user.posts = posts;
      });
    });

    callback(users);

    return users;
  };

  return { findAll: findAll };
})();

// 각 user 별 post를 가져오려면, post의 데이터도 가져와야 한다
const postService = (() => {
  const findByUserId = async (userId, callback) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts = await response.json();

    callback(posts);

    return posts;
  };

  return { findByUserId: findByUserId };
})();
