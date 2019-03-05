module.exports = function(sequelize, DataTypes) {

  var Auths = sequelize.define("Auths", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 240]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 240]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
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
        password: {
            type: DataTypes.STRING,
            allowNull: true
        }
  });
  Auths.associate = model => {
    Auths.belongsToMany(model.Projects, {
      as: "Funding",
      through: "FundingList",
      onDelete: "cascade"

    });
  };
  return Auths;
};
