// const request = require('request');
const rp = require('request-promise');

const userService = {

  registerUser: (req, res, next) => {
    try {
      const options = {
        method: 'POST', 
        uri: 'http://user-service.default.svc.cluster.local/user/register',
        body: req.body,
        json: true // Automatically stringifies the body to JSON
    };

    return rp(options)
        .then((response) => {
          res.set('Content-Type', 'application/json');
          res.status(201).send(response);
        }).catch(err => {
          res.status(500).send({ statusCode: err.statusCode, msg: err.error.msg });
      })
    } catch (error) {
      next(error);
    }
  },

  loginUser: (req, res, next) => {
    const options = {
      method: 'POST',
      // uri: 'http://localhost:5000/api/user/login',
      uri: 'http://user-service.default.svc.cluster.local/user/login',
      body: req.body,
      json: true // Automatically stringifies the body to JSON
    };
    try {
      return rp(options)
        .then((response) => {
          res.set('Content-Type', 'application/json');
          res.status(200).send(response);
        }).catch(err => {
          res.status(500).send("Error in login!!!")
      })
    } catch (error) {
      next(error);
    }
  },

  logoutUser: (req, res, next) => {
    const options = {
      method: 'GET',
      uri: 'http://user-service.default.svc.cluster.local/user/logout',
      json: true // Automatically stringifies the body to JSON
    };
    try {
      return rp(options)
        .then((response) => {
          res.set('Content-Type', 'application/json');
          res.status(200).send(response);
        }).catch(err => {
          res.status(500).send({ statusCode: err.statusCode, msg: err.error.msg });
      })
    } catch (error) {
      next(error);
    }
  },

  getUserById: (req, res, next) => {
    const options = {
      method: 'GET',
      uri: `http://user-service.default.svc.cluster.local/user/byid/${req.params.id}`,
      json: true // Automatically stringifies the body to JSON
    };
    try {
      return rp(options)
        .then((response) => {
          res.set('Content-Type', 'application/json');
          res.status(200).send(response);
        }).catch(err => {
          res.status(500).send({ statusCode: err.statusCode, msg: err.error.msg });
      })
    } catch (error) {
      next(error);
    }
  },

  getUserByUsername: (req, res, next) => {
    const options = {
      method: 'GET',
      uri: `http://user-service.default.svc.cluster.local/user/byusername/${req.params.username}`,
      json: true // Automatically stringifies the body to JSON
    };
    try {
      return rp(options)
        .then((response) => {
          res.set('Content-Type', 'application/json');
          res.status(200).send(response);
        }).catch(err => {
          res.status(500).send({ statusCode: err.statusCode, msg: err.error.msg });
      })
    } catch (error) {
      next(error);
    }
  },

}

module.exports = userService;
