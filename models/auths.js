module.exports = function(sequelize, DataTypes) {
    var Auths = sequelize.define("Auths", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 240]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
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
            allowNull: true        },
        authModeID: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Auths;
}