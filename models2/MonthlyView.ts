import { DataTypes,Sequelize } from "sequelize";
import Series from "./Series";

export default module.exports = (sequelize:Sequelize) => {
    const MonthlyView = sequelize.define('MonthlyView', {
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
    MonthlyView.belongsTo(Series(sequelize), { foreignKey: 'series_id' });
    console.log("MonthlyView model initialized: ", MonthlyView);
    return MonthlyView;
};

