module.exports = {
  development: {
    username: "root",
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.password,
    database: "database_test",
    host: process.env.host,
    dialect: "mysql"
  },
  production: {
    useEnvVariable: "JAWSDB_URL",
    dialect: "mysql"
  },
  urlDevelopment: {
    useEnvVariable: "DB_URL",
    dialect: "mysql"
  }
};
