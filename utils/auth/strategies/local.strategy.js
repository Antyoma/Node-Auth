const { Strategy } = require('passport-local');

const UserService = require('./../../../services/user.service');

const LocalStrategy = new Strategy((username, password, done) => {

});

module.exports = LocalStrategy;