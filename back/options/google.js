const GoogleStrategy = require('passport-google-oauth20').Strategy
require('dotenv').config()

const strategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
}, 
function (accessToken, refreshToken, profile, cb) {
    console.log('hemos recibido datos de Google')
    return cb(null, profile)
})

module.exports = strategy