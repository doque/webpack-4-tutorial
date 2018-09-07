import './index.html';
import React from 'react';
import { render } from 'react-dom';
import { Hello } from './Hello';

render(<Hello name="Donald Trump" />, document.getElementById('app'));
