const axios = require('axios');


function requireRoute () {
    const res = axios.post('http://localhost:3333/items', {
        item: 'energy drink',
        quantity: 5
    });

    return res;
} 


test('Testing add item route', async () => {
    const response = await requireRoute();
    expect(response.status).toBe(200);
})
