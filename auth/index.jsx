import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { App } from './App';
import { backend } from './_helpers';

backend();

render(
    <App />,
    document.getElementById('app')
);