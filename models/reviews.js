module.exports = function(sequelize, DataTypes) {
  const Review = sequelize.define("Review", {
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    comment: {
      type: DataTypes.TEXT,
      validate: {
        len: [1]
      }
    }
  });

  return Review;
};
