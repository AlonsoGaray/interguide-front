import { useAuth0 } from '@auth0/auth0-react';
import { HeaderContainer, Logo, ProfileImg, LogoutContainer } from './styled';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Header = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <HeaderContainer>
      <Logo>interguide</Logo>
      <SearchBar />
      {isAuthenticated ? (
        <LogoutContainer>
          <ProfileImg src={user?.picture} alt={user?.nickname} />
          <LogoutButton />
        </LogoutContainer>
      ) : (
        <LoginButton />
      )}
    </HeaderContainer>
  );
};

export default Header;
