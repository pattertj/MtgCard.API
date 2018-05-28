var card = require('../models/card');

module.exports = function (app) {

    app.disable('etag');

    // get a card by name
    app.get('/api/cards/:name', function (req, res) {
        var name = '^' + req.params.name + '$';

        card.findOne({
            'name': {
                '$regex': name,
                $options: 'i'
            }
        }, function (err, card) {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            }

            res.json(card);
        })
    });
};