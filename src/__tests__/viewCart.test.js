const axios = require('axios');

test('Testing the cart view feature', async () => {
    const response = await axios.get('http://localhost:3333/items/cart');

    expect(response.status).toBe(200);
})

test('Testing search by an invalid id', async () => {
    const response = await axios.get('http://localhost:3333/items/cart?id=1000');

    expect(response.data.error).toBeTruthy()
})

test('Testing search by an invalid item', async () => {
    const response = await axios.get('http://localhost:3333/items/cart?item=not-exists');

    expect(response.data.error).toBeTruthy();
})