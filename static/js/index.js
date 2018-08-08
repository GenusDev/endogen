import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import * as Redux from 'redux'
import {Provider} from 'react-redux';
import Reducers from './reducers/root-reducer'


const store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')

);

// registerServiceWorker();
