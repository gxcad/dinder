import * as types from "./action_type.js";

export const verify = (user, pass) => ({
    type: types.verify,
    payload: user, pass
});

export const addFav = (favs, visited) => ({
    type: types.addFav,
    payload: favs
});

export const deleteFav = (favs) => ({
    type: types.deleteFav,
    payload: favs
});

export const signup = (user, pass) => ({
    type: types.isLoggedin,
    payload: user, pass

})
