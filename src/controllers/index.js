const Item = require('../models/Item');

module.exports = {
    async storeItem (req, res) {

        if(!req.body.item || !req.body.quantity) {
            return res.json({ 
                error: 'Missing arguments!' 
            });
        }

        let item = { 
            item: req.body.item, 
            quantity: req.body.quantity,
        };

        item = await Item.create(item);

        return res.json(item);
    },

    async viewCart(req, res) {
        const filters = req.query;

        try {
            const cart = await Item.findAll({
                where: filters
            });

            if(cart[0] == undefined || cart[0] == null && req.query) {
                return res.json({
                    error: 'Not available results to this search!'
                });
            }

            if(cart[0] == undefined || cart[0] == null) {
                return res.json({
                    message: 'Your cart is current empty!'
                })
            }
    
            return res.json(cart);
        }

        catch(err) {
            return res.json({
                error: 'Invalid search!'
            });
        }
    },

    async updateItem(req, res) {
        
        if(!req.body.id) {
            return res.json({
                error: 'Missing item id!'
            });
        }

        if(!req.body.item && !req.body.quantity) {
            return res.json({
                error: 'Nothing to update!'
            })
        }

        let item = {
            id: req.body.id,
            item: req.body.item,
            quantity: req.body.quantity,
        };

        const update = await Item.update({
            item: item.item,
            quantity: item.quantity,
        },
        {
            where: {
                id: item.id,
            }
        });

        item = await Item.findOne({
            where: {
                id: item.id
            }
        })

        if(item === null) {
            return res.json({
                error: "Not founded item!"
            })
        }

        return res.json(item);
    },

    async deleteItem(req, res) {
        const id = req.body.id;

        const item = await Item.destroy({
            where: {
                id: id
            }
        });

        return res.json(item);
    }
}