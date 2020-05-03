const mongoose = require('mongoose');
const config = require('../config/config');

const db = mongoose.connect(config.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true  }, (error) => {
  if (error) {
    console.log('auth-svc db connection error----', error);
    throw (error);
  } else {
    console.log('auth-svc db connected....');
  }
});

module.exports = db;
