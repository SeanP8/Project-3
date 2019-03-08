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
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true
      }
    }
    // }
    // hooks: {
    //   beforeCreate: auths => {
    //     auths.full_name = `${auths.first} ${auths.last}`;
    //   }
    // }
  });
  Auths.associate = model => {
    model.Auths.belongsToMany(model.Projects, {
      as: "SeeksFunding",
      through: "UserProjects"
    });
    // Foreign key of authId will be made in Favorite table
    model.Auths.hasOne(model.Favorite);
  };

  return Auths;
};
