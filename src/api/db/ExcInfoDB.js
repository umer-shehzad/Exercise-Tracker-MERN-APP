const connectMongo = require("./utils/MongoUtils");
const dotenv = require('dotenv');

dotenv.config();

const insertPost = (dataInput) => {
  return connectMongo().then(async db => {
    const connection = await db.collection(process.env.Collection);

    try {
      await connection.insertOne(dataInput);
      console.log("1 document inserted");
    } catch (e) {
       throw e;
    } finally {
      const posts = await getAllPosts();
      return posts;
    }
  });
};

const getAllPosts = ()  => {
  return connectMongo().then(async db => {
      const connection = await db.collection(process.env.Collection);
      const results = connection.find({}).limit(50).toArray();

      return results;
  });
}


module.exports = {
  insertPost,
  getAllPosts
};