export const FETCH_RESTAURANTS_REQUEST = 'FETCH_RESTAURANTS_REQUEST';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_FAILURE  = 'FETCH_RESTAURANTS_FAILURE';
export const FETCH_RESTAURANTS_RESET  = 'FETCH_RESTAURANTS_RESET';

export const fecthRestaurantsRequestAction = () => ({
    type: FETCH_RESTAURANTS_REQUEST
})

export const fecthRestaurantsSuccessAction = (restaurantsData) => ({
    type: FETCH_RESTAURANTS_SUCCESS,
    restaurantsData
});

export const fecthRestaurantsFailureAction = () => ({
    type: FETCH_RESTAURANTS_FAILURE
});

export const fecthRestaurantsResetAction = () => ({
    type: FETCH_RESTAURANTS_RESET
});