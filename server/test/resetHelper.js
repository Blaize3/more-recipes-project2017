/* eslint-disable */

const models = require('../server/models');

ResetHelper = {
    init() {
        console.log('Resetting the Database....Please wait...');
        models.sequelize.sync({
                force: true
            })
            .then(() => {
                console.log('Database reset completed');
                process.exit(0)
            });
    }
}

module.exports = ResetHelper.init();