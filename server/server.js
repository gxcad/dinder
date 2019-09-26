const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favorites = require('./routes/favorites');
const PORT = 3000;
const loginRouter = require('./routes/login.js');

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/assets', express.static(path.join(__dirname, '../client/assets')));

app.use('/build', express.static(path.join(__dirname, '../build')));

// route to home page
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
//route to login
app.use('/api/login', loginRouter);
// route to favorites
app.use('/api/favorites', favorites);

app.use('*', (req, res) => {
  res.status(404).send('Route not found');
});

app.use((err, req, res, next) => {
  console.log('global error handler triggered');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
