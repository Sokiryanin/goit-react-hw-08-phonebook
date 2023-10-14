import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      <AuthNav />
    </Header>
  );
};
