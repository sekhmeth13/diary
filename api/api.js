const Express = require('express');
const app = new Express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');


// middlewares
app.use(Express.json());
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies


app.use('/api',routes);



// webserver start
app.listen(port, () => console.log(`Diary Api listening on port ${port}!`));
