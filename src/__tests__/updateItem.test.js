const axios = require('axios');

test('Testing the update item feature', async () => {

    const response = await axios.post('http://localhost:3333/items/update', {
        id: 1,
        item: 'rice',
        quantity: 5
    });

    expect(response.data.error).toBeFalsy();
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
})