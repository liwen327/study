/**
 * Created by liwz on 2017-8-24.
 */
//main.js
/*
var greeter = require('./Greeter.js');

document.write(greeter());*/

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(<Greeter />, document.getElementById('root'));
