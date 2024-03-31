import PropTypes from "prop-types"
import css from "./Profile.module.css";

function Profile({
    
        name,
        tag,
        location,
        avatar,
        stats: { followers, views, likes },
       
}) {
    return (
        <div className={css.card}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={css.avatar}
                />
                <p className={css.userName}>{name}</p>
                <p className={css.userInfo}>@{tag}</p>
                <p className={css.userInfo}>{location}</p>
            </div>

            <ul className={css.statsList}>
                <li className={css.statsItem}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}> {followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}> {views}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}> {likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.proptypes = {
    userName: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
};
    
export default Profile;