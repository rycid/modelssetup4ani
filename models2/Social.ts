import { Sequelize, DataTypes } from "sequelize";
// import User from "./User";

export default module.exports = (sequelize: Sequelize) => {
    const Social = sequelize.define('Social', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        platform: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        handle: {
            type: DataTypes.STRING(48),
            allowNull: false,
        },
        hidden: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    })
    // Social.belongsTo(User(sequelize), {foreignKey: 'user_id', as: 'user'});
    console.log("Social model initialized: ", Social);
    return Social;
};