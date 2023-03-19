const express = require('express');
const routes = require('./routes');
// import sequelize connection
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

console.log(db.connect);

// sync sequelize models to the database, then turn on the server
db.sync().then(err => {
  console.log('Connected to database successfully');
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
}).catch(err => {
  console.log(`Unable to connect to database: ${err}`);
});
