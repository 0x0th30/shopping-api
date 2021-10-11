const axios = require('axios');
const Item = require('../models/Item');
const connection = require('../database');

Item.init(connection);

test('Testing the update item feature', async () => {

    let baseItem = await axios.post('http://localhost:3333/items/create', {
        item: 'bread',
        quantity: 5
    });

    baseItem = baseItem.data;                       // { id: ..., item: red bull, quantity: 5 }

    let updatedItem = await axios.post('http://localhost:3333/items/update', {
        id: baseItem.id,
        item: 'cake',
        quantity: 1
    });

    if(!updatedItem.data.error) {
        let item = updatedItem.data;
        item = await Item.destroy({
            where: {
                id: baseItem.id
            }
        });
    }

    expect(updatedItem.data.error).toBeFalsy();
});

test('Testing update without pass id', async () => {

    const response = await axios.post('http://localhost:3333/items/update', {
        item: 'rice',
        quantity: 5
    });

    expect(response.data.error).toBeTruthy();
});

test('Testing without pass data to update', async () => {

    const response = await axios.post('http://localhost:3333/items/update', {
        id: 1
    });

    expect(response.data.error).toBeTruthy();
});