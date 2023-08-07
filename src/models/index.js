const EmailCode = require("./EmailCode.js");
const User = require("./User");

User.hasOne(EmailCode); //UserId
EmailCode.belongsTo(User);
