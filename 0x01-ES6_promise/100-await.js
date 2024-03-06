import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user]).then((results) => ({
    photo: results[0],
    user: results[1],
  })).catch(() => ({
    photo: null,
    user: null,
  }));
}
