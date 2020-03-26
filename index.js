const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static(__dirname))

app.get('/', (req, res) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      res.end('file not found');
    } else {
      res.write(data);
      res.end();
    }
  });
});
app.listen(process.env.PORT);
// app.listen(8080)