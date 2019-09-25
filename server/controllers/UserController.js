const Pool = require("pg").Pool;
let url =
	"postgres://kpbrjtvt:tmU2ixXRIwrYp1_uBqvugQbY18KfYQwi@otto.db.elephantsql.com:5432/kpbrjtvt";
const pool = new Pool({
	connectionString: url
});

const showUsers = (req, res, next) => {
  pool.query(`SELECT * FROM "Users";`, (err, result) => {
    if(err) next(err);
    console.log(result);
    next();
  })
}

const verifyUser = (req, res, next) => {
  let arr = [req.body.user];
  console.log('arr', arr);
	let queryforPass = `SELECT "password" FROM "Users" WHERE "user" = $1`;
	pool.query(queryforPass, arr, (err, result) => {
		if (err) console.log("no result for user found");
    // console.log(result.rows[0].password);
    if (result.rows[0] === undefined) {
      console.error(err);
    }
		if (result.rows[0].password === req.body.pass) {
			// console.log("pass");
			return next();
		}
		return res.send("Not Verified");
	});
};

const createUser = (req, res, next) => {
  const {user, password} = req.body;
  console.log(user, password);
	//let queryForSignup = `INSERT INTO "Users" (user,password) VALUES ($1,$2)`;
	pool.query(`INSERT INTO "Users" ("user", "password") VALUES ($1, $2)`, [user, password], (err, results) => {
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
