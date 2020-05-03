const mongoose = require('mongoose');
const config = require('../config/config');

const db = mongoose.connect(config.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true  }, (error) => {
  if (error) {
    console.log('post-comment-svc db connection error----', error);
    throw (error);
  } else {
    console.log('post-comment-svc db connected....');
  }
});

module.exports = db;
