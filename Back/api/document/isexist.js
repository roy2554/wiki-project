const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const document = require('../../DataBase/model/documentModel');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/:id', async(req, res) => {
    console.log(req.params)
    if (req.params.id == 'home') {
        req.params.id = 1
    }
    const doc = await document.findOne({ document_id: req.params.id })
    console.log(doc)
    if (doc) {
        res.send([true, doc])
    } else {
        res.send([false, null])
    }
    // await document.findOne({ document_id: Number(req.params.id) }, async(err, user) => {
    //     if (err) throw err
    //     if (user) {
    //         res.send(true)
    //     } else {
    //         res.send(false)
    //     }
    // })
})

module.exports = router