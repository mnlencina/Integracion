const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      name:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      origin:{
         type: DataTypes.JSON,
         allowNull: false,
      },
      status:{
         type: DataTypes.ENUM("Alive", "Dead", "unknown"),
         allowNull: false,
      },
      image:{
         type: DataTypes.STRING,
      },
      species:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      gender:{
         type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
         allowNull: false,
      },
   }, { timestamps: false });
};