const express = require('express');
const app = new express();

app.use(express.static('./dist/fisquiweb'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {
    root: 'dist/fisquiweb'
  });
});

app.listen(8080);