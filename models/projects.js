module.exports = function(sequelize, DataTypes) {
  var Projects = sequelize.define("Projects", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 240]
      }
    },
    link: {
      type: DataString.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataString.STRING,
    },
    authID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Projects.associate = Model => {
    Model.Projects.belongsToMany(Model.Auths, {
      as: "Funders",
      through: "FundingList"
    });
  };

  return Projects;
};
