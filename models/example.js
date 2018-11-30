module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    activity: {
      type: DataTypes.ENUM,
      values: ["Gym", "Basketball", "Football", "Soccer"]
    },
    level: {
      type: DataTypes.ENUM,
      values: ["Beginner", "Intermediate", "Expert"]
    }
    // latitude: {
    //   type: DataTypes.INT
    // }
  });
  return User;
};
