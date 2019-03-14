module.exports = (sequelize, Datatypes) => {
  const Favorite = sequelize.define(
    "Favorite",
    {
      favorite: Datatypes.BOOLEAN
    },

    {
      timestamps: false
    }
  );

  return Favorite;
};
