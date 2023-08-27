import React from 'react';
import axios from 'axios';

const fetchUserLevel = async (email) => {
  try {
    const response = await axios.get('/user');
    const users = response.data;
    const matchingUser = users.find((user) => user.email === email);
    if (matchingUser) {
      return matchingUser.level;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching user level:', error);
    return null;
  }
};

const ProfileBadge = ({ email }) => {
  const [level, setLevel] = React.useState(null);
  React.useEffect(() => {
    fetchUserLevel(email).then((result) => {
      setLevel(result);
    });
  }, [email]);

  let badgeClass = '';

  switch (level) {
    case 'Student':
      badgeClass = 'bg-blue-500';
      break;
    case 'Club Coordinator':
      badgeClass = 'bg-green-500';
      break;
    case 'Student Club Coordinator':
      badgeClass = 'bg-yellow-500';
      break;
    case 'Admin':
      badgeClass = 'bg-red-500';
      break;
    default:
      badgeClass = 'bg-gray-500';
  }

  return (
    <span className={`inline-block px-2 py-1 text-white rounded ${badgeClass}`}>
      {level}
    </span>
  );
};

export default ProfileBadge;
