// import { useAuth } from 'hooks';
import { UserName, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  //   const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, bro!</UserName>
      <button type="button">Logout</button>
    </Wrapper>
  );
};
