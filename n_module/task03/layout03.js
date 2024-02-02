const userLayout = (() => {
  const showList = (users) => {
    const table = document.querySelector("table.users");
    let text = "";

    users = users.slice(0, 2);

    users.forEach((user) => {
      text += `<tr><td>${user.name}</td><td>${user.username}</td></tr>`;
      text += `<ul>`;

      user.posts.forEach((post) => {
        text += `<li>${post.id}, ${post.title}</li>`;
      });

      text += `</ul>`;
    });

    table.innerHTML = text;
  };

  return { showList: showList };
})();

// 바로 함수 실행
userService.findAll(userLayout.showList);
