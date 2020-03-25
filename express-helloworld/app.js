var express = require('express');
app = express();

app.get('/', function (req, res) {
  response = 'this is updated version (1) of the app';
  res.send(response);
});

app.get('/mars', function(req, res){
  res.send('hello mars!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


