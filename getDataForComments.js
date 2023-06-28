const commentsMessage = [
  `Все відмінно!`,
  `Загалом все непогано. Але не всі.`,
  `Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.`,
  `Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.`,
  `Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.`,
  `Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?`,
]; //массив с текстом комментария

const commentsUserName = [
  "Артем",
  "Владислав",
  "Григорiй",
  "Дмитрo",
  "Вoлoдимир",
  "Андрiй",
  "Максим",
  "Oлексiй",
  "Юлiя",
  "Марiя",
  "Свiтлана",
  "Анастасiя",
  "Oлена",
  "Катерина",
]; //массив имен комментаторов

const avatarId = {
  minAvatarId: 1,
  maxAvatarId: 7,
}; //ограничение для выбора айди аватаров

const commentMessageId = {
  minCommentMessageId: 0,
  maxCommentMessageId: commentsMessage.length,
}; //ограничение для выбора айди комментариев

const commentUsersNameId = {
  minCommentUserNameId: 0,
  maxCommentUserNameId: commentsUserName.length,
}; //ограничение для выбора айди имени комментатора

export function getUsersCommentsObject(i) {
  return {
    id: i,
    avatar: getRandomAvatar(),
    message: getRandomCommentMessage(),
    name: getRandomCommentUserName(),
  };
}

function getRandomAvatar() {
  const randomAvatarId = getRandomNumber(
    avatarId.minAvatarId,
    avatarId.maxAvatarId
  );
  return `img/avatar-${randomAvatarId}.svg`;
} //случайный путь к файлу с аватаром пользователя

function getRandomCommentMessage() {
  const randomCommentMessageId = getRandomNumber(
    commentMessageId.minCommentMessageId,
    commentMessageId.maxCommentMessageId
  );
  return commentsMessage[randomCommentMessageId];
} //случайный комментарий из массива комментариев

function getRandomCommentUserName() {
  const randomCommentUserNameId = getRandomNumber(
    commentUsersNameId.minCommentUserNameId,
    commentUsersNameId.maxCommentUserNameId
  );
  return commentsUserName[randomCommentUserNameId];
} //случайное имя пользователя из массива имен

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
