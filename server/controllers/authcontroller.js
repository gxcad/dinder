const cookieParser = require('cookie-parser');
const Pool = require("pg").Pool;



const setCookie = (req, res, next) => {
  console.log('res.locals.id in authController', res.locals);
  res.cookie('ssid', res.locals.id, {httpOnly: true});
  return next();
}

module.exports = {
  setCookie
};