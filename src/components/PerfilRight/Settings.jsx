import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { patchUserData } from '../../store/actions';
import useForm from '../../hooks/useForm';
import {
  Container,
  FormData,
  FormContainer,
  Button,
  Input,
  Inputcontainer,
} from './settings';

const Settings = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const prefilledForm = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    country: user?.country,
  };
  const { form, handleChange } = useForm(prefilledForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await patchUserData(dispatch, {
      id: user?.id,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      country: form.country,
    });
  };

  return (
    <Container>
      <FormData>
        <FormContainer>
          <Inputcontainer>
            <p>First Name</p>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              defaultValue={user?.firstName}
            />
          </Inputcontainer>
          <Inputcontainer>
            <p>Last Name</p>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              defaultValue={user?.lastName}
            />
          </Inputcontainer>
          <Inputcontainer>
            <p>Email</p>
            <Input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              defaultValue={user?.email}
            />
          </Inputcontainer>
          <Inputcontainer>
            <p>Country</p>
            <Input
              type="text"
              id="country"
              name="country"
              onChange={handleChange}
              defaultValue={user?.country}
            />
          </Inputcontainer>
        </FormContainer>
        <Button type="button" onClick={handleSubmit}>
          Save
        </Button>
      </FormData>
    </Container>
  );
};

export default Settings;
