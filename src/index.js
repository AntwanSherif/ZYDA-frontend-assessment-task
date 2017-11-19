import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'connected-react-router'
import { Route } from 'react-router';

import sagas from './sagas'
import configureStore from './store';
import App from './App';
import Routes from './routes';
import initialState from './initialState';

//there's an issue with semantic css which make it load slower.
//Instead, I used an external in index.html
// import 'semantic-ui-css/semantic.min.css'    
// import './index.css';
import registerServiceWorker from './registerServiceWorker';



// Create a history of your choosing (we're using a browser history in this case)
const browserHistory = createHistory();
const store = configureStore(initialState, browserHistory);
store.runSaga(sagas);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
            <Route>
                <App>
                    <Routes />
                </App>
            </Route>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();