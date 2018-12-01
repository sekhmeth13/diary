const Express = require('express');
const app = new Express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

// middlewares

// support json encoded bodies
app.use(bodyParser.json()); 

app.use(cors({origin: '*'}));
app.use('/api',routes);



// webserver start
app.listen(port, () => console.log(`Diary Api listening on port ${port}!`));
