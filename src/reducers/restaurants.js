import * as restaurantActions from '../actions/restaurantsActions'
import initialState from '../initialState'

const restaurants = (state = initialState.restaurants, action) => {

    switch (action.type) {
        case restaurantActions.FETCH_RESTAURANTS_REQUEST:
            return { ...state, isFetching: true };

        case restaurantActions.FETCH_RESTAURANTS_SUCCESS:
            return { ...state, isFetching: false, status:'success', data: action.restaurantsData };

        case restaurantActions.FETCH_RESTAURANTS_FAILURE:
            return { ...state, isFetching: false, status:'failure' };

        case restaurantActions.FETCH_RESTAURANTS_RESET:
        default:
            return state;
    }
}

export default restaurants;