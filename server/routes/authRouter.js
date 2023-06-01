const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const cookieController = require('../controllers/cookieController')


router.post('/register', userController.register, cookieController.create, (req, res, next) => {
  res.status(200).json(res.locals.user)
  // res.status(200).send('register successful')
})

router.post('/login', userController.login, cookieController.create, (req, res, next) => {
  res.status(200).json(res.locals.user)
  // res.status(200).send('login successful')
})

router.post('/favorites/add', cookieController.verify, userController.addFavorites, (req, res, next) => {
  res.status(200).send('added to favorites')
})

router.post('/favorites/get', cookieController.verify, userController.getFavorites, (req, res, next) => {
  res.status(200).json(res.locals.favorites)
})


module.exports = router;