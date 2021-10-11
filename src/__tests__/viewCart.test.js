const axios = require('axios');
const Item = require('../models/Item');
const connection = require('../database');

Item.init(connection);

test('Testing the cart view feature', async () => {
    const response = await axios.get('http://localhost:3333/items/cart');

    expect(response.data.error).toBeFalsy();
})

test('Testing search by an invalid id', async () => {
    let total = await Item.count();                // number of rows in our table
    total++                                        // to get an invalid id

    const response = await axios.get(`http://localhost:3333/items/cart?id=${total}`);

    expect(response.data.error).toBeTruthy()
})

test('Testing search by an invalid item', async () => {
    const response = await axios.get('http://localhost:3333/items/cart?item=not-exists');

    expect(response.data.error).toBeTruthy();
})