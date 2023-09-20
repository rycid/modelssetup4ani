import { DataTypes,Sequelize } from "sequelize";
import User from "./User";

export default module.exports = (sequelize:Sequelize) => {
    const Badge = sequelize.define('Badge', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(32),
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        infoURL: {
            type: DataTypes.STRING(128),
        },
    })
    Badge.belongsToMany(User(sequelize), { through: 'UserBadge' });
    console.log("Badge model initialized: ", Badge);
    return Badge;
};

