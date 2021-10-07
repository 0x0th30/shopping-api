const { Model, DataTypes } = require('sequelize');

class Item extends Model {
    static init (sequelize) {
        super.init({
            item: {
                type: DataTypes.STRING,
            },
            quantity: {
                type: DataTypes.INTEGER,
            },
        }, {
            sequelize,
        })
    }
}

module.exports = Item; 