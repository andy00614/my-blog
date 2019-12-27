import _ from 'lodash';
import './style.css';
import './styles.scss';
import Icon from './assets/genu.jpg';

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
