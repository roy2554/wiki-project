const mongoose = require('mongoose')
const dbConfig = require('./db-config')

mongoose
.connect(dbConfig.connect.key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("[BACK] Connected to MongoDB")
})
.catch((err) => {
    console.error(err)
})
