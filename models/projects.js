module.exports = function(sequelize, DataTypes) {
  var Projects = sequelize.define("Projects", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 240]
      }
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
    },
    authID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Projects.associate = model => {
    model.Projects.belongsToMany(model.Auths, {
      as: "Funders",
      through: "FundingList"
    });
  };

  return Projects;
};
