import { scoresContainer, formName, formScore } from './htmlElements.js';

const scoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/enuSmmGLNQXzHU49kR78/scores/';

const createDiv = (scores) => {
  scoresContainer.innerHTML = '';
  scores.forEach((score) => {
    const scoreContainer = `
      <div class="score">
        <p class="score-text">${score.user}: ${score.score}</p>
      </div>
    `;
    scoresContainer.innerHTML += scoreContainer;
  });
};

const sortScores = (array) => array.sort((a, b) => b.score - a.score);

// Scores
const getScores = async () => {
  const response = await fetch(scoreURL);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const scores = await response.json();
  return scores.result;
};

const addScore = async () => {
  const newScore = {
    user: formName.value,
    score: parseInt(formScore.value, 10),
  };

  const response = await fetch(scoreURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newScore),
  });

  const status = await response.json();
  return status;
};

const loadScores = () => {
  getScores().then((listScore) => {
    const scores = sortScores(listScore);
    createDiv(scores);
  });
};

export { addScore, loadScores };