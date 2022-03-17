const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const seed = Math.random();
  
  if (seed > 0.75) {
    throw new Error(`A thrown exception from the app, seed was ${seed}`);
  }
  
  res.send('Hello World!');
});

const seed = Math.random();

if (seed > 0.5) {
  throw new Error(`FAILED to start due to random, seed was ${seed}`);
}

app.use(function(err, req, res) {
  const errJSON = JSON.stringify(err, undefined, '  ');

  res.status(err.status || 500);
  res.send(`500 error happened \n\n${errJSON}`);        
});

app.listen(port, () => {  
  console.log(`Example app listening at http://localhost:${port}`);
});
