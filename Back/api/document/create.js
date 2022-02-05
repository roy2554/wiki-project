const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const document = require('../../DataBase/model/documentModel');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', async(req, res) => {
    console.log("sssss")
    const newDocument = new document({
        document_id: req.body.document_id,
        title: req.body.title,
        content: req.body.content,
        authors: req.body.authors,
        changed: {}
    }).save((err, doc) => {
        if(err) {
            throw err
        } else {
            res.send(doc)
        }
    })
})

module.exports = router