module.exports = function(sequelize, DataTypes) {
  const Review = sequelize.define("Review", {
    the_review: DataTypes.STRING
  });
  return Review;
};
