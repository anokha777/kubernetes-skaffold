const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const authRouter = require('./src/router/authRouter');

const app = express();
app.use(helmet());

//Body Parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port = 8080;

app.use('/api', authRouter); 

app.use('/', (req, res) => {
  res.send('Auth Server OK!!!');
})

require('./src/db/dbConnect');

app.listen(port, () => {
  console.log('Auth server listening at port- ', port);
});
