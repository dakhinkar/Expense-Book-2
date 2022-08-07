import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer,{initialState} from './utilty/reducer.js';
import {StateProvider} from './utilty/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
        <App /> 
    </StateProvider>
   
  </React.StrictMode>
);

