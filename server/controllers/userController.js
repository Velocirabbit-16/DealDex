const bcrypt = require('bcrypt');
const User = require('../models/userModel')
const userController = {};


userController.register = async (req, res, next) => {
  const { username, password } = req.body;
  const salt = 10;

  try {
    const userDoc = await User.create({
      username: username,
      password: bcrypt.hashSync(password, salt),
    });

    
    res.locals.user = userDoc;
    next();

  } catch (err) {
    return next({
      log: 'Error in userController register',
      status: 400,
      message: { err: 'Error in userController register' }
    });
  }
}

userController.login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const userDoc = await User.findOne({ username });
    const verified = bcrypt.compareSync(password, userDoc.password);

    if (verified) {
    res.locals.user = userDoc;
    next();

    }

  } catch (err) {
    return next({
      log: 'Error in userController login',
      status: 400,
      message: { err: 'Error in userController login' }
    });
  }
}

userController.addFavorites = async (req, res, next) => {
  const { favorite } = req.body;

  try {

    const user = await User.findById(res.locals.userId)

    user.favorites.push(favorite);

    const userSave = await user.save();
        
    next();

  } catch (err) {
    return next({
      log: `${err} userController.getFavorites`,
      status: 400,
      message: { err: 'Error in userController.getFavorites' }
    });
  }
}

userController.getFavorites = async (req, res, next) => {

  try {
    const user = await User.findById(res.locals.userId);

    res.locals.favorites = user.favorites;

    next();

  } catch (err) {
    return next({
      log: `${err} in userController.getFavorites`,
      status: 400,
      message: { err: 'Error in userController.getFavorites' }
    });
  }
}

module.exports = userController;