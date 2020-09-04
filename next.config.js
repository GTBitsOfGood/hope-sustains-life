const withImages = require("next-images");
const dotEnv = require("dotenv");

const prod = process.env.NODE_ENV === "production";

if (!prod) {
  dotEnv.config();
}

module.exports = withImages({
  env: {
    PROD_URL: process.env.PROD_URL,
    MONGO_DB: process.env.MONGODB,
    JWT_SECRET: process.env.JWTSECRET,
  },
  build: {
    env: {
      PROD_URL: process.env.PROD_URL,
      MONGO_DB: process.env.MONGODB,
      JWT_SECRET: process.env.JWTSECRET,
    },
  },
});
