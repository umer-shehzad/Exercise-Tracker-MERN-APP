const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);

const connectMongo = async () => {
  const conn = await client.connect();
  return conn.db(process.env.MY_DB);
};


module.exports = connectMongo;