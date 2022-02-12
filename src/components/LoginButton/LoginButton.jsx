import { useNavigate } from 'react-router-dom';
import Button from './styled';

const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <Button type="button" onClick={() => navigate('/login')}>
      Login
    </Button>
  );
};

export default LoginButton;
