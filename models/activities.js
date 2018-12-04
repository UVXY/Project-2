module.exports = function(sequelize, DataTypes) {
  var activities = sequelize.define("activities", {
    gym: {
      type: DataTypes.BOOLEAN
    },
    basketball: {
      type: DataTypes.BOOLEAN
    },
    running: {
      type: DataTypes.BOOLEAN
    },
    volleyball: {
      type: DataTypes.BOOLEAN
    }
  });
  return activities;
};

// client.belongsTo(activities);
