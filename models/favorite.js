// module.exports = (sequelize, Datatypes) => {
// const Favorite = sequelize.define(
//   "Favorite",
//   {
//     favorite: Datatypes.BOOLEAN
//   },

//   {
//     timestamps: false
//   }
// );
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define("Favorite", {
      // title: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   validate: {
      //     len: [1, 240]
      //   }
      // },
      // link: {
      //   type: DataTypes.STRING,
      //   allowNull: false
      // },
      // description: {
      //   type: DataTypes.TEXT,
      //   allowNull: false
      // },
      // image: {
      //   type: DataTypes.STRING
      // },

    projectID: {
      type: DataTypes.INTEGER
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  return Favorite;
};
