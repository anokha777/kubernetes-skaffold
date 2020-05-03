const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const gatewayRouter = require('./src/routers/gatewayRouter');

const app = express();
app.use(helmet());

//Body Parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS issue, allowed methods
app.use(cors({credentials: true, origin: true}));
// app.options('*', cors());

const port = 8080;

app.use('/api', gatewayRouter);

// app.use('/', (req, res) => {
//   res.send('Gateway Server OK!!!');
// })

app.get('/health', (req, res) => {
  res.send({status: "Gateway Server OK"});
});

app.get('/autoscale', (req, res) => {
  var i;
  for(var z =0;  z < getRandomInt(9999999); z++){
    i = Math.sqrt(getRandomInt(9999999)).toString()
  }
  // console.log(i);
  res.send(i);
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


app.use((error, req, res, next) => {
  if (error) res.status(500).send({ statusCode: error.statusCode, msg: error.error.msg });
  next();
});

app.use((req, res) => {
  res.status(404).send('NOT Found.');
});

app.listen(port, () => {
  console.log('Gateway listening at port- ', port);
});
