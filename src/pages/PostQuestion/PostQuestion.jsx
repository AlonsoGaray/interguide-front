/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import { Container, FormContainer, SubmitButton } from './styled';
import useForm from '../../hooks/useForm';
import { postQuestion, getTagsFromDB } from '../../store/actions';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const PostQuestion = () => {
  const user = useSelector((state) => state.user);
  const tagsDB = useSelector((state) => state.tagsDB);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profileForm = {
    userId: user?.id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    tag: [],
  };

  const { form, handleChange } = useForm(profileForm);
  const [formOk, setFormOk] = useState(0);

  const suggestions = tagsDB.map((tag) => {
    return {
      id: tag._id,
      name: tag.name,
      _id: tag._id,
    };
  });
  const [tagsData, setTagsData] = useState([]);
  const [tagsName, setTagsName] = useState([]);

  const handleDelete = (i) => {
    setTagsData(tagsData.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    if (tagsName.includes(tag.name)) {
      setTagsData([...tagsData, tag]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    tagsData.forEach((item) => {
      form.tag.push(item);
    });

    const response = await postQuestion(dispatch, form);

    setTagsData([]);

    if (response.ok) {
      setTimeout(() => {
        navigate('/');
      }, 200);
    }

    if (response.error) {
      setTimeout(() => {
        setTagsData([]);
      }, 2500);
    }
  };

  useEffect(() => {
    const nameTags = tagsDB.map((tag) => tag.name);
    setTagsName(nameTags);
  }, [tagsDB]);

  useEffect(() => {
    const validateForm = () => {
      if (Object.keys(form)?.length >= 1 && form?.question?.length > 2) {
        return setFormOk(true);
      }
      return setFormOk(false);
    };
    validateForm();
  }, [handleChange]);

  useEffect(() => {
    const getTags = async () => {
      await getTagsFromDB(dispatch);
    };
    getTags();
  }, []);

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
            <ReactTags
              labelField="name"
              tags={tagsData}
              suggestions={suggestions}
              delimiters={delimiters}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              inputFieldPosition="top"
              autofocus={false}
              autocomplete
            />

            <p>Companies</p>
            <ReactTags
              labelField="name"
              tags={tagsData}
              suggestions={suggestions}
              delimiters={delimiters}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              inputFieldPosition="top"
              autofocus={false}
              autocomplete
            />

            <SubmitButton type="submit" disabled={!formOk}>
              Submit
            </SubmitButton>
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
