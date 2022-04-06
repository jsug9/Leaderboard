import './style.css';
import { form, refreshButton } from './modules/htmlElements.js';
import { addScore, loadScores } from './modules/APIcall.js';

loadScores();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore();
  document.getElementById('form').reset();
});

refreshButton.addEventListener('click', () => {
  loadScores();
});
