const cookieParser = require('cookie-parser');
const uuidv4 = require('uuid/v4');
const Pool = require("pg").Pool;
let url =
	"postgres://kpbrjtvt:tmU2ixXRIwrYp1_uBqvugQbY18KfYQwi@otto.db.elephantsql.com:5432/kpbrjtvt";
const pool = new Pool({
	connectionString: url
});

const setCookie = (req, res, next) => {
  res.locals.sessionId = uuidv4();
  console.log('res.locals.id in authController', res.locals.id);
  res.cookie('ssid', res.locals.sessionId, {httpOnly: false});
  return next();
}

const setSession = (req, res, next) => {
  console.log('res.locals at set session', res.locals);
  const user = res.locals.user;
  const sessionId = res.locals.sessionId;
  const queryForInsertSession = `INSERT INTO "sessions" ("user", "cookieId") VALUES ($1, $2)`;
  const checkSessionQuery = 'select * from "sessions" where "user" = $1';
  pool.query(checkSessionQuery, [user], (err, result) => {
    if (err) return next(err);
    if (result.rows.length >= 1) {
      pool.query(queryForInsertSession, [user, sessionId], (err, results) => {
        if (err) {
          console.log('this is the error', err);
          return next(err);
        }
        console.log('no errors');
        next();
      });
    }
  });
  next();
};

const sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect('/loggedInPage'); // placeholder
  }
}

module.exports = {
  setCookie,
  setSession
};