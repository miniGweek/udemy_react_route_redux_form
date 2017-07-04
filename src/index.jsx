import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import {BrowserRouter, Route} from 'react-router-dom'


const createStoreWithMiddleware = applyMiddleware()(createStore);

const Hello = ()=>{
  return(
    <div> This is a Hello Component</div>
  );
}

const Greetings = ()=>{
  return(
    <div> This is a Greetings Component</div>
  );
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Route path="/hello" component={Hello}/>
      <Route path="/greetings" component={Greetings}/>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
