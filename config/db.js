const mongoose = require('mongoose');
const { uri } = require('./config');

const options = { useNewUrlParser: true };

const dbConn = {
  connectDB() {
    mongoose.Promise = Promise;
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.connect(uri, options, () => console.log('db connected')).catch(console.log);
  },
  disconnectDB() {
    mongoose.disconnect(() => console.log('db disconnected'));
  }
};

module.exports = { dbConn };
