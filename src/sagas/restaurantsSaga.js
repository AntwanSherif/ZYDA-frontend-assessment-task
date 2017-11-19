import { takeLatest, call, put } from 'redux-saga/effects';
import { getRestaurantsAPI } from '../services/getRestaurants';
import * as restaurantsActions from '../actions/restaurantsActions';

export function* restaurants() {
	try {
        const response = yield call(getRestaurantsAPI);
		const restaurants = response.data;
		console.log(restaurants);
		yield put(restaurantsActions.fecthRestaurantsSuccessAction(restaurants));
	} catch (error) {}
}

export function* watchRestaurants(context) {
	yield takeLatest(restaurantsActions.FETCH_RESTAURANTS_REQUEST, restaurants);
}