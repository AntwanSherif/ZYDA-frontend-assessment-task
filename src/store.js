import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router'


const sagaMiddleware = createSagaMiddleware();


export default function configureStore(initialState, history) {
	// Build the middleware for intercepting and dispatching navigation actions
	const middleware = [sagaMiddleware,routerMiddleware(history)];

	// Add logging for client
	if (typeof window !== 'undefined' && window.document) {
		middleware.push(createLogger({collapsed: true}));
	}

	const store = createStore(
		connectRouter(history)(reducers),
		initialState,
		applyMiddleware(...middleware),
	);


	store.runSaga = sagaMiddleware.run;
	store.close = () => store.dispatch(END);

	return store;
};
