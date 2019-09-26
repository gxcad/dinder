const Pool = require("pg").Pool;
let url =
	"postgres://kpbrjtvt:tmU2ixXRIwrYp1_uBqvugQbY18KfYQwi@otto.db.elephantsql.com:5432/kpbrjtvt";
const pool = new Pool({
	connectionString: url
});

const showUsers = (req, res, next) => {
  pool.query(`SELECT * FROM "Users"`, (err, result) => {
    if(err) next(err);
    console.log(result);
    next();
  })
};

const verifyUser = (req, res, next) => {
  let arr = [req.body.username];
  // console.log('arr', arr);
  let queryforPass = `SELECT "password", "_id", "user" FROM "Users" WHERE "user" = $1`;
	pool.query(queryforPass, arr, (err, result) => {
    // console.log('result.rows[_id]', result.rows[0]._id);
		if (err) console.log("no result for user found");
    // console.log('req.body password', req.body.password);
    if (result.rows[0] === undefined) {
      return next(err);
    }
		if (result.rows[0].password === req.body.password) {
      res.locals.id = result.rows[0]._id;
      res.locals.user = result.rows[0].user;
      // console.log('user controller res.locals.id', res.locals.id);
			return next();
    }
	});
};

const createUser = (req, res, next) => {
  console.log('beginning of createUser', req.body);
  const { username, password} = req.body;
  console.log('user at create user', username);

	const queryForSignup = `INSERT INTO "Users" ("user", "password") VALUES ($1, $2)`;
	pool.query(queryForSignup, [username, password], (err, results) => {
		if (err) {
      console.log('this is the error', err);
      return next(err);
    }
    console.log('no errors');
    next();
	});
};

module.exports = {
  showUsers,
	verifyUser,
	createUser
};
