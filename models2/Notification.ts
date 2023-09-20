import { DataTypes,Sequelize } from "sequelize";
// import User from "./User";

export default module.exports = (sequelize:Sequelize) => {
    const Notification = sequelize.define('Notification', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING(128),
        },
        photo: {
            type: DataTypes.STRING(128),
        },
        is_read: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        expiration_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    })
    // Notification.belongsToMany(User(sequelize), { through: 'UserNotification' });
    console.log("Notification model initialized: ", Notification);
    return Notification;
};

