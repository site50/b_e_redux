import React from 'react'
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App'
import { Provider } from 'react-redux'
//import { combineReducers, createStore, applyMiddleware } from 'redux';
import  createSagaMiddleware  from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
//import * as serviceWorker from './serviceWorker';
//import reportWebVitals from './reportWebVitals';
import mySaga from './saga';
import myReducer from './reducer';

/* OLD VERSION
const sagaMiddleware = createSagaMiddleware();//create a middleware-промежуточное программное обеспечение
const rooReducer = combineReducers({myReducer})
const store= createStore(rooReducer, applyMiddleware(sagaMiddleware))//connect middleware to the Store using applyMiddleware-подключить к store
sagaMiddleware.run(mySaga);*/

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: { myReducer },
  middleware: [saga]
})
saga.run(mySaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

export default App;
 



