import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = friends => {
  const {
    avatar = 'https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png',
    name,
    isOnline,
  } = friends;

  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${isOnline ? css.isOnline : css.isOffline}`}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
