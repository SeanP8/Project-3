module.exports = function(sequelize, DataTypes) {
  var Auths = sequelize.define("Auths", {
    // name: DataTypes.JSON,
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    full_name: DataTypes.STRING,

    email: {
      type: DataTypes.JSON,
      validate: {
        isEmail: true
      }
    },
    email: {
      type: DataTypes.JSON,
      validate: {
        isEmail: true
      }
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 240]
      }
    },
    authMode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    authModeID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // password: {
    //   type: DataTypes.JSON
    //   // validate: {
    //   //   isAlphanumeric: true
    //   // }
    // }
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
