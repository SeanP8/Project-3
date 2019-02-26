module.exports = function(sequelize, DataTypes) {
    var googleAuths = sequelize.define("googleAuths", {
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
        googleAuthMode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        googleAuthModeID: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return googleAuths;
}