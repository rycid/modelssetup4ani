import { DataTypes, Sequelize } from "sequelize";
// import User from "./User";
// import Series from "./Series";

export default function (sequelize: Sequelize) {
    const SeriesFavorite = sequelize.define('SeriesFavorite', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    });
    // SeriesFavorite.belongsTo(User(sequelize), { foreignKey: 'user_id' });
    // SeriesFavorite.belongsTo(Series(sequelize), { foreignKey: 'series_id' });   
    console.log("SeriesFavorite model initialized: ", SeriesFavorite);
    return SeriesFavorite;
};