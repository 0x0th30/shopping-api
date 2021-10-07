const axios = require('axios');
const Item = require('../models/Item');
const connection = require('../database');

Item.init(connection);

test('Testing item addition route availability', async () => {
    const testAvailability = await axios.post('http://localhost:3333/items/create', {
        item: 'energy drink',
        quantity: 5
    });

    expect(testAvailability.status).toBe(200);
})

test('Testing database insert feature', async () => {
    let item = {
        item: 'energy drink',
        quantity: 5
    }

    item = await Item.create(item);
})