const { response } = require('express');
const Item = require('../models/Item');

module.exports = {
    async storeItem (req, res) {
        const item = { 
            item: req.body.item, 
            quantity: req.body.quantity,
        };

        const response = await Item.create(item);

        res.json(item);
    },

    async viewCart(req, res) {
        const filters = req.query;

        const cart = await Item.findAll({
            where: filters
        });

        res.json(cart);
    }
}