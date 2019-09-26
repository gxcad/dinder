const Pool = require("pg").Pool;
let url =
	"postgres://kpbrjtvt:tmU2ixXRIwrYp1_uBqvugQbY18KfYQwi@otto.db.elephantsql.com:5432/kpbrjtvt";
const pool = new Pool({
	connectionString: url
});

const setCookie = (req, res, next) =>  {
	res.cookie("loginCookie", res.locals.id, {httpOnly: te});
	next();
}

// const printUser = (req, res, next) => {
// 	pool.query(`SELECT * FROM "Users";`, (err, result) => {
// 		console.log(result)
// 	});
// }

const verifyUser = (req, res, next) => {

	console.log(req.body);
	let arr = [req.body.user];
	let queryforPass = `SELECT * FROM "Users" WHERE "user" = $1`;
	pool.query(queryforPass, arr, (err, result) => {
		if (err) console.log("no result for user found");
		if(result.rows.length === 0){
			return res.send("Not Verified");
		}
		console.log("result.rows or something", result.rows);
		
		if (result.rows[0].password === req.body.pass) {
			// console.log("pass");
			res.locals.id = result.rows[0]["_id"];
			//console.log("res loc id: ", res.locals.id)
			return next();
		}
		
	});
};

const createUser = (req, res, next) => {
	let arr = [req.body.user, req.body.password];
	let queryForSignup = `INSERT INTO "users" ("user","password") VALUES ($1,$2)`;
	pool.query(queryForSignUp, arr, (err, result) => {
		if (err) console.log("QUERY NOT FOUND");
		return next();
	});
};

module.exports = {
	verifyUser,
	createUser,
	setCookie,
	// printUser
};
