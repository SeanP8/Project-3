module.exports = function(sequelize, DataTypes) {
  const Review = sequelize.define("Review", {
    the_review: {
      type: DataTypes.TEXT,
      validate: {
        len: [1]
      }
    },
    project: {
      type: DataTypes.INTEGER
    }
  });
  return Review;
};
