import { DataTypes,Sequelize } from "sequelize";
// import User from "./User";
// import Series from "./Series";
// import Comment from "./Comment";
import Rating from "./Rating";
import Watchlist from "./Watchlist";
import Episode from "./Episode";
import SeriesFavorite from "./SeriesFavorite";

export default module.exports = (sequelize:Sequelize) => {
    const Series = sequelize.define('Series', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        themes: {
            type: DataTypes.ARRAY(DataTypes.STRING(32)),
        },
        status: {
            type: DataTypes.ENUM('Ongoing', 'Completed', 'Not Yet Aired'),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(128),
        },
        views: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        type: {
            type: DataTypes.ENUM('TV', 'Movie', 'OVA', 'ONA', 'Special', 'Music'),
            allowNull: false,
        },
        series_code: {
            type: DataTypes.STRING(16),
            unique: true,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        watchers: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        average_rating: {
            type: DataTypes.FLOAT,
        },
        release_start_date: {
            type: DataTypes.DATE,
        },
        release_end_date: {
            type: DataTypes.DATE,
        },
        age_rating: {
            type: DataTypes.ENUM('G', 'PG', 'PG-13', 'R', 'R+'),
        },
        studio: {
            type: DataTypes.STRING(32),
        },
        video_player_image: {
            type: DataTypes.STRING(128),
        }        
    });
    Series.hasMany(Episode(sequelize), {foreignKey: 'series_id', as: 'episodes'});
    Series.hasMany(Rating(sequelize), {foreignKey: 'series_id', as: 'ratings'});
    Series.belongsToMany(Watchlist(sequelize), {through: 'WatchlistSeries', foreignKey: 'series_id', as: 'watchlists'});
    Series.hasMany(SeriesFavorite(sequelize), {foreignKey: 'series_id', as: 'favorites'});
    console.log("Series model initialized: ", Series);
    return Series;
};

