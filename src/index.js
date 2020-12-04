import addAllEventListeners from './utils/event-listeners';
import drawHome from './components/drawHome';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


window.addEventListener('DOMContentLoaded', () => {
  drawHome();
  addAllEventListeners();
});
