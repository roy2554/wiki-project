const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const User = require('../DataBase/model/userModel')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})

passport.use(
    new localStrategy(
        function(username, password, done) {
            User.findOne({ username: username }, function(err, user) {
                if(err) {
                    return done(err)
                }
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err
                    if (result) {
                        return done(null, user)
                    } else {
                        return done(null, false)
                    }
                })
            })
        }
    )
)