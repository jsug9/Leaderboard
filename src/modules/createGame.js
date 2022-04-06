const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

// This code was used initially to generate a key, it is actually no longer needed.

const createGame = async () => {
  const response = await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'newGame',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return response.json();
};

const newGame = () => {
  window.addEventListener('load', async () => {
    const { result } = await createGame();
    const gameID = result.substr(14, 20);
    console.log(gameID);
  });
};

export default newGame;