import { DataTypes,Sequelize } from "sequelize";

export default module.exports = (sequelize:Sequelize) => {
    const Genre = sequelize.define('Genre', {
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
        },
        image: {
            type: DataTypes.STRING(128),
        },
        
    })
    console.log("Genre model initialized: ", Genre);
    return Genre;
};

