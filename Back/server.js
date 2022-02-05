const express = require('express')
const app = express()

const server_config = require('./server-config')

const passport = require('passport')
const cookieSession = require('cookie-session')

const dataBase = require('./DataBase/database')

const Auth = require('./router/auth')
const Api = require('./router/api')

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [server_config.session.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', Auth)
app.use('/api', Api)

const port = process.env.PORT || 5000
app.listen(port, () => console.log("[BACK] Server is Listening on Port " + port))