const Pool = require("pg").Pool;
const bcrypt = require('bcryptjs');
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("B4c0/\/", salt);
let url =
  "postgres://kpbrjtvt:tmU2ixXRIwrYp1_uBqvugQbY18KfYQwi@otto.db.elephantsql.com:5432/kpbrjtvt";
const pool = new Pool({
  connectionString: url
});

const setCookie = (req, res, next) =>  {
	res.cookie("ssid", res.locals.user._id, {httpOnly: false});
	next();
};

const showUsers = (req, res, next) => {
  pool.query(`SELECT * FROM "Users"`, (err, result) => {
    if (err) next(err);
    console.log(result);
    next();
  })
};

const verifyUser = (req, res, next) => {
  let arr = [req.body.username];
	let queryforPass = `SELECT * FROM "Users" WHERE "user" = $1`;

	pool.query(queryforPass, arr, (err, result) => {
    // console.log('result.rows[_id]', result.rows[0]._id);
		if (err) console.log("no result for user found");
    // console.log('req.body password', req.body.password);
    if (result.rows[0] === undefined) {
      return next(err);
    }
    bcrypt.compare(req.body.password, result.rows[0].password, function(err, bcryptResult) {
      if (bcryptResult) {
        console.log('test', result.rows[0]);
        res.locals.user = result.rows[0].user;
        return next();
      }
      return next({
        error: 'Password not match'
      })
      // res === true
    });
		
	});
};

const createUser = (req, res, next) => {
  const { username, password } = req.body;

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      const queryForSignup = `INSERT INTO "Users" ("user", "password") VALUES ($1, $2)`;
	    pool.query(queryForSignup, [username, hash], (err, results) => {
		  if (err) {
        console.log('this is the error', err);
        return next(err);
      }
      console.log('no errors');
      next();
    });
    });
  });
};

module.exports = {
  showUsers,
	verifyUser,
	createUser,
	setCookie,
	// printUser
};
