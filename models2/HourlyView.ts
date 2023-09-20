import { DataTypes,Sequelize } from "sequelize";
import Series from "./Series";

export default module.exports = (sequelize:Sequelize) => {
    const HourlyView = sequelize.define('HourlyView', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        view_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    });
    HourlyView.belongsTo(Series(sequelize), { foreignKey: 'series_id' });
    console.log("HourlyView model initialized: ", HourlyView);
    return HourlyView;
};

