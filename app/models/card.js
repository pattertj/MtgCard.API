var mongoose = require('mongoose');

module.exports = mongoose.model('Card', {
    name: {
        type: String,
        default: ''
    },	
    manaCost: {
        type: String,
        default: ''
    },	
    cmc: {
        type: Number,
        default: ''
    },
    colorIdentity: {
        type: String,
        default: ''
    },
    artist: {
        type: String,
        default: ''
    },
    number: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    printings: {
        type: String,
        default: ''
    },
    flavor: {
        type: String,
        default: ''
    },
    layout: {
        type: String,
        default: ''
    },
    multiverseid: {
        type: Number,
        default: ''
    },
    power: {
        type: String,
        default: ''
    },
    toughness: {
        type: String,
        default: ''
    },
    rarity: {
        type: String,
        default: ''
    },
    subtypes: {
        type: String,
        default: ''
    },
    types: {
        type: String,
        default: ''
    }

});