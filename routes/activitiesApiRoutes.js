// var db = require("../models");
// require("sequelize");

// // possibility to add as a function
// function grabAndCompareUsers() {
//   db.ss.findAll({}).then(function(req, res) {
//     var bestMatch = {
//       name: "",
//       friendSum: Infinity
//     };

//     var userData = req.body;
//     var userScores = userData.score;

//     var totalSum;

//     for (var i = 0; i < clients.length; i++) {
//       var currentFriend = clients[i];
//       totalSum = 0;

//       console.log(currentFriend.name);

//       for (var j = 0; j < currentFriend.score.length; j++) {
//         var currentFriendScore = currentFriend.score[j];
//         var currentUserScore = userScores[j];

//         totalSum += Math.abs(
//           parseInt(currentUserScore) + parseInt(currentFriendScore)
//         );
//       }
//       if (totalSum <= bestMatch.friendSum) {
//         // Reset the bestMatch to be the new friend.
//         bestMatch.name = currentFriend.name;
//         bestMatch.photo = currentFriend.photo;
//         bestMatch.friendSum = totalSum;
//       }
//     }
//   });
// }

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/activities", function(req, res) {
//     var query = {};
//     if (req.query.clients_id) {
//       query.ClientsId = req.query.clients_id;
//     }
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Client
//     db.activities
//       .findAll({
//         where: query,
//         include: [db.Clients]
//       })
//       .then(function(dbActivities) {
//         res.json(dbActivities);
//       });
//   });
//   // Get route for retrieving a single activities
//   app.get("/api/activitiess/:id", function(req, res) {
//     db.activities
//       .findOne({
//         where: {
//           id: req.params.id
//         }
//       })
//       .then(function(dbActivities) {
//         console.log(dbActivities);
//         res.json(dbActivities);
//       });
//   });
//   // Create a new example
//   app.post("/api/activities", function(req, res) {
//     db.activities.create(req.body).then(function(dbActivities) {
//       // // Math.max(score array);
//       // sort descending values
//       // needs a nested update where this will update with a score
//       // db.client.findAll({}).then(function(req, res) {
//       db.clients
//         .update(
//           {
//             score: req.body.score
//           },
//           {
//             where: {
//               id: req.body.id
//             }
//           }
//         )
//         .then(function(dbActivities) {
//           db.activities.findAll({}).then(function(dbActivitiesArr) {
//             // score will be a badge on s. Then in front end, will connect users with sorting the score from biggest
//             // to smallest.
//             // for the find all, ensure i disenclued current s_id
//             var currentUser = {
//               gym: req.body.gym,
//               running: req.body.running,
//               volleyball: req.body.volleyball,
//             }
//             // initalizing score array for current user
//             var score = [];
//             // for loop or for each etc, to compare current users object to return array of objects
//             for (var i = 0; i < dbActivitiesArr.length; i++) {

//               var total = 0;
//               // need to define current user, which is their activities schema
//               if (currentUser.gym === true && dbActivitiesArr[i].gym === true) {
//                 total++;
//               }
//               if (
//                 currentUser.basketball === true &&
//                 dbActivitiesArr[i].basketball === true
//               ) {
//                 total++;
//               }
//               if (
//                 currentUser.running === true &&
//                 dbActivitiesArr[i].running === true
//               ) {
//                 total++;
//               }
//               if (
//                 currentUser.volleyball === true &&
//                 dbActivitiesArr[i].volleyball === true
//               ) {
//                 total++;
//               }
//               score.push(total);
//             }
//             res.json(dbActivities);
//             // Routes
//             // app.get("/:operation/:firstNum/:secondNum", function (req, res) {
//             // Parameters are received from the URL
//             // var operation = req.params.operation;
//             // // Parameters are converted to integers
//             // var firstNum = parseInt(req.params.firstNum);
//             // var secondNum = parseInt(req.params.secondNum);
//             // var result;
//             // Switch statement chooses operation based on the operation parameter.
//             // switch (operation) {
//             //   case "add":
//             //   case "+": // Bonus.  Example:  http://localhost:3002/+/6/4 --> 10
//             //     result = firstNum + secondNum;
//             //     break;
//             //   case "subtract":
//             //   case "-": // Bonus.  Example:  http://localhost:3002/-/6/4 --> 2
//             //     result = firstNum - secondNum;
//             //     break;
//             //   case "multiply":
//             //   case "*": // Bonus.  Example:  http://localhost:3002/*/3/4 --> 12
//             //     result = firstNum * secondNum;
//             //     break;
//             //   case "divide":
//             //   case "/": // Bonus.  This char has to be escaped in the url since slashes separate params
//             //     // Example:  http://localhost:3002/%2F/14/2 --> 7
//             //     result = firstNum / secondNum;
//             //     break;
//             //   default:
//             //     result =
//             //       "Sorry! The only valid operations are add, subtract, multiply, and divide.";
//             // }
//             // We return the result back to the user in the form of a string
//             //   res.send(result.toString());
//             // });
//           });

//           // res.json(dbActivities);
//         });
//     });
//   });
//   // Delete an example by id
//   app.delete("/api/activities/:id", function(req, res) {
//     db.activities
//       .destroy({
//         where: {
//           id: req.params.id
//         }
//       })
//       .then(function(dbActivities) {
//         res.json(dbActivities);
//       });
//   });
// };
