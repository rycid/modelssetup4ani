import { DataTypes,Sequelize } from "sequelize";
import Series from "./Series";

export default module.exports = (sequelize:Sequelize) => {
    const DailyView = sequelize.define('DailyView', {
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
    DailyView.belongsTo(Series(sequelize), { foreignKey: 'series_id' });
    console.log("DailyView model initialized: ", DailyView);
    return DailyView;
};

