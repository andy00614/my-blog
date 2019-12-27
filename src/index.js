import _ from 'lodash';
import './style.css';
import './styles.scss';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('scssColor');

  return element;
}

document.body.appendChild(component());
