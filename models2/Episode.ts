import { DataTypes,Sequelize } from "sequelize";
import Series from "./Series";

export default module.exports = (sequelize:Sequelize) => {
    const Episode = sequelize.define('Episode', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
        episode_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        views: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        average_rating: {
            type: DataTypes.FLOAT,
        },
        shares: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        reports: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        release_date: {
            type: DataTypes.DATE,
        },
        is_filler: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_nsfw: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        intro_timestamp: {
            type: DataTypes.INTEGER,
        },
        outro_timestamp: {
            type: DataTypes.INTEGER,
        },
        intro_length: {
            type: DataTypes.INTEGER,
            defaultValue: 90,
        },
        outro_length: {
            type: DataTypes.INTEGER,
            defaultValue: 90,
        },
        video_url: {
            type: DataTypes.STRING(256),
            allowNull: false,
        },
        has_dub: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        scraped_url: {
            type: DataTypes.STRING(256),
            allowNull: false,
        },
        is_dead_link: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    })
    // Episode.belongsTo(Series(sequelize), { foreignKey: 'series_id' as 'series'});
    console.log("Episode model initialized: ", Episode);
    return Episode;
};

