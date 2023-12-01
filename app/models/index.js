const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let config = require('../../config/db-config');
const Sequelize = require('sequelize');

const db = {};
let sequelize;
    sequelize = new Sequelize(config.database, config.username, config.password, config);
    sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });
db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.mongoose = mongoose;

// db.user = require("./user.model");
// db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];
db.User = require('./user.model')(sequelize, Sequelize);
db.Role = require('./role.model')(sequelize, Sequelize);
db.User.hasMany(db.Role, { foreignKey: 'userId', sourceKey: 'id' });
db.Expense = require('./expense.model')(sequelize, Sequelize);
db.User.hasMany(db.Expense, { foreignKey: 'userId', sourceKey: 'id' });
db.Income = require('./income.model')(sequelize, Sequelize);
db.User.hasMany(db.Income, { foreignKey: 'userId', sourceKey: 'id' });
db.Expenseplan = require('./expense_plan.model')(sequelize, Sequelize);
db.User.hasMany(db.Expenseplan, { foreignKey: 'userId', sourceKey: 'id' });
db.Incomeplan = require('./income_plan.model')(sequelize, Sequelize);
db.User.hasMany(db.Incomeplan, { foreignKey: 'userId', sourceKey: 'id' });

module.exports = db;


// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// const db = {};

// db.mongoose = mongoose;

// db.user = require("./user.model");
// db.role = require("./role.model");

// db.ROLES = ["user", "admin", "moderator"];

module.exports = db;