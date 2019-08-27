import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// local reducers
import rootReducer from './reducers';

// save to local storage
const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
};

//  load from local storage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    return serializedState === null ? {} : JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return {};
  }
};

// init state or load from storage
const initialState = loadFromLocalStorage();

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
