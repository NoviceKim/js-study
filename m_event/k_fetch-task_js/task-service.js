// 포토 데이터를 가져옴 - 처리는 callback에 맡김
const photoService = () => {
  const getPhotos = async (callback) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await response.json();

    callback(photos);
  };

  return { getPhotos: getPhotos };
};
