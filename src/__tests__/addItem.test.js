const axios = require('axios');
const Item = require('../models/Item');
const connection = require('../database');

Item.init(connection);

test('Testing item addition route availability', async () => {
    const testAvailability = await axios.post('http://localhost:3333/items/create', {
        item: 'red bull',
        quantity: 5
    });

    if(!testAvailability.data.error) {
        let item = testAvailability.data;
        item = await Item.destroy({
            where: {
                id: item.id,
            }
        });
    }

    expect(testAvailability.data.error).toBeFalsy();
})

test('Testing null body post request', async () => {
    const testNullBody  = await axios.post('http://localhost:3333/items/create');

    expect(testNullBody.data.error).toBeTruthy();
});