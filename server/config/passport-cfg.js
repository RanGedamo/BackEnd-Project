const keys = require('./keys-cfg');
const usersModel = require('../models/users-model');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {
    secretOrKey: keys.secretKey,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const passportJWT = (passport) => {
    passport.use(new JwtStrategy(options,(jwt_payload, done) => {
        // console.log("Jwt Payload: ", jwt_payload)
            usersModel.findById(jwt_payload.id)
                .then((user) => {
                    console.log("user found")
                    return done(null, user)
                })
                .catch(err => {
                    console.log(err)
                    return done(err, null)
                });
        })
    )
};


module.exports = passportJWT;
