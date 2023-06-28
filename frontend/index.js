const express = require('express');
const cookieParser = require('cookie-parser');

const path = require('path');

require('dotenv').config();

const loginRoute = require('./routes/auth/login');
const logoutRoute = require('./routes/auth/logout');
const meRoute = require('./routes/auth/me');
const registerRoute = require('./routes/auth/register');
const verifyRoute = require('./routes/auth/verify');
const resetPasswordRoute = require('./routes/auth/resetPassword');

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.json());
app.use(cookieParser());

app.use(loginRoute);
app.use(logoutRoute);
app.use(meRoute);
app.use(registerRoute);
app.use(verifyRoute);
app.use(resetPasswordRoute);

app.use(express.static('client/build'));
app.get('*', (req, res) => {
	return res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
