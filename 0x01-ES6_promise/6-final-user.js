import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const usePromise = signUpUser(firstName, lastName);
  const filePromise = uploadPhoto(filename);
  const allPromises = Promise.allSettled([usePromise, filePromise]);
  return allPromises;
}
