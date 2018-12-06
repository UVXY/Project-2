module.exports = function(sequelize, DataTypes) {
  var clients = sequelize.define("clients", {
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
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  clients.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    clients.hasMany(models.activities, {
      onDelete: "cascade"
    });
    // call clients id in public js like author
  };
  return clients;
};
