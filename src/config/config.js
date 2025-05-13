module.exports = {
  development: {
    username: process.env.DATABASE_USER || "user",
    password: process.env.DATABASE_PASSWORD || "password",
    database: process.env.DATABASE_NAME || "crm",
    host: process.env.DATABASE_HOST || "mysql",
    dialect: process.env.DATABASE_DIALECT || "mysql",
  },
};
