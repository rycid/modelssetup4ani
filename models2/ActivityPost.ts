import { DataTypes, Sequelize } from 'sequelize';
import User  from './User';


export default module.exports = (sequelize: Sequelize) => {
    const ActivityPost = sequelize.define('ActivityPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date_modified: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        is_reply: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        parent_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        is_edited: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        is_spoiler: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        is_pinned: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        is_locked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        reports: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        approved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        approved_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        date_approved: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        is_hidden: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    });
    ActivityPost.belongsTo(User(sequelize), {foreignKey: 'user_id', as: 'author'});  
    console.log("ActivityPost model initialized: ", ActivityPost);
    return ActivityPost;
};
 