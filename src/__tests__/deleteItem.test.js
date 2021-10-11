const axios = require('axios');
const Item = require('../models/Item');
const connection = require('../database');

Item.init(connection);

test('Testing the delete item feature', async () => {
    let createdItem = await axios.post('http://localhost:3333/items/create', {
        item: 'potato',
        quantity: 5
    });

    createdItem = createdItem.data;

    const item = await axios.post('http://localhost:3333/items/delete', {
        id: createdItem.id
    });

    expect(item.data.error).toBeFalsy();
});

test('Testing to delete a item without passing id', async () => {
    const item = await axios.post('http://localhost:3333/items/delete');

    expect(item.data.error).toBeTruthy();
})