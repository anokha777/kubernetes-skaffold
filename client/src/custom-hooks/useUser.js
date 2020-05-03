import { useSelector } from "react-redux";

export const useUser = () => {
  const { user } = useSelector(state => {
    const {
      user: { loggedIn, id, userName, token }
    } = state;
    if (!loggedIn) {
      return { user: null };
    }
    return {
      user: {
        loggedIn,
        id,
        userName,
        token
      }
    };
  });
  return user;
};
