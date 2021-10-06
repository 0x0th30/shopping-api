const axios = require('axios');

test('Testing item addition route availability', async () => {
    const testAvailability = await axios.post('http://localhost:3333/items/create', {
        item: 'energy drink',
        quantity: 5
    });

    expect(testAvailability.status).toBe(200);
})
