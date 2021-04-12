export const FETCHING = 'FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCHING_DETAIL = 'FETCHING_DETAIL';
export const FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCESS';
export const FETCH_DETAIL_FAILURE = 'FETCH_DETAIL_FAILURE';
export const SET_FILTER = 'SET_FILTER';
export const SET_PAGE = 'SET_PAGE';

export const fetchDogs = () => ({ type: FETCHING });
export const fetchSuccess = (dogs) => ({ type: FETCH_SUCCESS, dogs });
export const fetchFailure = (error) => ({ type: FETCH_FAILURE, error });
export const fetchDetail = () => ({ type: FETCHING_DETAIL });
export const fetchDetailSuccess = (dog) => ({ type: FETCH_DETAIL_SUCCESS, dog });
export const fetchDetailFailure = (error) => ({ type: FETCH_DETAIL_FAILURE, error });
export const setFilter = (filter) => ({ type: SET_FILTER, filter });
export const setPage = (page) => ({ type: SET_PAGE, page });

export const asyncFetchDogs = (filter, page) => (
  async (dispatch) => {
    dispatch(fetchDogs());
    const searchPage = 'search/photos';
    const criteria = `&query=${filter}&page=${page}&per_page=6`;

    const url = `https://api.unsplash.com/${searchPage}?client_id=${process.env.REACT_APP_CATALOGUE_UNSPLASH_API_KEY}${criteria}`;
    return fetch(`${url}`)
      .then((result) => result.json())
      .then((data) => dispatch(fetchSuccess(data, filter)))
      .catch((error) => dispatch(fetchFailure(error)));
  }
);

export const asyncFetchDetail = (id) => (
  async (dispatch) => {
    dispatch(fetchDetail());
    const searchPage = `/photos/${id}`;

    const url = `https://api.unsplash.com/${searchPage}?client_id=${process.env.REACT_APP_CATALOGUE_UNSPLASH_API_KEY}`;
    return fetch(`${url}`)
      .then((result) => result.json())
      .then((data) => dispatch(fetchDetailSuccess(data)))
      .catch((error) => dispatch(fetchDetailFailure(error)));
  }
);
