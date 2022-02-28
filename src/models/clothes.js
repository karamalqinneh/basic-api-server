const Clothes = (sequelize, dataTypes) =>
  sequelize.define("clothes", {
    top: {
      type: dataTypes.STRING,
      // allowNull: false,
    },
    bottoms: {
      type: dataTypes.STRING,
      // allowNull: false,
    },
    eyeWear: {
      type: dataTypes.STRING,
    },
    shoes: {
      type: dataTypes.STRING,
    },
    headWaer: {
      type: dataTypes.STRING,
    },
  });

module.exports = Clothes;
