const userPhotosDescriptions = [
  `Майстерно запечатлений момент, що розкриває весь спектр кольорів і емоцій.`,
  `Живописний кадр, де кожна деталь виблискує красою і пристрастю.`,
  `Витончений знімок, який вражає глибиною та насиченістю кольорів.`,
  `Фотографія, що переносить глядача в чарівний світ, де кожен тон видає майстерність автора.`,
  `Вишукана композиція, яка розкриває всю красу і неповторність моменту з витонченою грацією.`,
  `Вразлива фотографія, що здатна перетворити звичайний кадр на справжню шедевральну мозаїку кольорів.`,
  `Магічний знімок, де віртуозне використання кольорів створює неповторну атмосферу та розповідає цілу історію.`,
  `Вражаюча фотографія, яка здатна привернути увагу до найдрібніших деталей та перенести у світ незабутніх вражень.`,
  `Художнє полотно, на якому кожен краплинка кольору витає у повітрі і майстерно грає свою роль.`,
  `Очаровуючий знімок, де кольори стають головними героями і створюють неповторну симфонію естетики.`,
]; //массив текстовых описаний к фото

const likes = {
  minLikesCount: 15,
  maxLikesCount: 200,
}; //ограничение для количества лайков

const usersPhotoDescriptionId = {
  minUsersPhotoDescriptionId: 0,
  maxUsersPhotoDescriptionId: userPhotosDescriptions.length,
}; //ограничение для выбора айди описания фото

export function getUserPhotoObject(i) {
  return {
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: getRandomUserPhotosDescription(),
    likes: getRandomLikesCount(),
  };
} //объект для пользовательских фото

function getRandomLikesCount() {
  return getRandomNumber(likes.minLikesCount, likes.maxLikesCount);
} //случайное количество лайков

function getRandomUserPhotosDescription() {
  const randomUserPhotosDescriptionId = getRandomNumber(
    usersPhotoDescriptionId.minUsersPhotoDescriptionId,
    usersPhotoDescriptionId.maxUsersPhotoDescriptionId
  );
  return userPhotosDescriptions[randomUserPhotosDescriptionId];
} //случайное описание к фото из массива описаний

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
