# ParcoursCS-back

Simple Backend with Sequelize models (mySQL) and passport authentification (JWTstrategy)

## Installation

1. Clone the repo
2. Change directory
3. Install dependencies: npm install
4. Write your database settings in config/config.json
5. in mysql shell : ALTER USER 'user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; FLUSH PRIVILEGES;
6. Migrate your database: node_modules/.bin/sequelize db:migrate
7. Start your server: npm start
8. View your app in browser.

This will start the application and create an sql database in your app directory.
