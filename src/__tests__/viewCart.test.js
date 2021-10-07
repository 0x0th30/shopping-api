const axios = require('axios');

test('Testing the cart view feature', async () => {
    const response = await axios.get('http://localhost:3333/items/cart');

    expect(response.status).toBe(200);
})

