module.exports = function(sequelize, DataTypes) {
    //Burger object created to interact with the DB
    var seqBurger = sequelize.define("seqBurger", {

        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return seqBurger;
};