const CONFIG = require("./config");

module.exports = {
  development: {
    username: CONFIG.db_user,
    password: CONFIG.db_password,
    database: CONFIG.db_name,
    host: CONFIG.db_host,
    dialect: CONFIG.db_dialect,
    operatorsAliases: false
  },
  production: {
    username: CONFIG.db_user,
    password: CONFIG.db_password,
    database: CONFIG.db_name,
    host: CONFIG.db_host,
    dialect: CONFIG.db_dialect,
    operatorsAliases: false
  }
};
