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
    },
    // primaryKey: (id)
  });
  clients.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    clients.hasOne(models.activities, {
      onDelete: "cascade"
    });
    // call clients id in public js like author
  };
  clients.create({
    email: "user@user.com",
    name: "Juan",
    password: "password1"
  }).then(clients => {
    console.log(clients.get('email'));
    console.log(clients.get('name'));
  });
  return clients;
};
