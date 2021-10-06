const Item = require('../models/Item');

module.exports = {
    async storeItem (req, res) {
        const item = { 
            item: req.body.item, 
            quantity: req.body.quantity,
        };

        const response = await Item.create(item);

        res.json(item);
    }
}