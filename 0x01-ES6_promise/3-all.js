const { uploadPhoto, createUser } = require('./utils');

exports.default = function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  const allPromises = Promise.all([photo, user]);
  allPromises.then((results) => {
    console.log(results[0].body, results[1].firstName, results[1].lastName);
  });
};
