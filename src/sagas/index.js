import { fork } from 'redux-saga/effects';
import { watchRestaurants } from './restaurantsSaga'


export default function* root() {
	yield [
		fork(watchRestaurants)
	];
}
