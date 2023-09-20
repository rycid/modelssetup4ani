import { DataTypes,Sequelize } from "sequelize";
import User from "./User";
import Series from "./Series";

export default module.exports = (sequelize:Sequelize) => {
    const Watchlist = sequelize.define('Watchlist', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        status: {
            type: DataTypes.ENUM('watching', 'completed', 'onhold', 'dropped', 'planned'),
            allowNull: false,
            defaultValue: 'watching',
        },
        progress: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }
        
    })
    Watchlist.belongsTo(User(sequelize), {foreignKey: 'user_id'});
    Watchlist.belongsToMany(Series(sequelize), {through: 'WatchlistSeries', foreignKey: 'watchlist_id', as: 'series'});
    console.log("BadgWatchliste model initialized: ", Watchlist);
    return Watchlist;
};

