const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DocumentSchema = new Schema({
    title: String,
    document_id: Number,
    content: Array,
    changed: Object,
    authors: Array,
    edit_permission: {
        type: Number,
        default: 0
    },
    doc_version: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Document = mongoose.model('documents', DocumentSchema)

module.exports = Document