const User = (sequelize, dataTypes) =>
  sequelize.define("people", {
    firstName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
    },
    phoneNumber: {
      type: dataTypes.INTEGER,
    },
  });

module.exports = User;
