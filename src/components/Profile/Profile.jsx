import PropTypes from 'prop-types';
import {
  ProfileTag,
  DescriptionWrapper,
  Avatar,
  UserName,
  Info,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileTag>
      <DescriptionWrapper>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </DescriptionWrapper>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </ProfileTag>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
