/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer } from './styled';
import useForm from '../../hooks/useForm';
import { postQuestion } from '../../store/actions';

const PostQuestion = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profileForm = {
    userId: user?.id,
    firstName: user?.firstName,
    lastName: user?.lastName,
  };

  const { form, handleChange } = useForm(profileForm);
  const [formOk, setFormOk] = useState(0);
  const [formData, setFormData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await postQuestion(dispatch, form);

    setFormData(response);
    if (response.error) {
      setTimeout(() => {
        setFormData(null);
      }, 2500);
    }
  };

  useEffect(() => {
    const validateForm = () => {
      if (Object.keys(form)?.length >= 3 && form?.question?.length > 2) {
        return setFormOk(true);
      }
      return setFormOk(false);
    };
    validateForm();
  }, [handleChange]);

  useEffect(() => {
    const redirect = () => {
      if (formData?.ok) {
        navigate('/');
      }
    };
    redirect();
  }, [formData]);

  // eslint-disable-next-line no-console
  console.log(form);

  return (
    <div>
      {user ? (
        <Container>
          <p>Post The Question</p>
          <FormContainer onSubmit={handleSubmit}>
            <p>Question</p>
            <input
              name="question"
              id="question"
              type="text"
              onChange={handleChange}
              placeholder="e.g What is an anonymous function?"
            />

            <p>Tags</p>
            <input
              name="tag"
              id="tag"
              type="text"
              onChange={handleChange}
              placeholder="e.g JavaScript"
            />

            <button type="submit" disabled={!formOk}>
              Submit
            </button>
            {/* <input type="checkbox" name="answer" id="answer" /> */}
          </FormContainer>
        </Container>
      ) : (
        <p>Logeate</p>
      )}
    </div>
  );
};

export default PostQuestion;
