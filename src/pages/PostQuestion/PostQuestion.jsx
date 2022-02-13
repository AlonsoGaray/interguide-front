import React from 'react';
import { useSelector } from 'react-redux';
import { Container, FormContainer } from './styled';

const PostQuestion = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      {user ? (
        <Container>
          <p>Postea</p>
          <FormContainer>
            <p>Aqui</p>
          </FormContainer>
        </Container>
      ) : (
        <p>Logeate</p>
      )}
    </div>
  );
};

export default PostQuestion;
