import { combineReducers } from 'redux';
import { AUTH_ACTION_TYPE, BUSINESS_LIST_ACTION_TYPE, BUSINESS_ACTION_TYPE, FAVORITE_ACTION_TYPE } from '../action/action_type';

// businessList state
const businessList = (state = {
  loading: false,
  data: null,
  error: null
}, action) => {
  console.log(action);
  switch (action.type) {
    case BUSINESS_LIST_ACTION_TYPE.BUSINESS_LIST_LOADING:
      return {
        ...state,
        loading: true
      };
    case BUSINESS_LIST_ACTION_TYPE.BUSINESS_LIST_200:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case BUSINESS_LIST_ACTION_TYPE.BUSINESS_LIST_404:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

// user reducer
const user = (state = {
  loading: false,
  data: null,
  error: null
}, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPE.SIGN_OUT_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case AUTH_ACTION_TYPE.SIGN_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: null,
        error: null
      };
    case AUTH_ACTION_TYPE.SIGN_OUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case AUTH_ACTION_TYPE.SIGN_UP_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case AUTH_ACTION_TYPE.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    case AUTH_ACTION_TYPE.SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case AUTH_ACTION_TYPE.SIGN_IN_LOADING:
      return {
        ...state,
        loading: false,
      };
    case AUTH_ACTION_TYPE.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    case AUTH_ACTION_TYPE.SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

// favs state
const favs = (state = {
  loading: false,
  data: null,
  error: null
}, action) => {
  switch (action.type) {
    case FAVORITE_ACTION_TYPE.ADD_FAV_LOADING:
      return {
        ...state,
        loading: true
      };
    case FAVORITE_ACTION_TYPE.ADD_FAV_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FAVORITE_ACTION_TYPE.ADD_FAV_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case FAVORITE_ACTION_TYPE.DELETE_FAV_LOADING:
      return {
        ...state,
        loading: true
      };
    case FAVORITE_ACTION_TYPE.DELETE_FAV_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FAVORITE_ACTION_TYPE.DELETE_FAV_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

const currentBusiness = (state = {
  loading: false,
  data: null,
  error: null
}, action) => {
  switch (action.type) {
    case BUSINESS_ACTION_TYPE.BUSINESS_LOADING:
      return {
        ...state,
        loading: true
      };
    case BUSINESS_ACTION_TYPE.BUSINESS_404:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case BUSINESS_ACTION_TYPE.BUSINESS_200:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

// combine businessList and favs state
export default combineReducers({
  businessList,
  favs,
  user,
  currentBusiness
});

