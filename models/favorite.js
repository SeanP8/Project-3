module.exports = (sequelize, Datatypes) => {

  const Favorite = sequelize.define(
    "Favorite",
    {
  //     title: Datatypes.STRING
  //   },

  //   {
  //     timestamps: false
  //   }
  // );
  //   Favorite.associate = models => {
  //     models.Favorite.hasOne(models.Auth);
  //   };
      userID : {
        type: Datatypes.STRING,
        allowNull: true,
        defaultValue: 1
      },
      ProjectID: {
        type: Datatypes.STRING,
        allowNull: true,
        defaultValue: 1
      }
    });
  return Favorite;
};
