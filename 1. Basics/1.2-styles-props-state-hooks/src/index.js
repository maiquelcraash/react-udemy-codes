import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppWithHooks from './AppWithHooks';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AppWithHooks />, document.getElementById('root2'));
registerServiceWorker();
