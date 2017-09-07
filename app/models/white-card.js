module.exports = function(sequelize, Sequelize) {
    var WhiteCards = sequelize.define('whiteCards', {
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

return WhiteCards;
}
