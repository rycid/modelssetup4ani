import { Sequelize, DataTypes } from "sequelize";

export default module.exports = (sequelize: Sequelize) => {
    const CommentLike = sequelize.define('CommentLike', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
    })
    console.log("CommentLike model initialized: ", CommentLike);
    return CommentLike;
};