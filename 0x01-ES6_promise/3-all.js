import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const allPromises = Promise.all([uploadPhoto, createUser]);
  allPromises.then((results) => {
    console.log(results[0].body, results[1].firstName, results[1].lastName);
  });
}
