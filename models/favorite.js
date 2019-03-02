module.exports = (sequelize, Datatypes) => {
  const Favorite = sequelize.define("Favorite", {
    title: Datatypes.STRING
  });
  //   Favorite.associate = models => {
  //     models.Favorite.hasOne(models.Auth);
  //   };
  return Favorite;
};
