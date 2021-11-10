const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
  
  const seed = Math.random();
  
  if (seed > 0.75) {
    throw new Error(`A thrown exception from the app, seed was ${seed}`);
  }
});

const seed = Math.random();

if (seed > 0.5) {
  throw new Error(`FAILED to start due to random, seed was ${seed}`);
}

app.listen(port, () => {  
  console.log(`Example app listening at http://localhost:${port}`);
});
