import {
  FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCHING_DETAIL,
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_FAILURE,
  SET_FILTER,
  SET_PAGE,
} from '../actions';

export const defaultState = {
  list: [],
  loading: false,
  filter: 'cats-human',
  page: 1,
  message: '',
  detail: '',
};

export const dogsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return {
        list: action.dogs.results ? action.dogs.results : [],
        loading: false,
        filter: action.filter,
      };
    case FETCH_FAILURE:
      return { ...state, loading: false, message: action.error };
    case FETCHING_DETAIL:
      return { ...state, loading: true };
    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.dog.results,
        loading: false,
      };
    case FETCH_DETAIL_FAILURE:
      return { ...state, loading: false, message: action.error };
    case SET_FILTER:
      return { ...state, filter: action.filter };
    case SET_PAGE:
      return { ...state, page: action.page };
    default:
      return state;
  }
};
