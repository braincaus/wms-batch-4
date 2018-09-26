const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send(
      {
          "data": "esto es genial!!!"
      }
    );
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
