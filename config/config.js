let CONFIG = {}; //Make this global to use all over the application

CONFIG.app = process.env.APP || "dev";
CONFIG.port = process.env.PORT || "3000";

CONFIG.db_dialect = process.env.DB_DIALECT || "mysql";
CONFIG.db_host = process.env.DB_HOST || "localhost";
CONFIG.db_port = process.env.DB_PORT || "3306";
CONFIG.db_name = process.env.DB_NAME || "dbname";
CONFIG.db_user = process.env.DB_USER || "user";
CONFIG.db_password = process.env.DB_PASSWORD || "password";

CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION || "key";
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || "3600";

module.exports = CONFIG;
