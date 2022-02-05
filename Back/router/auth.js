const express = require('express')
const router = express.Router()
const passport = require('passport')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const User = require('../DataBase/model/userModel')

const INIT = require('../Auth/authorize')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.post('/login', (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err
        if (!user) res.send("User not found")
        else {
            req.logIn(user, (err) => {
                if (err) throw err
                res.send("User logged in")
                console.log(`[${new Date()}] User logged in: ${user.username}`)
            })
        }
    })(req, res, next)
})

router.post('/register', async(req, res) => {
    User.findOne({ username: req.body.username }, async(err, user) => {
        if(err) {
            throw err
        } else if (user) {
            res.send("User Already Exists")
        } else if (!user) {
            const EncrypedPassword = await bcrypt.hashSync(req.body.password, 10)
            new User({
                username: req.body.username,
                password: EncrypedPassword,
                email: req.body.email,
                permission: 0,
                avatar: ""
            }).save((err, user) => {
                if(err) {
                    throw err
                } else {
                    console.log("User Created")
                }
            })
        }
    })
})

router.get('/user', (req, res) => {
    if (req.user) {
        res.send([true, req.user])
    } else {
        res.send([false, null])
    }
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router