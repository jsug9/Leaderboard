import { scoresContainer, formName, formScore } from './htmlElements.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/enuSmmGLNQXzHU49kR78/scores/';

const createDiv = (scores) => {
  scoresContainer.innerHTML = '';
  const sortedScores = scores.sort((a, b) => b.score - a.score);
  sortedScores.forEach((score) => {
    const scoreContainer = `
      <div class="score">
        <p class="score-text">${score.user}: ${score.score}</p>
      </div>
    `;
    scoresContainer.innerHTML += scoreContainer;
  });
};

// Scores
const getScores = async () => {
  const response = await fetch(url);
  const scores = await response.json();
  return scores.result;
};

const addScore = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: formName.value,
      score: formScore.value,
    }),
  });

  const status = await response.json();
  return status;
};

const loadScores = () => {
  getScores().then((scores) => {
    createDiv(scores);
  });
};

export { addScore, loadScores };