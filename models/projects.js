module.exports = function(sequelize, DataTypes) {
  var Projects = sequelize.define("Projects", {
    // title: DataTypes.STRING
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   validate: {
    //     len: [1, 240]
    //   }
    // },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
    // ,
    //   authID: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    //   }
    // }
    // ,
    // {
    //   timestamps: false
  });

  Projects.associate = model => {
    model.Projects.belongsToMany(model.Auths, {
      as: "Contributers",
      through: "UserProjects"
    });
    model.Projects.hasMany(model.Review, { as: "All_Reviews" });
  };

  return Projects;
};
