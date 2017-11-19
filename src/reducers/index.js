import { combineReducers } from 'redux'
import restaurants from './restaurants'
import language from './language'

const reducers = combineReducers({
    restaurants,
    language
});

export default reducers;