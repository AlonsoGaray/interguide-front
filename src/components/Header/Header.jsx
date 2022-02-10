import { HeaderContainer, Logo, Button } from './styled';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>interguide</Logo>
      <SearchBar />
      <Button>Ingresar</Button>
    </HeaderContainer>
  );
};

export default Header;
