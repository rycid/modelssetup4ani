import { DataTypes,Sequelize } from "sequelize";
import User from "./User";

export default module.exports = (sequelize:Sequelize) => {
    const Message = sequelize.define('Message', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        body: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        timeStamp: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_reported: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        
    })
    Message.belongsTo(User(sequelize), {foreignKey: 'sender_id', as: 'sender'});
    Message.belongsTo(User(sequelize), {foreignKey: 'receiver_id', as: 'receiver'});
    console.log("Message model initialized: ", Message);
    return Message;
};

