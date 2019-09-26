const axios = require('axios');
const key = require('../../config/keys');
const Pool = require("pg").Pool;
let url =
    "postgres://kpbrjtvt:tmU2ixXRIwrYp1_uBqvugQbY18KfYQwi@otto.db.elephantsql.com:5432/kpbrjtvt";
const pool = new Pool({
    connectionString: url
});


// 1. get Yelp API - one business with detail infor
const getYelpDetail = (req, res, next) => {
    let id = req.params.id;
    // yelp API search endpoint 
    axios.get(`https://api.yelp.com/v3/businesses/${id}`, {
        headers: {
            Authorization: `Bearer ${key.API_KEY}`
        }
    })
        .then((response) => {
            console.log("hello==>", response.data);
            res.locals.apiData = response.data;
            return next()
        })
        .catch(err => next({
            err: "error"
        }))
}

// 2. get Yelp many businesses 
const LOCATION_SEARCHED = '1600 Main St 1st floor, Venice, CA 90291';

const getYelpMany = (req, res, next) => {
    axios.get(`https://api.yelp.com/v3/businesses/search?location=${LOCATION_SEARCHED}&limit=50`, {
        headers: {
            Authorization: `Bearer ${key.API_KEY}`
        }
    })
        .then((response) => {
            console.log('got data from yelp');
            console.log(response.data);
            res.locals.many = response.data;
            return next();
        })
        .catch((error) => {
            console.log(error);
            console.log('error while fetching data');
            next({ error });
        });
}

// 2. save direction into the database for the user
// const currentUser = (req, res, next) => {
//     const { id, location.address3 } = res;

// }

module.exports = {
    getYelpDetail,
    getYelpMany
}

