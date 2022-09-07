const express = require('express');
const session = require('express-session');
const path = require('path');
const router = require('./routes');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(session({
    secret: '987f4bd6d4315c20b2ec70a46',
    saveUninitialized: false,
    resave: true,
}));

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));