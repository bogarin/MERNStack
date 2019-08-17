require("dotenv/config");
module.exports = {
  port: process.env.PORT || 3000,
  urlmongodb: process.env.MONGO_URL || "localhost:27017/",
  namedb: process.env.MONGO_NAMEDB || "dbsistema"
};
