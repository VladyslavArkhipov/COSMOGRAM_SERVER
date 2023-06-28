import { getUserPhotoObject } from "./getDataForPhotos.js";

const userPhotosCount = 25; //длина массива с фото
const userPhotos = new Array(userPhotosCount)
  .fill(null)
  .map((_, i) => getUserPhotoObject(i)); //массив объектов с фото пользователей

export { userPhotos };
