import { updateDOMWithProjects, addStaticEventListeners } from './utils/event-listeners';
import drawHome from './components/drawHome';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import projects from './projects';

window.addEventListener('DOMContentLoaded', () => {
  drawHome();
  addStaticEventListeners();
  updateDOMWithProjects(projects);
});
