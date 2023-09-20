import { DataTypes, Sequelize } from "sequelize";
import User from "./User";

export default module.exports = (sequelize: Sequelize) => {
    const UserSetting = sequelize.define('UserSetting', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        notification_settings: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: {
                email: false,
                push: false,
                text: false,
                episode_release: false,
                series_update: false,
                series_recommendation: false,
                comment_reply: false,
                new_follower: false,
                new_message: false
            },
        },
        privacy_settings: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: {
                profile: "public",
                activity: "public",
                friends: "public",
                messaages: "public",
                comments: "public",
                reviews: "public",
                ratings: "public",
                watchlist: "public",
                favorites: "public",
                history: "public",
                stats: "public",
                social: "public",
            },
        },
        interface_settings: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: {
                hide_nsfw: false,
                hide_filler: false,
                hide_spoilers: false,
                hide_completed: false,
                hide_comments: false,
                hide_recommendations: false,
                hide_ratings: false,
                preferred_language: "en",
                preferred_player: "default",
                preferred_quality: "1080p",
                preferred_subtitle_language: "en",
                preferred_dub_language: "jp",
                preferred_theme: "default",
            }
        }
    })
    UserSetting.belongsTo(User(sequelize), { foreignKey: 'user_id' });
    console.log("UserSetting model initialized: ", UserSetting);
    return UserSetting;
};


        