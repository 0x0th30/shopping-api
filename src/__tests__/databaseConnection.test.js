const { TestWatcher } = require('@jest/core');
const sequelize = require('../database');

test('Testing database connection', async () => {

    async function tryToConnect() {
        try {
            const connection = await sequelize.authenticate();
            return true;
        }
        catch(err) {
            return false;
        }
    }
    expect(await tryToConnect()).toBe(true);
});
