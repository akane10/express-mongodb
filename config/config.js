// eslint-disable-next-line import/no-extraneous-dependencies
const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  uri: process.env.URI,
  secretkey: process.env.SECRETKEY
};
