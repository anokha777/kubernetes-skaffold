const jwt = require('jsonwebtoken');
// const role = require('../constant/role');
const config = require('../config/config');

const authController = {
  authenticateUser: (req, res, next) => {
    const token = req.body.headers.authorization.split(" ")[1];
    console.log('token is--------------------------', token);
    if (!token) {
      return res.status(401).send({ msg: 'Access Denied: No Token Provided!' });
    }
    try {
      const decoded = jwt.verify(token, config.secret);
      console.log('decoded---------------------', decoded);
      if(decoded){
        req.user=decoded;
        next();
      } else {
        res.status(401).send({ msg: 'Invalid User' });
      }
    } catch (error) {
      console.log('error-------------', error);
      res.status(401).send({ msg: 'Invalid Token' });
    }
  },

}

module.exports = authController;