const id = 'myGame';
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

// This code was used initially to generate a key, it is actually no longer needed.

const createGame = async () => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(id),
  });

  const game = await response.json();
  return game;
};

export default createGame;