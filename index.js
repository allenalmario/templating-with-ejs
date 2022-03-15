const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'My Home Page';
  res.render('pages/index', {title:title});
});

app.get('/lakers', (req, res) => {
  var title = 'Lakers Page';
  res.render('pages/lakers', {title:title});
});

app.get('/warriors', (req, res) => {
  var title = 'Warriors Page';
  res.render('pages/warriors', {title:title});
});

app.get('/clippers', (req, res) => {
  var title = 'Clippers Page';
  res.render('pages/clippers', {title:title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
