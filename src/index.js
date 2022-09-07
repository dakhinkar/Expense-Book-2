import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {StateProvider} from './utilty/StateProvider';
import reducer,{initialState} from './utilty/reducer';
import {reducerCases} from  './utilty/constant'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
        <App /> 
    </StateProvider>
   
  </React.StrictMode>
);

