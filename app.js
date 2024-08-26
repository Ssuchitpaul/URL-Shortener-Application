const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public')); // Serve your static files (like your HTML page)

app.use(routes);

app.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});
