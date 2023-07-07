const dotenv = require('dotenv');
//dotenv allows us to have environment variables

dotenv.config();

const config = {
    PORT: process.env.PORT,
    databaseUrl: process.env.DATABASE_URL
}
//config object. looks into .env file to determine port and looks into env file to determine database url

module.exports = config;