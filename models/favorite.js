module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define("Favorite", {
    projectID: {
      type: DataTypes.INTEGER
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Favorite;
};
