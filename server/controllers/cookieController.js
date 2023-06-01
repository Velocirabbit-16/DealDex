const jwt = require('jsonwebtoken');
const cookieController = {};

cookieController.create = async (req, res, next) => {
  user = res.locals.user;

  try {
    const token = await jwt.sign({ ...user }, process.env.MY_SECRET, { expiresIn: '1h'})

    res.cookie('token', token, {
      httpOnly: true
    })

    next();

  } catch(err) {
    return next({
      log: `${err} in cookieController.create`,
      status: 400,
      message: { err: 'Error in cookieController.create' }
    });
  }
  
}

cookieController.verify = async (req, res, next) => {
  const token = req.cookies.token;

  try {
    const user = jwt.verify(token, process.env.MY_SECRET)
  
    res.locals.userId = user._doc._id;
  
    console.log('verified')
    next();

  } catch(err) {
    return next({
      log: `${err} in cookieController.verify`,
      status: 400,
      message: { err: 'Error in cookieController.verify' }
    });
  }

}








module.exports = cookieController;