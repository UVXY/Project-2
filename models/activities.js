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
  activities.associate = function(models) {
    // We're saying that a activities should belong to an Clients
    // A activities can't be created without an Clients due to the foreign key constraint
    activities.belongsTo(models.clients, {
      foreignKey: "clientId"
    });
  };
  activities.create({
    gym: true,
    basketball: false,
    running: false,
    volleyball: true
  }).then(activities => {
    console.log(activities.foreignKey);
  });
  return activities;
};

// clients.belongsTo(activities);
