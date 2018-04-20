const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  // const trimpassword = password.trim();
  const newUser = new User({ username, password });

  // if (!username) {
  //   res.status(402).json({ error: 'error put in user name' });
  // }

  // if (!password) {
  //   res.status(402).json({ error: 'error put in password' });
  // }

  newUser.save((error, user) => {
    if (error) {
      return error;
    }

    res.status(200).json(user);
  });
};

module.exports = {
  createUser
};
