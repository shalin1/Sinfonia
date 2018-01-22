import anime from 'animejs';
import keyMap from './keyMap';
import resonate from './sound';
import lodash from 'lodash';

const commence = e => {
  let pos = keyMap(e.keyCode);
  resonate(pos);
};

const showFooter = () => anime({
  targets: document.getElementById('footer'),
  opacity: 1,
  easing: 'easeInOutQuart',
  duration: 1500
});

const hideFooter = () => anime({
  targets: document.getElementById('footer'),
  opacity: 0,
  easing: 'easeInOutQuart',
  duration: 1500
});

const showTooltip = () => anime({
  targets: document.getElementById('tooltip'),
  opacity: 1,
  easing: 'easeInQuad',
  duration: 1925
})

const hideToolTip = () => anime({
  targets: document.getElementById('tooltip'),
  opacity: 0,
  easing: 'easeInOutQuart',
  duration: 1500
})

document.addEventListener('DOMContentLoaded', () => {
  showFooter();
  showTooltip();
  document.addEventListener('keydown', hideFooter, false)
  document.addEventListener('keydown', hideToolTip, false)
  document.addEventListener('mousemove', showFooter, false)
  document.addEventListener('keydown', commence, false);
});
