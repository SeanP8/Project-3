module.exports = (sequelize, Datatypes) => {
  const Favorite = sequelize.define("Favorite", {
    AuthorId: {
      type: Datatypes.STRING,
      allowNull: false
    },
    ProjectId: {
      type: Datatypes.STRING,
      allowNull: false
    }
  });

  return Favorite;
};
