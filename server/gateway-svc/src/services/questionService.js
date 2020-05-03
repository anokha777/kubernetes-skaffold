// const request = require('request');
const rp = require('request-promise');

const questionService = {

  postQuestion: (req, res, next) => {
    try {
      const headers = { headers: { authorization: req.get('authorization') } };
      console.log('headers in postQuestion--------', headers);
      const optionsAuthSvc = {
        method: 'POST',
        uri: 'http://auth-service.default.svc.cluster.local/api/auth',
        body: headers,
        json: true // Automatically stringifies the body to JSON
      };

      const options = {
        method: 'POST', 
        uri: 'http://question-service.default.svc.cluster.local/api/postQuestion',
        body: req.body,
        json: true // Automatically stringifies the body to JSON
    };
    return rp(optionsAuthSvc).then((authResponse) => { // call for authorization
      return rp(options).then((response) => {
            res.set('Content-Type', 'application/json');
            res.status(201).send(response);
          }).catch(err => {
            res.status(500).send({ statusCode: err.statusCode, msg: err.error.msg });
        })
      }).catch(err => {
        res.status(401).send({ statusCode: err.statusCode, msg: err.error.msg });
    })
    } catch (error) {
      next(error);
    }
  },

  getAllQuestions: (req, res, next) => {
    console.log('sending request from gateway to question service---------------');
    const options = {
      method: 'GET',
      uri: `http://question-service.default.svc.cluster.local/api/getAllQuestions`,
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

  searchQuestions: (req, res, next) => {
    const options = {
      method: 'GET',
      uri: `http://question-service.default.svc.cluster.local/api/searchQuestions`,
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

  addLikeToQuestion: (req, res, next) => {
    try {
      const headers = { headers: { authorization: req.get('authorization') } };
      console.log('headers in addLikeToQuestion--------', headers);
      const optionsAuthSvc = {
        method: 'POST',
        uri: 'http://auth-service.default.svc.cluster.local/api/auth',
        body: headers,
        json: true // Automatically stringifies the body to JSON
      };

      const options = {
        method: 'POST', 
        uri: 'http://question-service.default.svc.cluster.local/api/addLikeToQuestion',
        body: req.body,
        json: true // Automatically stringifies the body to JSON
    };
    return rp(optionsAuthSvc).then((authResponse) => {
      return rp(options)
          .then((response) => {
            res.set('Content-Type', 'application/json');
            res.status(201).send(response);
          }).catch(err => {
            res.status(500).send({ statusCode: err.statusCode, msg: err.error.msg });
        })
      }).catch(err => {
        res.status(401).send({ statusCode: err.statusCode, msg: err.error.msg });
    })
    } catch (error) {
      next(error);
    }
  },

  addDislikeToQuestion: (req, res, next) => {
    try {
      const headers = { headers: { authorization: req.get('authorization') } };
      console.log('headers addDislikeToQuestion---', headers);
      const optionsAuthSvc = {
        method: 'POST',
        uri: 'http://auth-service.default.svc.cluster.local/api/auth',
        body: headers,
        json: true // Automatically stringifies the body to JSON
      };
      const options = {
        method: 'POST', 
        uri: 'http://question-service.default.svc.cluster.local/api/addDislikeToQuestion',
        body: req.body,
        json: true // Automatically stringifies the body to JSON
    };
    return rp(optionsAuthSvc).then((authResponse) => {
      return rp(options)
          .then((response) => {
            res.set('Content-Type', 'application/json');
            res.status(201).send(response);
          }).catch(err => {
            res.status(500).send({ statusCode: err.statusCode, msg: err.error.msg });
        })
      }).catch(err => {
        res.status(401).send({ statusCode: err.statusCode, msg: err.error.msg });
    })
    } catch (error) {
      next(error);
    }
  },

}

module.exports = questionService;
