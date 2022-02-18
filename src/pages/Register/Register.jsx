import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/actions';
import useForm from '../../hooks/useForm';
import {
  Form,
  LogoContainer,
  InputContainer,
  Button,
  LoginContainer,
  Container,
} from './styled';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, handleChange } = useForm({});
  const [formOk, setFormOk] = useState(0);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const validateForm = () => {
      try {
        if (form.password !== undefined) {
          const data =
            form?.password.length > 5 &&
            form?.confirmpassword === form?.password;
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

    const response = await registerUser(dispatch, form);

    setFormData(response);
    if (response.error) {
      setTimeout(() => {
        setFormData(null);
      }, 2500);
    }
  };

  useEffect(() => {
    const redirect = () => {
      if (formData?.ok) {
        navigate('/');
      }
    };
    redirect();
  }, [formData]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <LogoContainer>
          <h1>interguide</h1>
          <p>The place to share your interviews and help others</p>
        </LogoContainer>

        <InputContainer>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={undefined}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={undefined}
            onChange={handleChange}
            required
          />
          <input
            name="country"
            type="text"
            placeholder="Country"
            value={undefined}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={undefined}
            onChange={handleChange}
            required
          />
          <input
            data-cy="login-input_password"
            name="password"
            type="password"
            value={undefined}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            value={undefined}
            onChange={handleChange}
            required
          />
        </InputContainer>

        <Button type="submit" disabled={!formOk}>
          Register
        </Button>

        {/* <p className="form_register__text">o Regístrate con:</p>
        <div className="form_register__logos_register">
          <Link to="/">
            <img
              className="form_register__logo_register"
              src={facebookLogo}
              alt="facebook"
            />
          </Link>
          <Link to="/">
            <img
              className="form_register__logo_register"
              src={gmailLogo}
              alt="gmail"
            />
          </Link>
        </div> */}

        <LoginContainer>
          <p>Already have an account?</p>
          <Link to="/login">LOGIN</Link>
        </LoginContainer>
      </Form>
      {formData?.error ? (
        <p className="alert">
          {Object.keys(formData?.error)} is already in use
        </p>
      ) : null}
    </Container>
  );
};

export default Register;
