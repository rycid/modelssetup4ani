import { DataTypes,Sequelize } from "sequelize";
import User from "./User";
import Series from "./Series";

export default module.exports = (sequelize:Sequelize) => {
    const Rating = sequelize.define('Rating', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        progress_at_rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        is_preliminary: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
        
    });
    Rating.belongsTo(User(sequelize), {foreignKey: 'user_id', as: 'user'});
    Rating.belongsTo(Series(sequelize), {foreignKey: 'series_id', as: 'series'})
  
    console.log("Rating model initialized: ", Rating);
    return Rating;
};

