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
      type: DataTypes.TEXT,
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
    Projects.belongsToMany(model.Auths, {
      foreignKey: {
        allowNull: false
      },
      as: "Funders",
      through: "FundingList"
    });
  };

  return Projects;
};
