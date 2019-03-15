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
    fundLink: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    },
    authID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  Projects.associate = model => {
    model.Projects.belongsToMany(model.Auths, {
      as: "Contributers",
      through: "UserProjects"
    });
    model.Projects.hasMany(model.Review);
  };

  return Projects;
};
