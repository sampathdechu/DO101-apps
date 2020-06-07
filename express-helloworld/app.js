var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('This is the version 2 of the app!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

