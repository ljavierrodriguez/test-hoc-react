import React from 'react';
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';

import App from './App';


reactDom.render(<App />, document.querySelector('#root'));