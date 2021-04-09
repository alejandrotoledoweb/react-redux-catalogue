import FETCH_CATS from '../actions';

export const defaultState = {
  list: [],
  loading: false,
  filter: 'cats-normal',
  page: 1,
};

export const catReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CATS:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default catReducer;
