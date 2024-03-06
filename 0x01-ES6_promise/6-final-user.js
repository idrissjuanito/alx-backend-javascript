const signUpUser = require('./4-user-promise');
const uploadPhoto = require('./5-photo-reject');

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const filePromise = uploadPhoto(fileName);
  return Promise.allSettled([userPromise, filePromise]);
}
