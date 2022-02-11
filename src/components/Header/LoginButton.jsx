import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './styled';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button type="button" onClick={loginWithRedirect}>
      Login
    </Button>
  );
};

export default LoginButton;
