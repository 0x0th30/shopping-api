const { response } = require('express');
const Item = require('../models/Item');

module.exports = {
    async storeItem (req, res) {

        if(!req.body.item || !req.body.quantity) {
            return res.status(400).json({ error: 'Missing arguments!' })
        }

        let item = { 
            item: req.body.item, 
            quantity: req.body.quantity,
        };

        item = await Item.create(item);

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