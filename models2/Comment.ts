import { DataTypes,Sequelize } from "sequelize";
import User from "./User";

import Episode from "./Episode";
import CommentLike from "./CommentLike";
import CommentDislike from "./CommentDislike";

export default module.exports = (sequelize:Sequelize) => {
    const Comment = sequelize.define('Comment', {
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
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        dislikes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        reports: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        is_reply: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_edited: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_spoiler: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_pinned: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_locked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    });
    Comment.belongsTo(User(sequelize), { foreignKey: 'user_id' as 'author'});
    Comment.belongsTo(Comment, { as: 'parent', foreignKey: 'parent_id' });
    // Comment.hasMany(Comment, { as: 'child_comments', foreignKey: 'child_id' });
    Comment.belongsToMany(User(sequelize), { through: CommentLike(sequelize), as: 'likingUsers' });
    Comment.belongsToMany(User(sequelize), { through: CommentDislike(sequelize), as: 'dislikingUsers' });
    Comment.belongsTo(Episode(sequelize), { foreignKey: 'episode_id' as 'episode'});
    console.log("Comment model initialized: ", Comment);
    return Comment;
};

