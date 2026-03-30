const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const sharkController = require('./controllers/sharks');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', sharkController.index);
app.post('/sharks', sharkController.create);
app.get('/sharks/getshark', sharkController.getSharks);

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
