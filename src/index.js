const express = require('express');
const routes = require('./routes/routes');
const serverConfig = require('./config/serverConfig.json');

require('./database/index');

const app = express();

app.use('/', routes);

app.listen(serverConfig.port, () => {
    console.log(`listening at http://${serverConfig.host}:${serverConfig.port}`);
})