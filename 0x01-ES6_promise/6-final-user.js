import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const userPromise = signUpUser(firstName, lastName);
  const filePromise = uploadPhoto(filename);
  return Promise.allSettled([userPromise, filePromise]);
}
