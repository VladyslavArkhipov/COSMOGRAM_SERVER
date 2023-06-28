import { getUsersCommentsObject } from "./getDataForComments.js";

const commentCount = 100; //максимальное количество комментариев
const userComments = new Array(commentCount)
  .fill(null)
  .map((_, i) => getUsersCommentsObject(i)); //массив объектов с фото пользователей

export { userComments };
