const Pool = require("pg").Pool;
let url =
	"postgres://kpbrjtvt:tmU2ixXRIwrYp1_uBqvugQbY18KfYQwi@otto.db.elephantsql.com:5432/kpbrjtvt";
const pool = new Pool({
	connectionString: url
});


const setCookie = (req, res, next) =>  {
	res.cookie("ssid", res.locals.id, {httpOnly: true});
	next();
}

// const printUser = (req, res, next) => {
// 	pool.query(`SELECT * FROM "Users";`, (err, result) => {
// 		console.log(result)
// 	});
// }

// const verifyUser = (req, res, next) => {

// 	console.log(req.body);
// 	let arr = [req.body.user];
// 	let queryforPass = `SELECT * FROM "Users" WHERE "user" = $1`;
// 	pool.query(queryforPass, arr, (err, result) => {
// 		if (err) console.log("no result for user found");
// 		if(result.rows.length === 0){
// 			return res.send("Not Verified");
// 		}
// 		console.log("result.rows or something", result.rows);
		
// 		if (result.rows[0].password === req.body.pass) {
// 			// console.log("pass");
// 			res.locals.id = result.rows[0]["_id"];
// 			//console.log("res loc id: ", res.locals.id)
const showUsers = (req, res, next) => {
  pool.query(`SELECT * FROM "Users"`, (err, result) => {
    if(err) next(err);
    console.log(result);
    next();
  })
};

const verifyUser = (req, res, next) => {
  console.log('reached verifyUser controller!');
  const { username, password } = req.body;
  console.log(username, password);
  let arr = [req.body.username];
	let queryforPass = `SELECT * FROM "Users" WHERE "user" = $1`;
	pool.query(queryforPass, arr, (err, result) => {
		if (err) console.log("no result for user found");
    // console.log(result.rows[0].password);
    if (result.rows[0] === undefined) {
      console.error(err);
    }
		if (result.rows[0].password === req.body.password) {
			console.log("pass");
			res.locals.id = result.rows[0]["_id"];
			return next();
		}
		
	});
};

const createUser = (req, res, next) => {
  const { username, password} = req.body;

	//let queryForSignup = `INSERT INTO "Users" (user,password) VALUES ($1,$2)`;
	pool.query(`INSERT INTO "Users" ("user", "password") VALUES ($1, $2)`, [username, password], (err, results) => {
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
	createUser,
	setCookie,
	// printUser
};
