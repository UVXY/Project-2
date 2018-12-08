// //Import bcrypt which we need to secure passwords
// var Sequelize =require("sequelize");
// var bCrypt = require("bcrypt-nodejs");


// module.exports = function (passport, clients) {


//     var Clients = clients;

//     var LocalStrategy = require("passport-local").Strategy;

//     //serialize
//     passport.serializeUser(function (clients, done) {

//         done(null, clients.id);

//     });

//     // deserialize clients 
//     passport.deserializeUser(function (id, done) {

//         Clients.findById(id).then(function (clients) {

//             if (clients) {

//                 done(null, clients.get());

//             } else {

//                 done(clients.errors, null);

//             }

//         });

//     });


//     passport.use("local-signUp", new LocalStrategy(

//         {

//             usernameField: "email",

//             passwordField: "password",

//             passReqToCallback: true // allows us to pass back the entire request to the callback

//         },



//         function (req, email, password, done) {

//             var generateHash = function (password) {

//                 return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

//             };



//             Clients.findOne({
//                 where: {
//                     email: email
//                 }
//             }).then(function (user) {

//                 if (clients) {

//                     return done(null, false, {
//                         message: "That email is already taken"
//                     });

//                 } else {

//                     var clientsPassword = generateHash(password);

//                     var data =

//                     {
//                         email: email,

//                         password: clientsPassword,

//                         name: name

//                         // firstname: req.body.firstname,

//                         // lastname: req.body.lastname

//                     };

//                     Clients.create(data).then(function (newClients, created) {

//                         if (!newClients) {

//                             return done(null, false);

//                         }

//                         if (newClients) {

//                             return done(null, newClients);

//                         }

//                     });

//                 }

//             });

//         }

//     ));

//     //LOCAL SIGNIN
//     passport.use("local-login", new LocalStrategy(

//         {

//             // by default, local strategy uses username and password, we will override with email

//             usernameField: "email",

//             passwordField: "password",

//             passReqToCallback: true // allows us to pass back the entire request to the callback

//         },


//         function (req, email, password, done) {

//             var Clients = clients;

//             var isValidPassword = function (clientspass, password) {

//                 return bCrypt.compareSync(password, clientspass);

//             };

//             Clients.findOne({
//                 where: {
//                     email: email
//                 }
//             }).then(function (clients) {

//                 if (!clients) {

//                     return done(null, false, {
//                         message: "Email does not exist"
//                     });

//                 }

//                 if (!isValidPassword(clients.password, password)) {

//                     return done(null, false, {
//                         message: "Incorrect password."
//                     });

//                 }


//                 var clientsinfo = clients.get();
//                 return done(null, clientsinfo);


//             }).catch(function (err) {

//                 console.log("Error:", err);

//                 return done(null, false, {
//                     message: "Something went wrong with your sign in"
//                 });

//             });


//         }

//     ));

// };


//Import bcrypt which we need to secure passwords
var bCrypt = require("bcrypt-nodejs");


module.exports = function (passport, user) {


    var User = user;

    var LocalStrategy = require("passport-local").Strategy;

    //serialize
    passport.serializeUser(function (user, done) {

        done(null, user.id);

    });

    // deserialize user 
    passport.deserializeUser(function (id, done) {

        User.findById(id).then(function (user) {

            if (user) {

                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });

    });


    passport.use("local-signUp", new LocalStrategy(

        {

            usernameField: "email",

            passwordField: "password",

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },



        function (req, email, password, done) {

            var generateHash = function (password) {

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

            };



            User.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {

                if (user) {

                    return done(null, false, {
                        message: "That email is already taken"
                    });

                } else {

                    var userPassword = generateHash(password);

                    var data =

                    {
                        email: email,

                        password: userPassword,

                        firstname: req.body.firstname,

                        lastname: req.body.lastname,

                        basketball: req.body.basketball

                    };

                    User.create(data).then(function (newUser, created) {

                        if (!newUser) {

                            return done(null, false);

                        }

                        if (newUser) {

                            return done(null, newUser);

                        }

                    });

                }

            });

        }

    ));

    //LOCAL SIGNIN
    passport.use("local-login", new LocalStrategy(

        {

            // by default, local strategy uses username and password, we will override with email

            usernameField: "email",

            passwordField: "password",

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },


        function (req, email, password, done) {

            var User = user;

            var isValidPassword = function (userpass, password) {

                return bCrypt.compareSync(password, userpass);

            };

            User.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {

                if (!user) {

                    return done(null, false, {
                        message: "Email does not exist"
                    });

                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, {
                        message: "Incorrect password."
                    });

                }


                var userinfo = user.get();
                return done(null, userinfo);


            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: "Something went wrong with your sign in"
                });

            });


        }

    ));

};