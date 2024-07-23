const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Handlebars setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Session setup
app.use(session({
  secret: 'super secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}));

// Turn on routes
app.use(routes);

// Connect to the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on PORT ' + PORT));
});
