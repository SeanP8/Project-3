module.exports = function(sequelize, DataTypes) {
  var Auths = sequelize.define("Auths", {
    firstName: DataTypes.STRING,

    full_name: DataTypes.STRING,

    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 240]
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 240]
      }
    },
    authMode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    authModeID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING
    }
  });
  Auths.associate = model => {
    model.Auths.belongsToMany(model.Projects, {
      as: "SeeksFunding",
      through: "UserProjects",
      onDelete: "cascade"
    });
    Auths.hasOne(model.Favorite);
  };

  return Auths;
};
