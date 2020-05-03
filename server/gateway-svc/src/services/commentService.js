// const request = require('request');
const rp = require('request-promise');

const commentService = {

  postComment: (req, res, next) => {
    try {
      const headers = { headers: { authorization: req.get('authorization') } };
      console.log('headers in postComment--------', headers);
      const optionsAuthSvc = {
        method: 'POST',
        uri: 'http://auth-service.default.svc.cluster.local/api/auth',
        body: headers,
        json: true // Automatically stringifies the body to JSON
      };

      const options = {
        method: 'POST', 
        uri: 'http://question-service.default.svc.cluster.local/api/postComment',
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

  getAllComments: (req, res, next) => {
    console.log(' from gateway to question service -req.params.questionId---------------', req.params.questionId);
    const options = {
      method: 'GET',
      uri: `http://question-service.default.svc.cluster.local/api/getAllComments/${req.params.questionId}`,
      json: true // Automatically stringifies the body to JSON
    };
    try {
      return rp(options)
        .then((response) => {
          console.log('response from ques-svc to gateway-----', response);
          res.set('Content-Type', 'application/json');
          res.status(200).send(response);
        }).catch(err => {
          res.status(500).send({ statusCode: err.statusCode, msg: err.error.msg });
      })
    } catch (error) {
      next(error);
    }
  },

  addLikeToComment: (req, res, next) => {
    try {
      const headers = { headers: { authorization: req.get('authorization') } };
      console.log('headers in addLikeToComment--------', headers);
      const optionsAuthSvc = {
        method: 'POST',
        uri: 'http://auth-service.default.svc.cluster.local/api/auth',
        body: headers,
        json: true // Automatically stringifies the body to JSON
      };

      const options = {
        method: 'POST', 
        uri: 'http://question-service.default.svc.cluster.local/api/addLikeToComment',
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

  addDislikeToComment: (req, res, next) => {
    try {
      const headers = { headers: { authorization: req.get('authorization') } };
      console.log('headers in addDislikeToComment--------', headers);
      const optionsAuthSvc = {
        method: 'POST',
        uri: 'http://auth-service.default.svc.cluster.local/api/auth',
        body: headers,
        json: true // Automatically stringifies the body to JSON
      };
      const options = {
        method: 'POST', 
        uri: 'http://question-service.default.svc.cluster.local/api/addDislikeToComment',
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

module.exports = commentService;
