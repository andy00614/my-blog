import _ from 'lodash';
import './style.css';
import './styles.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import Icon from '@/assets/genu.jpg';
// import App from './App';
import Sample from './Sample.tsx';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('scssColor');

  const newIcon = new Image();
  newIcon.src = Icon;
  element.appendChild(newIcon);

  return element;
}

document.body.appendChild(component());

ReactDOM.render(<Sample compiler="TypeScript" framework="React" />, document.getElementById('root'));
