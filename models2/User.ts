import { DataTypes, Sequelize } from 'sequelize';
import Social from './Social';
import CommentLike from './CommentLike';
import CommentDislike from './CommentDislike';
import Comment from './Comment';
import UserSetting from './UserSetting';
import Watchlist from './Watchlist';
import Notification from './Notification';
import SeriesFavorite from './SeriesFavorite';

export default module.exports = (sequelize: Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(32),
            allowNull: false,
            unique: true,
        },
        display_name: {
            type: DataTypes.STRING(32),
            allowNull: true,
        },
        salt: {
            type: DataTypes.STRING(32),
            // allowNull: false,
        },
        password_hash: {
            type: DataTypes.STRING(128),
            // allowNull: false,
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true,
        },
        email_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        discord_id: {
            type: DataTypes.STRING(32),
            allowNull: true,
            unique: true,
        },
        twitter_id: {
            type: DataTypes.STRING(32),
            allowNull: true,
            unique: true,
        },
        facebook_id: {
            type: DataTypes.STRING(32),
            allowNull: true,
            unique: true,
        },
        google_id: {
            type: DataTypes.STRING(32),
            allowNull: true,
            unique: true,
        },
        profile_pic: {
            type: DataTypes.STRING(128),
            allowNull: true,
        },
        banner_pic: {
            type: DataTypes.STRING(128),
            allowNull: true,
        },
        bio: {
            type: DataTypes.STRING(256),
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING(64),
            allowNull: true,
        },
        timezone: {
            type: DataTypes.STRING(32),
            allowNull: true,
        },
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        join_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        last_login: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        last_username_change: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        is_online: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        last_online: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        is_premium: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_mod: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        watcher_exp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        watcher_tier: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        two_factor_auth_enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        two_factor_auth_secret: {
            type: DataTypes.STRING(32),
            allowNull: true,
        },
        two_factor_auth_backup_codes: {
            type: DataTypes.STRING(256),
            allowNull: true,
        },
        two_factor_auth_last_reset: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        is_suspended: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_banned: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        is_beta_tester: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        beta_tester_code: {
            type: DataTypes.STRING(32),
            allowNull: true,
        }       

    })
    User.hasMany(Social(sequelize), { foreignKey: 'user_id', as: 'socials' });
    User.hasMany(Notification(sequelize), { foreignKey: 'user_id', as: 'notifications' });
    User.belongsToMany(Comment(sequelize), { through: CommentLike(sequelize), as: 'likedComments' });
    User.belongsToMany(Comment(sequelize), { through: CommentDislike(sequelize), as: 'dislikedComments' });
    User.hasOne(UserSetting(sequelize), { foreignKey: 'user_id', as: 'settings' });
    User.hasOne(Watchlist(sequelize), { foreignKey: 'user_id', as: 'watchlist' });
    User.hasMany(SeriesFavorite(sequelize), { foreignKey: 'user_id', as: 'favorites' });
    // console.log("User model initialized: ", User);
    console.log("User model initialized.");
    return User;
};
