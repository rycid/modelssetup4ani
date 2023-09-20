import { DataTypes, Sequelize } from "sequelize";
import User from "./User";
import Episode from "./Episode";

export default module.exports = (sequelize: Sequelize) => {
    const EpisodeReport = sequelize.define('EpisodeReport', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        resolved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    })
    EpisodeReport.belongsTo(User(sequelize), { foreignKey: 'user_id' });
    EpisodeReport.belongsTo(Episode(sequelize), { foreignKey: 'episode_id' });
    console.log("Report model initialized: ", EpisodeReport);
    return EpisodeReport;
};