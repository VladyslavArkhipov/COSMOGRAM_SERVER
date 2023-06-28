import { userPhotosCount } from "./getDataForPhotos.js";
import { getUserPhotoObject } from "./getDataForPhotos.js";

const userPhotos = new Array(userPhotosCount)
  .fill(null)
  .map((_, i) => getUserPhotoObject(i)); //массив объектов с фото пользователей

export { userPhotos };
