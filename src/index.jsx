import './styles/styles.css';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

render(<App />, document.getElementById('container'));
