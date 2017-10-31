import models from '../server/models';

const ResetHelper = {
  init() {
    console.log('Resetting the Database....Please wait...');
    models.sequelize.sync({
      force: true
    })
      .then(() => {
        console.log('Database reset completed');
        process.exit(0);
      });
  }
};

export default ResetHelper.init();
