import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
// import Aux from './hoc/Aux_1';
ReactDOM.render(<App title="Relevant Persons"/>, document.getElementById('root'));
registerServiceWorker();
