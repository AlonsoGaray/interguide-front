import React from 'react';
import {
  Container,
  FormData,
  FormContainer,
  Button,
  Input,
  Inputcontainer,
} from './settings';

const Settings = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('gol');
  };

  return (
    <Container>
      <FormData onSubmit={handleSubmit}>
        <FormContainer>
          <Inputcontainer>
            <p>First Name</p>
            <Input type="text" id="name" name="name" />
          </Inputcontainer>
          <Inputcontainer>
            <p>Last Name</p>
            <Input type="text" id="last" name="last" />
          </Inputcontainer>
          <Inputcontainer>
            <p>Email</p>
            <Input type="text" id="email" name="email" />
          </Inputcontainer>
          <Inputcontainer>
            <p>Country</p>
            <Input type="text" id="country" name="country" />
          </Inputcontainer>
        </FormContainer>
        <Button type="submit">Save</Button>
      </FormData>
    </Container>
  );
};

export default Settings;
