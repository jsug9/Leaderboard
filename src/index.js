import { scoresContainer } from './modules/htmlElements.js';
import { scoresSample } from './modules/scoresSample.js';

scoresSample.forEach(score => {
  let scoreContainer = `
  <div class="score">
    <p class="score-text">${score.name}: ${score.score}</p>
  </div>
  `
  scoresContainer.innerHTML += scoreContainer
});