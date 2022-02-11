import { Outlet } from 'react-router-dom';
import PerfilLeft from '../../components/PerfilLeft/PerfilLeft';
import Container from './styled';

const MiPerfil = () => {
  return (
    <Container>
      <PerfilLeft />
      <Outlet />
    </Container>
  );
};

export default MiPerfil;
