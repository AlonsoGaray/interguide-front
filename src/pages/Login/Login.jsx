import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions';
import useForm from '../../hooks/useForm';
import {
  Form,
  LogoContainer,
  InputContainer,
  Button,
  RegisterContainer,
} from './styled';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { form, handleChange } = useForm({});
  const [formOk, setFormOk] = useState(0);
  const [formData, setFormData] = useState();

  useEffect(() => {
    const validateForm = () => {
      try {
        if (form?.password !== undefined) {
          const data = form?.password.length > 5;
          setFormOk(data);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    validateForm();
  }, [handleChange]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await loginUser(dispatch, form);
    setFormData(data);
    setTimeout(() => {
      setFormData(null);
    }, 2500);
  };

  useEffect(() => {
    const validateLogin = async () => {
      if (user) {
        navigate('/');
      }
    };
    validateLogin();
  }, [handleSubmit]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <LogoContainer>
          <p>El mejor servicio, al mejor precio</p>
        </LogoContainer>

        <InputContainer>
          <input
            data-cy="login-input_email"
            name="email"
            type="email"
            placeholder="correo"
            value={undefined}
            onChange={handleChange}
            required
          />
          <input
            data-cy="login-input_password"
            name="password"
            type="password"
            value={undefined}
            placeholder="contraseña"
            onChange={handleChange}
            required
          />
        </InputContainer>

        <Button data-cy="login-btn_login" type="submit" disabled={!formOk}>
          Ingresa
        </Button>

        {/* <p className="form_login__text">o Ingresa con:</p>
        <div className="form_login__logos_login">
          <Link to="/">
            <img
              className="form_login__logo_login"
              src={facebookLogo}
              alt="facebook"
            />
          </Link>
          <Link to="/">
            <img
              className="form_login__logo_login"
              src={gmailLogo}
              alt="gmail"
            />
          </Link>
        </div> */}

        <RegisterContainer>
          <p>¿Aún no tienes una cuenta?</p>
          <Link to="/register">Regístrate</Link>
        </RegisterContainer>
      </Form>
      {formData ? <p>{formData.message}</p> : null}
    </>
  );
};

export default Login;
