module.exports = function(sequelize, DataTypes) {
  var Projects = sequelize.define("Projects", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 240]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    authID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Projects.associate = Model => {
    Model.car.belongsToMany(Model.Auths, {
      as: "Funders",
      through: "FundingList"
    });
  };

  return Projects;
};
