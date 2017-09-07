module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define('user', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        username: {
            type: Sequelize.TEXT

        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        }

    });
    return User;
}
//
// module.exports = function(sequelize, Sequelize){
//   var Tally = sequelize.define ('tally', {
//     id: {
//       autoIncrement: true,
//       primaryKey: true,
//       type: Sequelize.INTEGER
//     },
//     wins: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     }
//     losses: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     }
//   });
//   return Tally;
// }
