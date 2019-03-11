module.exports = {
  development: {
    username: "root",
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: process.env.dialect
  },
  test: {
    username: "root",
    password: process.env.password,
    database: "database_test",
    host: process.env.host,
    dialect: process.env.dialect
  },
  production: {
    useEnvVariable: "JAWSDB_URL",
    dialect: process.env.dialect
  },
  urlDevelopment: {
    useEnvVariable: "DB_URL",
    dialect: process.env.dialect
  }
};
