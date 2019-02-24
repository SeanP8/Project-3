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
            allowNull: false,
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
        }
    });
    return Auths;
}