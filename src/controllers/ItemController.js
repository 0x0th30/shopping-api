module.exports = {
    async storeItem (req, res) {
        const item = { 
            item: req.body.item, 
            quantity: req.body.quantity,
        };

        console.log(item);

        res.json(item);
    }
}