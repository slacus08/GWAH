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
    // BlackCard.sync();
return BlackCard;
}
