module.exports = function(sequelize, Sequelize) {
    var BlackCard = sequelize.define('blackCard', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        text: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });

return BlackCard;
}

// BlackCard.build({text: 'In the seventh circle of Hell, sinners must endure ____ for all eternity.'}).then(function(blackCard) {
//   blackCard.save().catch(error => {
//     console.log('ERROR!');
//   });
// });

// const blackCard = BlackCard.create({ text: 'In the seventh circle of Hell, sinners must endure ____ for all eternity.'}).then(blackCard => {
//   // let's assume the default of isAdmin is false:
//   console.log(blackCard.get({
//     plain: true
//   })) // => { username: 'barfooz', isAdmin: false }
// });


// module.exports = function(sequelize, Sequelize) {
//     var BlackCard = sequelize.build({ text:'In the seventh circle of Hell, sinners must endure ____ for all eternity.'}).then(function(task) {
//       task.save()
//       task.catch(error=> {
//         console.log('oops error!');
//       });
//     });
//   };
