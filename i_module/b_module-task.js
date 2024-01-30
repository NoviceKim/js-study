// 게시글 작성
// 첨부파일 정보(fileName, filePath, fileSize)는 다른 곳에서 처리

// 게시글 목록
// 게시글 조회
// 게시글 수정
// 게시글 삭제

/*
    첨부파일 정보
    보통 화면쪽에는 이름, 경로, 크기가 한 번에 들어갈테니 비구조 할당 형태로 받음
*/
const file = ({ fileName, filePath, fileSize }) => {};

const postSystem = (() => {
    /*
        작성
        로그인 이후일테니 id 비번은 필요 없고,
        화면에 보낼 제목, 내용, 파일 정보(...rest)를 받음
        각각의 데이터는 한 번에 보낼 것이니 {}로 묶음
    */
    const write = ({ title, content, ...rest }, callback) => {
        if (callback) {
            callback(...rest);
        }
    };

    /*
        목록
        가져오는 거 따로, 출력하는 거 따로이니 callback을 받아서 기능 분리
    */
    const getList = (callback) => {
        const postList = [{}, {}];

        // callback을 받았는지 검사하고, 받았다면 callback에 postList 전달
        // 만약 게시글이 하나도 없다면 빈 배열 반환
        if (callback) {
            callback(postList || []);
        }
    };

    /*
        조회
        postId를 받아오고, 화면에 뿌려줄 callback를 받을 필요가 있을 듯
    */
    const findById = (postId, callback) => {
        // callback으로 뿌릴 게시글 정보
        const postInfo = {
            id: 1,
            title: "title1",
            content: "content1",
            files: [],
        };

        // callback을 받았다면 해당 게시글 정보를 callback에 전달
        if (callback) {
            callback(postInfo);
        }
    };

    /*
        수정
        postId와 작성자는 그대로
        id, 제목, 내용, file을 새로운 걸로 바꿈
    */
    const update = ({ id, title, content, files }, callback) => {
        // 실제 수정은 callback이 수행
        if (callback) {
            callback(files);
        }
    };

    /*
        삭제
        게시글 id만 알면 삭제 가능
    */
    const remove = (id) => {};

    return {
        write: write,
        getList: getList,
        findById: findById,
        update: update,
        remove: remove,
    };
})();

const postInfo = {
    title: "제목",
    content: "내용",
    fileName: "test_file",
    filePath: "/files",
    fileSize: "500x500",
};

// 작성
postSystem.write(postInfo);

// 목록
postSystem.getList((posts) => {
    if (!posts.length) {
        console.log("게시글이 없습니다.");
        return;
    }

    console.log(posts);
});

// 조회
postSystem.findById(1, (post) => {
    console.log(post);

    post.title = "수정된 제목1";

    // 수정
    postSystem.update(post);

    // 삭제
    postSystem.remove(post.id);
});

// const postService = (() => {
//     // 게시글 작성
//     // 첨부파일 정보(fileName, filePath, fileSize)는 다른 곳에서 처리한다.
//     const write = ({ title, content, ...rest }, callback) => {
//         if (callback) {
//             callback(...rest);
//         }
//     };

//     // 게시글 목록
//     const getList = (callback) => {
//         const posts = [{}, {}];
//         if (callback) {
//             callback(posts || []);
//         }
//     };

//     // 게시글 조회
//     const findById = (id, callback) => {
//         const post = {
//             id: 1,
//             title: "테스트 제목1",
//             content: "테스트 내용1",
//             files: [],
//         };

//         if (callback) {
//             callback(post);
//         }
//     };

//     // 게시글 수정
//     const update = ({ id, title, content, files }, callback) => {
//         if (callback) {
//             callback(files);
//         }
//     };

//     // 게시글 삭제
//     const remove = (id) => {};

//     return {
//         write: write,
//         getList: getList,
//         findById: findById,
//         update: update,
//         remove: remove,
//     };
// })();

// // 게시글 추가
// const post = {
//     title: "테스트 제목1",
//     content: "테스트 내용1",
//     fileName: "",
//     filePath: "",
//     fileSize: "",
// };

// // 게시글 작성
// postService.write(post, fileService.insert);

// // 게시글 목록
// postService.getList((posts) => {
//     if (!posts.length) {
//         console.log("게시글이 없습니다.");
//         return;
//     }
//     console.log(posts);
// });

// // 게시글 조회
// postService.findById(1, (post) => {
//     console.log(post);
//     post.title = "수정된 제목1";
//     // 게시글 수정
//     postService.update(post);
//     // 게시글 삭제
//     postService.remove(post.id);
// });
