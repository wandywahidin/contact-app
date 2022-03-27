import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

// reducer
import loadingReducer from './reducer/loading';
import contactReducer from './reducer/contact'

const reducers = combineReducers({
    loadingReducer,
    contactReducer
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));


export default store