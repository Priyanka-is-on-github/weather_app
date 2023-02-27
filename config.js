const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  API_KEY: process.env.API_KEY,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD
};
