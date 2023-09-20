import { Sequelize, DataTypes } from "sequelize";

export default module.exports = (sequelize: Sequelize) => {
    const CommentDislike = sequelize.define('CommentDislike', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
    })
    console.log("CommentDislike model initialized: ", CommentDislike);
    return CommentDislike;
};