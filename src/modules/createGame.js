const id = 'myGame';
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const createGame = async () => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(id),
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const game = await response.json();
  return game;
};

export default createGame;