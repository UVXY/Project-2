module.exports = function (sequelize, Sequelize) {

  var user = sequelize.define("user", {

    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    firstname: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    lastname: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    basketball: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    volleyball: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    swimming: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    gym: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    tennis: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    soccer: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    yoga: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    biking: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    running: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
        len: [1]
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
<<<<<<< HEAD
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
      // foreignKey: "clientId",
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
=======
    }
    // score: {
    //     type: Sequelize.INTEGER,
    //     allowNull: true
    // }


>>>>>>> b68b63c8af534a84d7ad728a354633185ef7e598
  });
  // user.associate = function (models) {
  //     // Associating Author with Posts
  //     // When an Author is deleted, also delete any associated Posts
  //     user.hasOne(models.activities, {
  //         onDelete: "cascade"
  //     });
  //     // call user id in public js like author
  // };
  // user.create({
  //     email: "user@user.com",
  //     firstname: "Juan",
  //     lastname: "last",
  //     password: "password1"
  // }).then(user => {
  //     console.log(user.get("email"));
  //     console.log(user.get("firstname"));
  //     console.log(user.get("lastname"));
  // });
  return user;
};
