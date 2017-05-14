/**
 * Created by Julius Alvarado on 5/13/2017.
 */

var jwt = require('jwt-simple');

module.exports = function (req, res, next) {
    if (!req.headers.authorization) return handleError;

    var token = req.headers.authorization.split(' ')[1];

    var payload = jwt.decode(token, config.TOKEN_SECRET);

    if (!payload.sub) return handleError;

    req.userId = payload.sub;
    next();
};

function handleError() {
    return res.status(401).send({error: 'jha - Not Authorized'});
}