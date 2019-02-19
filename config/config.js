module.exports = {
  development: {
    username: "root",
    password: process.env.password,
    database: process.env.database,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.password,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    useEnvVariable: "JAWSDB_URL",
    dialect: "mysql"
  }
}
